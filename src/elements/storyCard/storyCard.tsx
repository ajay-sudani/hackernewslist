/**
 * Button element
 */
import * as React from "react";
import AnimateElement from "../animate-element/animate-element";
import styles from "./storyCard.module.scss";

export interface IStroyProps {
  title: string;
  url: string;
  by: string;
  time: number;
  score: number;
  type: string;
}

const Card = (props: IStroyProps) => {
  const { type, title, url, by, score, time } = props;
  const date = new Date(time * 1000).toDateString();

  return (
    <AnimateElement>
      <div className={styles.storyCard} role="group" aria-label="news">
        <a href={url} target="_blank" rel="noreferrer">
          <p>{type}</p>
          <p>{by}</p>
          <p>Score: {score}</p>
          <p>{date}</p>
          <p>{title}</p>
        </a>
        <a href={url} target="_blank" rel="noreferrer">
          View News
        </a>
      </div>
    </AnimateElement>
  );
};

export default Card;
