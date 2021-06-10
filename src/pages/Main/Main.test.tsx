import { render, screen } from "@testing-library/react";
import React from "react";

import Main from "./Main";

describe("[Main]", () => {
  beforeEach(() => {
    render(<Main />);
  });

  describe("[구성]", () => {
    it("player, video-list 영역을 포함한다.", () => {
      const player = screen.getByRole("figure", { name: "player" });
      const videoList = screen.getByRole("list", { name: "video-list" });

      expect(player).toBeInTheDocument();
      expect(videoList).toBeInTheDocument();
    });
  });
});
