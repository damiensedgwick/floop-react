import React, { ReactNode, useState } from "react";
import { FloopWidgetDefault } from "./FloopWidgetDefault";
import { wrapper, widget } from "./styles";
import { FloopWidgetRating } from "./FloopWidgetRating";
import { FloopWidgetIssue } from "./FloopWidgetIssue";
import { FloopWidgetSuggestion } from "./FloopWidgetSuggestion";
import { WidgetType } from "./types";
import { FloopWidgetFooter } from "./FloopWidgetFooter";

type Props = {
  projectId: string;
  children: ReactNode;
};

export const FloopWidget = ({ projectId, children }: Props) => {
  const [showWidget, setShowWidget] = useState(false);
  const [widgetType, setWidgetType] = useState<WidgetType>("default");

  return (
    <div style={wrapper}>
      <div onClick={() => setShowWidget(!showWidget)}>{children}</div>

      {showWidget ? (
        <div style={widget}>
          {widgetType === "default" ? (
            <FloopWidgetDefault
              setWidgetType={setWidgetType}
              setShowWidget={setShowWidget}
            />
          ) : null}

          {widgetType === "rating" ? (
            <FloopWidgetRating
              setWidgetType={setWidgetType}
              setShowWidget={setShowWidget}
            />
          ) : null}

          {widgetType === "issue" ? (
            <FloopWidgetIssue
              setWidgetType={setWidgetType}
              setShowWidget={setShowWidget}
            />
          ) : null}

          {widgetType === "suggestion" ? (
            <FloopWidgetSuggestion
              setWidgetType={setWidgetType}
              setShowWidget={setShowWidget}
            />
          ) : null}

          <FloopWidgetFooter />
        </div>
      ) : null}
    </div>
  );
};
