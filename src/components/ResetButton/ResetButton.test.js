import React from "react";
import { render} from "@testing-library/react";

import ResetButton from "./ResetButton";

it("check-refresh-button", () => {
  const {queryByTitle} = render(<ResetButton />);
  const refresh = queryByTitle("refresh");
  expect(refresh).toBeTruthy();
});