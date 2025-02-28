import { fullName, funFact, hobby, image, yearOfBirth } from "../variables";

describe("Variables 🍋", () => {
  const variables: { [key: string]: { type: string; value: string | number } } =
    {
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

  for (const variable in variables) {
    const { type, value } = variables[variable];
    describe(variable, () => {
      it(`${variable} should exist`, () => {
        expect(value).toBeTruthy();
      });

      it(`${variable} should be a ${type}`, () => {
        expect(typeof value).toBe(type);
      });
    });
  }
});
