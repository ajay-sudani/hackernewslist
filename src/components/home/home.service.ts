import axios from 'axios';
import { BASE_API_URL } from '../../utils/constants';

export interface IStory {
    id: number;
    by: string;
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
    kids: number[];
}

/**
 * Get ids of top stories from hacker news API
 * @returns story ids
 */
export const getStoryIds = async () => {
    try {
        const { data: storyIds } = await axios.get(`${BASE_API_URL}/topstories.json`);
        return storyIds;
    } catch (error) {
        return error;
    }
};

/**
 * Get story details using story id
 * @param id story id
 * @returns story details
 */
export const getStoryDetails = async (id: number) => {
    try {
        const { data } = await axios.get(`${BASE_API_URL}/item/${id}.json`);
        return data;
    } catch (error) {
        return error;
    }
};

/**
 * Returns list of story with details.
 * Use `.allSettled` instead of `.all` because if some API returns errors it will not affect other APIs which return success.
 * @param storyIds list of story ids for which we get details
 * @returns list of story with details
 */
export const getStories = async (storyIds: number[]) => {
    try {
        const stories = await Promise.allSettled(storyIds.map(getStoryDetails));
        return stories.filter((result): result is PromiseFulfilledResult<number> => result.status === "fulfilled")
            .map(x => x.value);
    } catch (error) {
        return error;
    }
};