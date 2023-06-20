import React, { Dispatch, SetStateAction } from "react";
import { WidgetType } from "./types";
import {
  ExclamationTriangleIcon,
  LightBulbIcon,
  StarIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { content, title, header, button, buttons } from "./styles";

type Props = {
  setShowWidget: Dispatch<SetStateAction<boolean>>;
  setWidgetType: Dispatch<SetStateAction<WidgetType>>;
};

export const FloopWidgetDefault = ({ setShowWidget, setWidgetType }: Props) => {
  return (
    <div style={content}>
      <div style={header}>
        <p style={title}>What would you like to say?</p>
        <XMarkIcon
          width={20}
          height={20}
          onClick={() => setShowWidget(false)}
          style={{
            cursor: "pointer",
            opacity: "0.5",
          }}
        />
      </div>

      <div style={buttons}>
        <button style={button} onClick={() => setWidgetType("rating")}>
          <StarIcon width={48} height={48} />
          <small>Rating</small>
        </button>
        <button style={button} onClick={() => setWidgetType("issue")}>
          <ExclamationTriangleIcon width={48} height={48} />
          <small>issue</small>
        </button>
        <button style={button} onClick={() => setWidgetType("suggestion")}>
          <LightBulbIcon width={48} height={48} />
          <small>suggestion</small>
        </button>
      </div>
    </div>
  );
};
