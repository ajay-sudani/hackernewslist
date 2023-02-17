import * as React from "react";
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <span className={styles.loader}>loading</span>
      <span className={styles.load}></span>
    </div>
  );
};

export default Loader;
