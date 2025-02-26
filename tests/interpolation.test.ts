import {
  ageString,
  fullName,
  fullNameString,
  hobby,
  hobbyString,
  yearOfBirth,
} from "../variables";

describe("String Interpolation 🤼‍♀️", () => {
  const variables: { [key: string]: { value: string; expectation: string } } = {
    fullNameString: {
      value: fullNameString,
      expectation: `My name is ${fullName}`,
    },
    ageString: {
      value: ageString,
      expectation: `I am ${new Date().getFullYear() - yearOfBirth}`,
    },
    hobbyString: { value: hobbyString, expectation: `My hobby is ${hobby}` },
  };

  for (const variable in variables) {
    const { value, expectation } = variables[variable];

    describe(variable, () => {
      it(`${variable} should exist`, () => {
        expect(value).toBeTruthy();
      });

      it(`${variable} should be a string`, () => {
        expect(typeof value).toBe("string");
      });

      it(`${variable} should have the correct contents`, () => {
        expect(value).toBe(expectation);
      });
    });
  }
});
