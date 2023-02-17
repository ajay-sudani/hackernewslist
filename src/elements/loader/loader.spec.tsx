import React from "react";
import renderer from "react-test-renderer";
import Loader from "../loader";

describe("Loader", () => {
  it("should renders", () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
