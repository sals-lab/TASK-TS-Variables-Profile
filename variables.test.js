const { fullName, yearOfBirth, hobby, funFact, image } = require("./variables");

describe("Variables", () => {
  const variables = {
    fullName: {
      type: "string",
      value: fullName,
    },
    yearOfBirth: {
      type: "number",
      value: yearOfBirth,
    },
    hobby: {
      type: "string",
      value: hobby,
    },
    funFact: {
      type: "string",
      value: funFact,
    },
    image: {
      type: "string",
      value: image,
    },
  };

  Object.keys(variables).forEach((variable) => {
    const { type, value } = variables[variable];
    describe(variable, () => {
      it(`${variable} should exist`, () => {
        expect(value).toBeTruthy();
      });

      it(`${variable} should be a ${type}`, () => {
        expect(typeof value).toBe(type);
      });
    });
  });
});
