import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { STORIES_PER_PAGE } from "../../utils/constants";
import { getStories, getStoryIds } from "./home.service";
import Loader from "../../elements/loader";
import Card, { IStory } from "../../elements/storyCard/storyCard";
import styles from "./home.module.scss";

const Home = () => {
  const [storyIds, setStoryIds] = useState<number[]>([]);
  const [stories, setStories] = useState<IStory[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getAndSetStoryIds = async () => {
      const storyIds = await getStoryIds();
      setStoryIds(storyIds);
      getMoreStories(storyIds.slice(0, STORIES_PER_PAGE));
    };

    const getMoreStories = async (ids: number[]) => {
      const data = await getStories(ids);
      if (data?.length === 0) {
        setHasMore(false);
      } else {
        setStories((stories) => stories.concat(data as any));
      }
    };

    if (page === 1) {
      getAndSetStoryIds();
    } else {
      getMoreStories(
        storyIds.slice(STORIES_PER_PAGE * (page - 1), STORIES_PER_PAGE * page)
      );
    }
  }, [page]);

  return (
    <div className={styles.container}>
      <h1>Welcome to hacker news</h1>
      <InfiniteScroll
        dataLength={stories.length}
        next={() => {
          setPage(page + 1);
        }}
        hasMore={hasMore}
        loader={
          <div className={styles.loadingContent}>
            <Loader />
          </div>
        }
        endMessage={
          <p className={styles.center}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        pullDownToRefreshContent={
          <h3 className={styles.center}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 className={styles.center}>&#8593; Release to refresh</h3>
        }
      >
        <div className={styles.stories}>
          {stories.map((story) => (
            <Card key={story.id} {...story}></Card>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
