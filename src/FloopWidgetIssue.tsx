import React, { Dispatch, FormEvent, SetStateAction } from "react";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  content,
  form,
  header,
  input,
  label,
  submit,
  textarea,
  title,
} from "./styles";
import { WidgetType } from "./types";

type Props = {
  setShowWidget: Dispatch<SetStateAction<boolean>>;
  setWidgetType: Dispatch<SetStateAction<WidgetType>>;
};

export const FloopWidgetIssue = ({ setShowWidget, setWidgetType }: Props) => {
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
          style={{ cursor: "pointer" }}
        />
        <p style={title}>Report an issue</p>
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
        <label htmlFor="title" style={label}>
          <input
            type="text"
            name="title"
            placeholder="What issue are you having?"
            style={input}
            required
          />
        </label>
        <label htmlFor="message" style={label}>
          <textarea
            name="message"
            placeholder="Can you provide any additional details?"
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
