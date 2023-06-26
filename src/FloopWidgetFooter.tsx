import React from "react";
import { footer, branding } from "./styles";

export const FloopWidgetFooter = () => {
  return (
    <p style={footer}>
      Widget by{" "}
      <strong>
        <a style={branding} href="https://www.feedback-loop.io" target="_blank">
          Floop
        </a>
      </strong>
    </p>
  );
};
