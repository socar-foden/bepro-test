import { render, screen } from "@testing-library/react";
import React from "react";

import App from "./App";

describe("[App]", () => {
  beforeEach(() => {
    render(<App />);
  });

  describe("[구성]", () => {
    it("layout을 포함한다.", () => {
      const layout = screen.getByRole("layout");
      expect(layout).toBeInTheDocument();
    });
  });
});
