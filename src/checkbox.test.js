import { render, fireEvent } from "@testing-library/react";

import { Checkbox } from "./checkbox";

test("Select checkbox should change value true", () => {
  const { getBylabelText } = render(<Checkbox />);
  const checbox = getBylabelText(/not checked/i);
  fireEvent.click(checbox);
  expect(checbox.q).toEqual(true);
});
