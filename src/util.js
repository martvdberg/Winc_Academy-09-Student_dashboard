import { extraData } from "./assets/extraStudentDetails";

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

// get a random age between 18 and 65
const getAge = () => {
  let age;
  while (true) {
    age = Math.floor(Math.random() * 65);
    if (age > 18) {
      return age;
    }
  }
};

// create extra details for the student
const getExtraDetails = (typeOfDetail, randomNumber) => {
  if (typeOfDetail === "photo") {
    return extraData[randomNumber].picture.large;
  } else if (typeOfDetail === "email") {
    const mailAdress = extraData[randomNumber].email;
    const newMail = mailAdress.substring(mailAdress.indexOf("."));
    return newMail;
  } else if (typeOfDetail === "phone") {
    return extraData[randomNumber].phone;
  } else {
    return extraData[randomNumber].name.last;
  }
};

export const createObjectPerPerson = (object) => {
  const dataPerStudent = object.reduce((students, current, index) => {
    // a randomNumber to use wen creating extra student details, declere it here so the email and last name will match
    const randomNumber = Math.floor(Math.random() * extraData.length);

    // create a new student object if student name does not exist yet
    if (!students.some((e) => e.details.firstName === current.name)) {
      const newPerson = {
        details: {
          firstName: current.name,
          lastName: getExtraDetails("lastName", randomNumber),
          age: getAge(),
          email: current.name + getExtraDetails("email", randomNumber),
          phone: getExtraDetails("phone", randomNumber),
          photo: getExtraDetails("photo", randomNumber),
          id: generateId(),
          checked: false,
        },
        assignments: [
          {
            task: current.task,
            fun: parseInt(current.fun.slice(0, 1)), // \r comes after the fun value need to fix this in csvToArry
            diff: parseInt(current.diff),
          },
        ],
      };
      students.push(newPerson);
    } else {
      const newTask = {
        task: current.task,
        fun: parseInt(current.fun.slice(0, 1)), // \r comes after the fun value need to fix this in csvToArry
        diff: parseInt(current.diff),
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

// sort assignments by fun or diff
export const sortAssignmentByGrade = (averagePerTask, filterOption) => {
  const sortedAssignments = averagePerTask.sort((a, b) =>
    a[filterOption] > b[filterOption] ? 1 : -1
  );
  return sortedAssignments;
};
