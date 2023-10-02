import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { XMarkIcon } from "./XMarkIcon";
import { ArrowLeftIcon } from "./ArrowLeftIcon";
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

export const FloopWidgetRating = ({
  setShowWidget,
  setWidgetType,
  projectId,
  userEmail,
}: Props) => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [detailsCount, setDetailsCount] = useState(0);

  const handleRatingSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const rating = formData.get("rating");
    const message = formData.get("message");

    const body = {
      score: Number(rating),
      details: message,
      project_id: projectId,
      user_email: userEmail,
    };

    try {
      const response = await fetch(
        "https://feedback-loop.io/submissions/ratings",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (response.ok) {
        setSuccess(true);
        setSubmitting(false);
      }

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
        <p style={text}>Rate our product</p>
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
          Submitting your rating...
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
          <label htmlFor="rating" style={label}>
            <select style={input} name="rating" id="rating" defaultValue="8">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <p style={chars}>
              <small>Rating out of 10</small>
            </p>
          </label>
          <label htmlFor="message" style={label}>
            <textarea
              name="message"
              placeholder="Why did you give this rating?"
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
