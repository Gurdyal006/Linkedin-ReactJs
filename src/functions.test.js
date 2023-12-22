import { addTwoTimes } from "./functions";

test("Multiply by 2", () => {
  expect(addTwoTimes(3)).toBe(6);
});
