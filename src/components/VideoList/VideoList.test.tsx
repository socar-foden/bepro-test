import { render, screen } from "@testing-library/react";
import React from "react";

import { mockVideoList } from "../../constants";
import VideoList from "./VideoList";

describe("[VideoList]", () => {
  beforeEach(() => {
    render(<VideoList videoList={mockVideoList} playingIndex={0} />);
  });

  describe("[기능]", () => {
    it("video list를 렌더링한다.", () => {
      const videoList = screen.getAllByRole("listitem", { name: "video" });

      expect(videoList.length).toBe(mockVideoList.length);
    });
  });
});
