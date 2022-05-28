import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <section className={styles.loadContainer}>
      <div className={styles.load}></div>
    </section>
  );
};

export default Loading;
