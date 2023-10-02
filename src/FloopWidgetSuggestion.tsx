import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { ArrowLeftIcon } from "./ArrowLeftIcon";
import { XMarkIcon } from "./XMarkIcon";
import { WidgetType } from "./types";
import { FloopWidgetFooter } from "./FloopWidgetFooter";
import {
  chars,
  content,
  ff,
  form,
  input,
  label,
  submit,
  text,
  textarea,
  title,
  giveMoreButton,
} from "./styles";
import { CheckIcon } from "./CheckIcon";

type Props = {
  setShowWidget: Dispatch<SetStateAction<boolean>>;
  setWidgetType: Dispatch<SetStateAction<WidgetType>>;
  projectId: string;
  userEmail: string;
};

export const FloopWidgetSuggestion = ({
  setShowWidget,
  setWidgetType,
  projectId,
  userEmail,
}: Props) => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [detailsCount, setDetailsCount] = useState(0);
  const [titleCount, setTitleCount] = useState(0);

  const handleRatingSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const title = formData.get("title");
    const message = formData.get("message");

    const body = {
      title: title,
      details: message,
      project_id: projectId,
      user_email: userEmail,
    };

    try {
      await fetch("https://feedback-loop.io/submissions/suggestions", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      setSuccess(true);
      setSubmitting(false);

      setTimeout(() => {
        setWidgetType("default");
        setShowWidget(false);
      }, 3000);
    } catch (error) {
      console.log("Error sending rating: ", error);
    }
  };

  return (
    <div style={content}>
      <div style={title}>
        <ArrowLeftIcon onClick={() => setWidgetType("default")} />
        <p style={text}>Share your idea</p>
        <XMarkIcon
          onClick={() => {
            setWidgetType("default");
            setShowWidget(false);
          }}
        />
      </div>

      {submitting ? (
        <p
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "14px",
            margin: "auto",
          }}
        >
          Submitting your suggestion...
        </p>
      ) : null}

      {success ? (
        <div
          style={{
            margin: "auto",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CheckIcon />
          </div>
          <p
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            Thanks, feedback received!
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={() => setWidgetType("default")}
              style={giveMoreButton}
            >
              Give more feedback
            </button>
          </div>
        </div>
      ) : null}

      {!submitting && !success ? (
        <form onSubmit={(e) => handleRatingSubmit(e)} style={form}>
          <label htmlFor="title" style={label}>
            <input
              type="text"
              name="title"
              style={input}
              placeholder="What is your suggestion?"
              required
              onChange={(e) => setTitleCount(e.target.value.length)}
              maxLength={75}
              id="title"
            />
            <p style={chars}>
              <small>{titleCount}&nbsp;/&nbsp;75</small>
            </p>
          </label>
          <label htmlFor="message" style={label}>
            <textarea
              name="message"
              placeholder="Do you want to share any more details?"
              style={textarea}
              onChange={(e) => setDetailsCount(e.target.value.length)}
              maxLength={150}
              id="message"
            ></textarea>
            <p style={chars}>
              <small>{detailsCount}&nbsp;/&nbsp;150</small>
            </p>
          </label>

          <div style={ff}>
            <FloopWidgetFooter />
            <button type="submit" style={submit}>
              <small>Submit</small>
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};
