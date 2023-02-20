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
        <div>
          <p className={styles.indicator}></p>
          By {by}
        </div>

        <h2>{title}</h2>

        <div className={styles.type}>
          {type}
          <p className={styles.indicator}></p>
        </div>

        <div>
          <p className={styles.indicator}></p>
          Score: <b>{score} points</b>
        </div>

        <div>
          <p className={styles.indicator}></p>
          Time: <b>{date}</b>
        </div>

        <a className={styles.view} href={url} target="_blank" rel="noreferrer">
          View Story
        </a>
      </div>
    </AnimateElement>
  );
};

export default Card;
