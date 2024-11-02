const { faker } = require("@faker-js/faker");

const {
  fullName,
  yearOfBirth,
  hobby,
  funFact,
  image,
  fullNameString,
  ageString,
  hobbyString,
  incrementBy1,
  incrementBy2,
  decrementBy1,
  decrementBy2,
} = require("./variables");

describe("Variables 🍋", () => {
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

describe("String Interpolation 🤼‍♀️", () => {
  const variables = {
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

describe("Reassignment 🌶️", () => {
  const init = faker.number.int({ max: 100 });
  let stars = init;

  it("incrementBy1 should increment by one 😀", () => {
    eval(`(${incrementBy1.toString()}());`);
    expect(stars).toBe(init + 1);
  });

  it("incrementBy2 should increment by two 😀", () => {
    eval(`(${incrementBy2.toString()}());`);
    expect(stars).toBe(init + 3);
  });

  it("decrementBy1 should decrement by one 😀", () => {
    eval(`(${decrementBy1.toString()}());`);
    expect(stars).toBe(init + 2);
  });

  it("decrementBy2 should decrement by two 😀", () => {
    eval(`(${decrementBy2.toString()}());`);
    expect(stars).toBe(init);
  });
});
