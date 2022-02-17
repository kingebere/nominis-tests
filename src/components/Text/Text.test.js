import React from "react";
import {screen, render, fireEvent} from "@testing-library/react";

import Text from "./Text";
describe("renders component", () => {
  const names = ["teeth.", "brush", "my", "I"];
  test("display text", () => {
    const {container} = render(<Text names={names} />);
    expect(container).toMatchSnapshot();
  });
});

describe("checks text", () => {
  const names = ["teeth.", "brush", "my", "I"];
  test("display text", () => {
    render(<Text names={names} />);
    expect(screen.getByRole("button", {name: /teeth\./i})).toBeInTheDocument();
  });
});

test("click test", () => {
  const click = jest.fn();
  const names = ["teeth.", "brush", "my", "I"];
  const {queryByText} = render(<Text names={names} click={click} />);
  const button = queryByText("teeth.");
  fireEvent.click(button);

  expect(click).toHaveBeenCalledTimes(1);
});
