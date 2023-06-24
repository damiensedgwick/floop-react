import React from "react";
import styles from "./index.module.css";

export const FloopWidgetFooter = () => {
  return (
    <p className={styles.footer}>
      Widget by{" "}
      <strong>
        <a href="https://www.feedback-loop.io" target="_blank">
          Floop
        </a>
      </strong>
    </p>
  );
};
