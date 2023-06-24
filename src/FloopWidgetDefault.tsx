import React, { Dispatch, SetStateAction } from "react";
import { WidgetType } from "./types";
import {
  ExclamationTriangleIcon,
  LightBulbIcon,
  StarIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { FloopWidgetFooter } from "./FloopWidgetFooter";
import styles from "./index.module.css";

type Props = {
  setShowWidget: Dispatch<SetStateAction<boolean>>;
  setWidgetType: Dispatch<SetStateAction<WidgetType>>;
};

export const FloopWidgetDefault = ({ setShowWidget, setWidgetType }: Props) => {
  return (
    <div className={styles.default}>
      <div className={styles.title}>
        <p>What would you like to say?</p>
        <XMarkIcon
          width={20}
          height={20}
          onClick={() => setShowWidget(false)}
        />
      </div>

      <div>
        <button onClick={() => setWidgetType("rating")}>
          <StarIcon width={48} height={48} />
          <small>Rating</small>
        </button>
        <button onClick={() => setWidgetType("issue")}>
          <ExclamationTriangleIcon width={48} height={48} />
          <small>issue</small>
        </button>
        <button onClick={() => setWidgetType("suggestion")}>
          <LightBulbIcon width={48} height={48} />
          <small>suggestion</small>
        </button>
      </div>

      <FloopWidgetFooter />
    </div>
  );
};
