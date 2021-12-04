export const csvToArray = (str, delimiter = ",") => {
  const headerValues = ["name", "opdr", "difficult", "fun"];
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  const completeObject = rows.map((row) => {
    const values = row.split(delimiter);
    const element = headerValues.reduce((returnObject, header, index) => {
      returnObject[header] = values[index];
      return returnObject;
    }, {});
    return element;
  });
  return completeObject;
};

export const createObjectPerPerson = (object) =>
  object.reduce((pV, current) => {
    if (!pV.some((e) => e.details.firstName === current.name)) {
      const newPerson = {
        details: {
          firstName: current.name,
          lastName: "pick a random name",
          age: "random age",
          email: "generate from first and lastname",
          photo: "random photo url",
        },
        assingments: [
          {
            opdr: current.opdr,
            diff: current.difficult,
            fun: current.fun,
          },
        ],
        id: `${Math.floor(Math.random() * 987845687854566)}-${Math.floor(
          Math.random() * 987845687854566
        )}`,
      };
      pV.push(newPerson);
    } else {
      const update = {
        opdr: current.opdr,
        diff: current.difficult,
        fun: current.fun,
      };
      pV[
        pV.findIndex((e) => e.details.firstName === current.name)
      ].assingments.push(update);
    }
    return pV;
  }, []);
