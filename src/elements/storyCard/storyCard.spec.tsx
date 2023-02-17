import React from "react";
import renderer from "react-test-renderer";
import StoryCard, { IStory } from "./storyCard";

const storyCard: IStory = {
  by: "John",
  id: 1,
  kids: [1, 2, 3],
  score: 85,
  time: 1234567890,
  title: "Latest news about W3C",
  type: "Blog",
  url: "http://www.dummy.com",
};

describe("StoryCard", () => {
  it("should render with default props", () => {
    const animateElement = renderer
      .create(<StoryCard {...storyCard} />)
      .toJSON();
    expect(animateElement).toMatchSnapshot();
  });
});
