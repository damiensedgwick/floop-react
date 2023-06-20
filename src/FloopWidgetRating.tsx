import React, { Dispatch, FormEvent, SetStateAction } from "react";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { WidgetType } from "./types";
import {
  bar,
  content,
  form,
  header,
  label,
  radio,
  rating,
  submit,
  textarea,
  title,
} from "./styles";

type Props = {
  setShowWidget: Dispatch<SetStateAction<boolean>>;
  setWidgetType: Dispatch<SetStateAction<WidgetType>>;
};

export const FloopWidgetRating = ({ setShowWidget, setWidgetType }: Props) => {
  const handleRatingSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    console.log(form);
    console.log(formData);
  };

  return (
    <div style={content}>
      <div style={header}>
        <ArrowLeftIcon
          width={20}
          height={20}
          onClick={() => setWidgetType("default")}
        />
        <p style={title}>Rate our product</p>
        <XMarkIcon
          width={20}
          height={20}
          onClick={() => {
            setWidgetType("default");
            setShowWidget(false);
          }}
        />
      </div>

      <form onSubmit={(e) => handleRatingSubmit(e)} style={form}>
        <span style={bar} />
        <label htmlFor="rating" style={label}>
          <span style={rating}>
            1
            <input
              type="radio"
              name="rating"
              value={1}
              style={radio}
              required
            />
          </span>
          <span style={rating}>
            2
            <input
              type="radio"
              name="rating"
              value={2}
              style={radio}
              required
            />
          </span>
          <span style={rating}>
            3
            <input
              type="radio"
              name="rating"
              value={3}
              style={radio}
              required
            />
          </span>
          <span style={rating}>
            4
            <input
              type="radio"
              name="rating"
              value={4}
              style={radio}
              required
            />
          </span>
          <span style={rating}>
            5
            <input
              type="radio"
              name="rating"
              value={5}
              style={radio}
              required
            />
          </span>
        </label>
        <label htmlFor="message" style={label}>
          <textarea
            name="message"
            placeholder="Why did you give this rating?"
            style={textarea}
          ></textarea>
        </label>
        <button type="submit" style={submit}>
          <small>Submit</small>
        </button>
      </form>
    </div>
  );
};
