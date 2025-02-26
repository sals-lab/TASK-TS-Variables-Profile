const { faker } = require("@faker-js/faker");

import {
  decrementBy1,
  decrementBy2,
  incrementBy1,
  incrementBy2,
} from "../variables";

describe("Reassignment 🌶️", () => {
  const init = faker.number.int({ max: 100 });
  let hackerScore = init;

  it("incrementBy1 should increment by one 😀", () => {
    eval(`(${incrementBy1.toString()}());`);
    expect(hackerScore).toBe(init + 1);
  });

  it("incrementBy2 should increment by two 😀", () => {
    eval(`(${incrementBy2.toString()}());`);
    expect(hackerScore).toBe(init + 3);
  });

  it("decrementBy1 should decrement by one 😀", () => {
    eval(`(${decrementBy1.toString()}());`);
    expect(hackerScore).toBe(init + 2);
  });

  it("decrementBy2 should decrement by two 😀", () => {
    eval(`(${decrementBy2.toString()}());`);
    expect(hackerScore).toBe(init);
  });
});
