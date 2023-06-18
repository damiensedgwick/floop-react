import React, {
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import {
  ArrowLeftIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  StarIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const widgetStyle = {
  position: "absolute" as const,
  top: "60px",
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
  textAlign: "center" as const,
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
};

const widgetTitleStyle = {
  fontSize: "1.15rem",
  margin: "0",
  paddingLeft: "1rem",
  paddingRight: "1rem",
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

type FloopDefaultProps = {
  setShowWidget: Dispatch<SetStateAction<boolean>>;
  setWidgetType: Dispatch<SetStateAction<WidgetType>>;
};

const FloopDefault = ({ setShowWidget, setWidgetType }: FloopDefaultProps) => {
  return (
    <div style={widgetContentStyle}>
      <div
        style={{
          position: "absolute" as const,
          top: "10px",
          left: "50%",
          transform: "TranslateX(-50%)",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={widgetTitleStyle}>What would you like to say?</h1>
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: "2rem",
        }}
      >
        <button
          style={widgetSelectionButtonStyle}
          onClick={() => setWidgetType("rating")}
        >
          <StarIcon width={48} height={48} />
          <small>Rating</small>
        </button>
        <button
          style={widgetSelectionButtonStyle}
          onClick={() => setWidgetType("issue")}
        >
          <ExclamationTriangleIcon width={48} height={48} />
          <small>issue</small>
        </button>
        <button
          style={widgetSelectionButtonStyle}
          onClick={() => setWidgetType("suggestion")}
        >
          <LightBulbIcon width={48} height={48} />
          <small>suggestion</small>
        </button>
      </div>
    </div>
  );
};

const FloopRating = ({ setShowWidget, setWidgetType }: FloopDefaultProps) => {
  const handleRatingSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    console.log(form);
    console.log(formData);
  };

  return (
    <div style={widgetContentStyle}>
      <div
        style={{
          position: "absolute" as const,
          top: "10px",
          left: "50%",
          transform: "TranslateX(-50%)",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <ArrowLeftIcon
          width={20}
          height={20}
          onClick={() => setWidgetType("default")}
          style={{ cursor: "pointer" }}
        />
        <h1 style={widgetTitleStyle}>Rate our product</h1>
        <XMarkIcon
          width={20}
          height={20}
          onClick={() => {
            setWidgetType("default");
            setShowWidget(false);
          }}
          style={{
            cursor: "pointer",
            opacity: "0.5",
          }}
        />
      </div>
      <form
        onSubmit={(e) => handleRatingSubmit(e)}
        style={{ marginTop: "1.5rem" }}
      >
        <div style={{ display: "flex", padding: "0 1.5rem" }}>
          <label
            htmlFor="rating"
            style={{
              width: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: "1rem",
              marginBottom: "1rem",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            1<input type="radio" name="rating" value={1} />
            2<input type="radio" name="rating" value={2} />
            3<input type="radio" name="rating" value={3} />
            4<input type="radio" name="rating" value={4} />
            5<input type="radio" name="rating" value={5} />
          </label>
        </div>
        <label htmlFor="message">
          <textarea
            name="message"
            id=""
            cols={30}
            rows={4}
            placeholder="Any kind words?"
          ></textarea>
        </label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "260px",
            margin: "0.5rem auto 0 auto",
          }}
        >
          <FloopWidgetFooter />
          <button
            type="submit"
            style={{ background: "none", padding: "0.25rem" }}
          >
            <small>Submit rating</small>
          </button>
        </div>
      </form>
    </div>
  );
};

const FloopIssue = ({ setShowWidget, setWidgetType }: FloopDefaultProps) => {
  const handleRatingSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    console.log(form);
    console.log(formData);
  };

  return (
    <div style={widgetContentStyle}>
      <div
        style={{
          position: "absolute" as const,
          top: "10px",
          left: "50%",
          transform: "TranslateX(-50%)",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <ArrowLeftIcon
          width={20}
          height={20}
          onClick={() => setWidgetType("default")}
          style={{ cursor: "pointer" }}
        />
        <h1 style={widgetTitleStyle}>Report an issue</h1>
        <XMarkIcon
          width={20}
          height={20}
          onClick={() => {
            setWidgetType("default");
            setShowWidget(false);
          }}
          style={{
            cursor: "pointer",
            opacity: "0.5",
          }}
        />
      </div>
      <form
        onSubmit={(e) => handleRatingSubmit(e)}
        style={{ marginTop: "1.5rem" }}
      >
        <label
          htmlFor="title"
          style={{
            width: "270px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "1rem",
            marginBottom: "1rem",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <input
            type="text"
            name="title"
            placeholder="Issue title"
            style={{ width: "100%", padding: "0.25rem" }}
          />
        </label>
        <label htmlFor="message">
          <textarea
            name="message"
            id=""
            cols={30}
            rows={4}
            placeholder="Issue message"
            style={{ padding: "0.5rem" }}
          ></textarea>
        </label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "260px",
            margin: "0.5rem auto 0 auto",
          }}
        >
          <FloopWidgetFooter />
          <button
            type="submit"
            style={{ background: "none", padding: "0.25rem" }}
          >
            <small>Submit issue</small>
          </button>
        </div>
      </form>
    </div>
  );
};

const FloopSuggestion = ({
  setShowWidget,
  setWidgetType,
}: FloopDefaultProps) => {
  const handleRatingSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    console.log(form);
    console.log(formData);
  };

  return (
    <div style={widgetContentStyle}>
      <div
        style={{
          position: "absolute" as const,
          top: "10px",
          left: "50%",
          transform: "TranslateX(-50%)",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <ArrowLeftIcon
          width={20}
          height={20}
          onClick={() => setWidgetType("default")}
          style={{ cursor: "pointer" }}
        />
        <h1 style={widgetTitleStyle}>Share your idea</h1>
        <XMarkIcon
          width={20}
          height={20}
          onClick={() => {
            setWidgetType("default");
            setShowWidget(false);
          }}
          style={{
            cursor: "pointer",
            opacity: "0.5",
          }}
        />
      </div>
      <form
        onSubmit={(e) => handleRatingSubmit(e)}
        style={{ marginTop: "1.5rem" }}
      >
        <div style={{ display: "flex", padding: "0 1.5rem" }}>
          <label
            htmlFor="title"
            style={{
              width: "275px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: "1rem",
              marginBottom: "1rem",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <input
              type="text"
              name="title"
              placeholder="Suggestion title"
              style={{ width: "100%", padding: "0.25rem" }}
            />
          </label>
        </div>
        <label htmlFor="message">
          <textarea
            name="message"
            cols={30}
            rows={4}
            placeholder="Suggestion message"
            style={{ padding: "0.5rem" }}
          ></textarea>
        </label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "260px",
            margin: "0.5rem auto 0 auto",
          }}
        >
          <FloopWidgetFooter />
          <button
            type="submit"
            style={{ background: "none", padding: "0.25rem" }}
          >
            <small>Submit suggestion</small>
          </button>
        </div>
      </form>
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
  projectId: string;
  children: ReactNode;
};

type WidgetType = "default" | "rating" | "issue" | "suggestion";

export const FloopWidget = ({ projectId, children }: FloopWidgetProps) => {
  const [showWidget, setShowWidget] = useState(false);
  const [widgetType, setWidgetType] = useState<WidgetType>("default");

  return (
    <div
      style={{
        position: "relative",
        width: "320px",
        height: "100%",
      }}
    >
      <div onClick={() => setShowWidget(!showWidget)}>{children}</div>

      {showWidget ? (
        <div style={widgetStyle}>
          {widgetType === "default" ? (
            <FloopDefault
              setWidgetType={setWidgetType}
              setShowWidget={setShowWidget}
            />
          ) : null}

          {widgetType === "rating" ? (
            <FloopRating
              setWidgetType={setWidgetType}
              setShowWidget={setShowWidget}
            />
          ) : null}

          {widgetType === "issue" ? (
            <FloopIssue
              setWidgetType={setWidgetType}
              setShowWidget={setShowWidget}
            />
          ) : null}

          {widgetType === "suggestion" ? (
            <FloopSuggestion
              setWidgetType={setWidgetType}
              setShowWidget={setShowWidget}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
