export const csvToArray = (str, delimiter = ",") => {
  // set new headers and extract rows tarting after the first line break
  const headerValues = ["name", "task", "diff", "fun"];
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");

  // create an object for each value of the with the header as object property
  const completeObject = rows.map((row) => {
    const values = row.split(delimiter);
    const element = headerValues.reduce((objectValue, header, index) => {
      objectValue[header] = values[index];
      return objectValue;
    }, {});
    return element;
  });
  return completeObject;
};

export const createObjectPerPerson = (object) =>
  object.reduce((students, current) => {
    // create a new student object if student name does not exist yet
    if (!students.some((e) => e.details.firstName === current.name)) {
      const newPerson = {
        details: {
          firstName: current.name,
          lastName: "pick a random name",
          age: "random age",
          email: "generate from first and lastname",
          photo: "random photo url",
          id: generateId(),
          checked: false,
        },
        assignments: [
          {
            task: current.task,
            fun: current.fun.slice(0, 1), // \r comes after the fun value need to fix this in csvToArry
            diff: current.diff,
          },
        ],
      };
      students.push(newPerson);
    } else {
      const newTask = {
        task: current.task,
        fun: current.fun.slice(0, 1), // \r comes after the fun value need to fix this in csvToArry
        diff: current.diff,
      };
      if (isNaN(current.task.slice(-1))) {
        newTask.task = current.task.split("Project -").pop();
      }
      students[
        students.findIndex((e) => e.details.firstName === current.name)
      ].assignments.push(newTask);
    }
    return students;
  }, []);

export const sortByTask = (studentsData) =>
  studentsData[0].assignments.map((e) => {
    return {
      task: e.task,
      fun: 0,
      diff: 0,
    };
  });

export const getSelectedStudents = (studentsData) =>
  studentsData.filter((student) => student.details.checked);

export const generateId = () =>
  `${Math.floor(Math.random() * 999999999)}-${Math.floor(
    Math.random() * 999999999
  )}`;
