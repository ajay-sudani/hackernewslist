/**
 * Button element
 */
import * as React from "react";
import AnimateElement from "../animate-element/animate-element";
import styles from "./storyCard.module.scss";

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

const Card: React.FC<IStory> = (props) => {
  const { title, url, by, score, time } = props;
  const date = new Date(time * 1000).toDateString();

  return (
    <AnimateElement>
      <div className={styles.storyCard} role="group" aria-label="news">
        <a href={url} target="_blank" rel="noreferrer">
          <p>{by}</p>
          <p>Score: {score}</p>
          <p>{date}</p>
          <p>{title}</p>
        </a>
      </div>
    </AnimateElement>
  );
};

export default Card;
