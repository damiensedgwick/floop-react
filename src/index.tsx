import React, { ReactNode, useState } from "react";
import {
  ExclamationTriangleIcon,
  LightBulbIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const widgetStyle = {
  position: "absolute" as const,
  top: "75px",
  left: "50%",
  transform: "TranslateX(-50%)",
  width: "320px",
  height: "200px",
  padding: "0.5rem",
  margin: "auto",
  display: "flex",
  flexDirection: "column" as const,
  background: "white",
  borderRadius: "1rem",
  boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  textAlign: "center",
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
};

const widgetTitleStyle = {
  position: "absolute" as const,
  top: "10px",
  left: "50%",
  transform: "TranslateX(-50%)",
  width: "100%",
  fontSize: "1.25rem",
  marginTop: "0",
};

const widgetContentStyle = {
  height: "100%",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
};

const widgetSelectionButtonStyle = {
  width: "88px",
  height: "88px",
  padding: "0.5rem",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "space-between",
};

const FloopDefault = () => {
  return (
    <div style={widgetContentStyle}>
      <h1 style={widgetTitleStyle}>What would you like to say?</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: "2rem",
        }}
      >
        <button style={widgetSelectionButtonStyle}>
          <StarIcon width={48} height={48} />
          <small>rating</small>
        </button>
        <button style={widgetSelectionButtonStyle}>
          <ExclamationTriangleIcon width={48} height={48} />
          <small>issue</small>
        </button>
        <button style={widgetSelectionButtonStyle}>
          <LightBulbIcon width={48} height={48} />
          <small>suggestion</small>
        </button>
      </div>
    </div>
  );
};

const FloopRating = () => {
  return (
    <div style={widgetContentStyle}>
      <h1 style={widgetTitleStyle}>Rating</h1>
    </div>
  );
};

const FloopIssue = () => {
  return (
    <div style={widgetContentStyle}>
      <h1 style={widgetTitleStyle}>Issue</h1>
    </div>
  );
};

const FloopSuggestion = () => {
  return (
    <div style={widgetContentStyle}>
      <h1 style={widgetTitleStyle}>Suggestion</h1>
    </div>
  );
};

const FloopWidgetFooter = () => {
  return (
    <small style={{ fontSize: "0.7rem", opacity: "0.5" }}>
      Widget by{" "}
      <span>
        <strong>
          <a
            style={{
              color: "inherit",
            }}
            href="https://www.feedback-loop.io"
            target="_blank"
          >
            Floop
          </a>
        </strong>
      </span>
    </small>
  );
};

type FloopWidgetProps = {
  showWidget: boolean;
  projectId: string;
  children: ReactNode;
};

export const FloopWidget = ({
  showWidget,
  projectId,
  children,
}: FloopWidgetProps) => {
  const [widgetType, setWidgetType] = useState<
    "default" | "rating" | "issue" | "suggestion"
  >("default");

  console.log(projectId);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {children}

      {showWidget ? (
        <div style={widgetStyle}>
          {widgetType === "default" ? <FloopDefault /> : null}
          {widgetType === "rating" ? <FloopRating /> : null}
          {widgetType === "issue" ? <FloopIssue /> : null}
          {widgetType === "suggestion" ? <FloopSuggestion /> : null}

          <FloopWidgetFooter />
        </div>
      ) : null}
    </div>
  );
};
