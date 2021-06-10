import { render, screen } from "@testing-library/react";
import React from "react";

import Layout from "./Layout";

const Test: React.FC = () => {
  return <div data-testid="children">test</div>;
};

describe("[Layout]", () => {
  beforeEach(() => {
    render(
      <Layout>
        <Test />
      </Layout>
    );
  });

  describe("[기능]", () => {
    it("children을 렌더링한다.", () => {
      const children = screen.getByTestId("children");
      expect(children).toBeInTheDocument();
    });
  });
});
