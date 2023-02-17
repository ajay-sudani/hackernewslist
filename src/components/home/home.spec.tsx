import mockAxios from "jest-mock-axios";
import "@testing-library/jest-dom/extend-expect";
import { BASE_API_URL } from "../../utils/constants";
import { getStoryIds, getStoryDetails, getStories } from "./home.service";
import { IStory } from "../../elements/storyCard/storyCard";

jest.mock("axios");

const NETWORK_ERROR_MESSAGE = "Network Error";
const STORY_DETAILS: { data: IStory } = {
  data: {
    id: 1,
    by: "John",
    score: 123,
    time: 1234567890,
    title: "News",
    type: "job",
    url: "http://www.dummy.com",
    kids: [1, 2, 3, 4],
  },
};

describe("fetchStoryIds", () => {
  const url = `${BASE_API_URL}/topstories.json`;

  afterEach(() => {
    mockAxios.reset();
  });

  describe("when API call is successful", () => {
    it("should return story ids", async () => {
      // Given
      const storyIds = {
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      };
      mockAxios.get.mockResolvedValueOnce(storyIds as never);

      // when
      const result = await getStoryIds();

      // then
      expect(mockAxios.get).toHaveBeenCalledWith(url);
      expect(result).toEqual(storyIds.data);
    });
  });

  describe("when API call fails", () => {
    it("should return error", async () => {
      // given
      mockAxios.get.mockRejectedValueOnce(new Error(NETWORK_ERROR_MESSAGE));

      // when
      const result = await getStoryIds();

      // then
      expect(mockAxios.get).toHaveBeenCalledWith(url);
      expect(result).toEqual(new Error(NETWORK_ERROR_MESSAGE));
    });
  });
});

describe("fetchStoryDetails", () => {
  const url = `${BASE_API_URL}/item/1.json`;

  afterEach(() => {
    mockAxios.reset();
  });

  describe("when API call is successful", () => {
    it("should return story details", async () => {
      mockAxios.get.mockResolvedValueOnce(STORY_DETAILS as never);

      // when
      const result = await getStoryDetails(1);

      // then
      expect(mockAxios.get).toHaveBeenCalledWith(url);
      expect(result).toEqual(STORY_DETAILS.data);
    });
  });

  describe("when API call fails", () => {
    it("should return error", async () => {
      // given
      mockAxios.get.mockRejectedValueOnce(new Error(NETWORK_ERROR_MESSAGE));

      // when
      const result = await getStoryDetails(1);

      // then
      expect(mockAxios.get).toHaveBeenCalledWith(url);
      expect(result).toEqual(new Error(NETWORK_ERROR_MESSAGE));
    });
  });
});

describe("fetchStories", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  describe("when API call is successful", () => {
    it("should return stories details", async () => {
      mockAxios.get.mockResolvedValue(STORY_DETAILS as never);

      // when
      const result = (await getStories([1, 2])) as IStory[];

      // then
      expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_API_URL}/item/1.json`);
      expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_API_URL}/item/2.json`);
      expect(result.length).toBe(2);
      expect(result[0]).toEqual(STORY_DETAILS.data);
      expect(result[1]).toEqual(STORY_DETAILS.data);
    });
  });

  describe("when API call fails", () => {
    it("should return error", async () => {
      // given
      mockAxios.get.mockRejectedValue(new Error(NETWORK_ERROR_MESSAGE));

      // when
      const result = (await getStories([1, 2])) as Array<Error>;

      // then
      expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_API_URL}/item/1.json`);
      expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_API_URL}/item/2.json`);
      expect(result[0]).toEqual(new Error(NETWORK_ERROR_MESSAGE));
      expect(result[1]).toEqual(new Error(NETWORK_ERROR_MESSAGE));
    });
  });

  describe("when few API call fails and few successful", () => {
    it("should return stories and errors both", async () => {
      // given
      mockAxios.get.mockResolvedValueOnce(STORY_DETAILS as never);

      mockAxios.get.mockRejectedValueOnce(new Error(NETWORK_ERROR_MESSAGE));

      // when
      const result = (await getStories([1, 2, 3, 4])) as Array<Error>;

      // then
      expect(result.length).toBe(4);
      expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_API_URL}/item/1.json`);
      expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_API_URL}/item/2.json`);
      expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_API_URL}/item/3.json`);
      expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_API_URL}/item/4.json`);
      expect(result[0]).toEqual(STORY_DETAILS.data);
      expect(result[1]).toEqual(new Error(NETWORK_ERROR_MESSAGE));
    });
  });
});
