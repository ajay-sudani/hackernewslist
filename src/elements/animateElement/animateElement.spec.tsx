import React from "react";
import renderer from "react-test-renderer";
import Loader from "../loader";
import AnimateElement from "./animateElement";

describe("AnimateElement", () => {
  it("should render with the text as a child prop", () => {
    const animateElement = renderer
      .create(<AnimateElement children="Animated element" />)
      .toJSON();
    expect(animateElement).toMatchSnapshot();
  });

  it("should render with other components as a child prop", () => {
    const animateElement = renderer
      .create(<AnimateElement children={<Loader />} />)
      .toJSON();
    expect(animateElement).toMatchSnapshot();
  });
});
