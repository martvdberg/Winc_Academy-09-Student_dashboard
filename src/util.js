import { extraData, emailDomain } from "./assets/extraStudentDetails";

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

const getLastName = () => {
  const randomNumber = Math.floor(Math.random() * extraData.length);
  return extraData[randomNumber].name.last;
};
const getProfilePicture = () => {
  const randomNumber = Math.floor(Math.random() * extraData.length);
  return extraData[randomNumber].picture.large;
};
const getAge = () => {
  let age;
  while (true) {
    age = Math.floor(Math.random() * 65);
    if (age > 18) {
      return age;
    }
  }
};
const getEmail = (firstName) => {
  const randomNumber = Math.floor(Math.random() * emailDomain.length);
  return `${firstName}@${emailDomain[randomNumber].emailDomain}`;
};

export const createObjectPerPerson = (object) => {
  const dataPerStudent = object.reduce((students, current, index) => {
    // create a new student object if student name does not exist yet
    if (!students.some((e) => e.details.firstName === current.name)) {
      const newPerson = {
        details: {
          firstName: current.name,
          lastName: getLastName(),
          age: getAge(),
          email: getEmail(current.name),
          photo: getProfilePicture(),
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
  return dataPerStudent;
};

export const sortByTask = (studentsData) =>
  studentsData[0].assignments.map((e) => {
    return {
      task: e.task,
      fun: 0,
      diff: 0,
    };
  });

export const getSelectedStudents = (studentsData) => {
  if (studentsData !== undefined) {
    return studentsData.filter((student) => student.details.checked);
  }
};

export const generateId = () => `${Math.floor(Math.random() * 999999999)}`;
