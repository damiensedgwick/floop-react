import React from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  FloatingFocusManager,
  useId,
} from "@floating-ui/react";
import { FloopWidgetDefault } from "./FloopWidgetDefault";
import { FloopWidgetRating } from "./FloopWidgetRating";
import { FloopWidgetIssue } from "./FloopWidgetIssue";
import { FloopWidgetSuggestion } from "./FloopWidgetSuggestion";
import { widget } from "./styles";

interface Props {
  triggerText: string;
  projectId: string;
  userEmail: string;
}

export const FloopWidget = ({ triggerText, projectId, userEmail }: Props) => {
  const [showWidget, setShowWidget] = React.useState(false);
  const [widgetType, setWidgetType] = React.useState<
    "default" | "rating" | "issue" | "suggestion"
  >("default");

  const { refs, floatingStyles, context } = useFloating({
    open: showWidget,
    onOpenChange: setShowWidget,
    middleware: [
      offset(10),
      flip({ fallbackAxisSideDirection: "end" }),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const headingId = useId();

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        data-floop-widget="widget-trigger"
      >
        {triggerText}
      </button>

      {showWidget && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className="Popover"
            ref={refs.setFloating}
            style={floatingStyles}
            aria-labelledby={headingId}
            {...getFloatingProps()}
          >
            <div style={widget} data-floop-widget="widget-popup">
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
                  projectId={projectId}
                  userEmail={userEmail}
                />
              ) : null}

              {widgetType === "issue" ? (
                <FloopWidgetIssue
                  setWidgetType={setWidgetType}
                  setShowWidget={setShowWidget}
                  projectId={projectId}
                  userEmail={userEmail}
                />
              ) : null}

              {widgetType === "suggestion" ? (
                <FloopWidgetSuggestion
                  setWidgetType={setWidgetType}
                  setShowWidget={setShowWidget}
                  projectId={projectId}
                  userEmail={userEmail}
                />
              ) : null}
            </div>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
};
