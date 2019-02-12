import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import Button from "./";

afterEach(cleanup);

describe("Button", () => {
  test("Button handles click", () => {
    const onClick = jest.fn();

    const { getByText } = render(<Button onClick={onClick}>Button</Button>);

    fireEvent.click(getByText(/Button/));

    expect(onClick).toBeCalled();
  });
});
