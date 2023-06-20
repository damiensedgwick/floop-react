import React from "react";
import { footer, footerLink } from "./styles";

export const FloopWidgetFooter = () => {
  return (
    <p style={footer}>
      Widget by{" "}
      <strong>
        <a
          href="https://www.feedback-loop.io"
          target="_blank"
          style={footerLink}
        >
          Floop
        </a>
      </strong>
    </p>
  );
};
