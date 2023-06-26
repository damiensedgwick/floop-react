import React, { Dispatch, SetStateAction } from "react";
import { WidgetType } from "./types";
import {
  ExclamationTriangleIcon,
  LightBulbIcon,
  StarIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { FloopWidgetFooter } from "./FloopWidgetFooter";
import { button, buttons, content, text, title } from "./styles";
import styles from "./index.module.css";

type Props = {
  setShowWidget: Dispatch<SetStateAction<boolean>>;
  setWidgetType: Dispatch<SetStateAction<WidgetType>>;
};

export const FloopWidgetDefault = ({ setShowWidget, setWidgetType }: Props) => {
  return (
    <div style={content}>
      <div style={title}>
        <p style={text}>What would you like to say?</p>
        <XMarkIcon
          width={20}
          height={20}
          onClick={() => setShowWidget(false)}
        />
      </div>

      <div style={buttons}>
        <button
          style={{ ...button, background: "#f0fdf4" }}
          onClick={() => setWidgetType("rating")}
        >
          <StarIcon width={40} height={40} />
          <small>Rating</small>
        </button>
        <button
          style={{ ...button, background: "#fef2f2" }}
          onClick={() => setWidgetType("issue")}
        >
          <ExclamationTriangleIcon width={40} height={40} />
          <small>issue</small>
        </button>
        <button
          style={{ ...button, background: "#fefce8" }}
          onClick={() => setWidgetType("suggestion")}
        >
          <LightBulbIcon width={40} height={40} />
          <small>suggestion</small>
        </button>
      </div>

      <FloopWidgetFooter />
    </div>
  );
};
