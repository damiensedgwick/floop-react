import React, { Dispatch, FormEvent, SetStateAction } from "react";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { WidgetType } from "./types";
import { FloopWidgetFooter } from "./FloopWidgetFooter";
import styles from "./index.module.css";

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
    <div className={styles.issue}>
      <div className={styles.title}>
        <ArrowLeftIcon
          width={20}
          height={20}
          onClick={() => setWidgetType("default")}
          style={{ cursor: "pointer" }}
        />
        <p>Report an issue</p>
        <XMarkIcon
          width={20}
          height={20}
          onClick={() => {
            setWidgetType("default");
            setShowWidget(false);
          }}
        />
      </div>
      <form onSubmit={(e) => handleRatingSubmit(e)} className={styles.form}>
        <label htmlFor="title">
          <input
            type="text"
            name="title"
            placeholder="What issue are you having?"
            required
          />
        </label>
        <label htmlFor="message">
          <textarea
            name="message"
            placeholder="Can you provide any additional details?"
          ></textarea>
        </label>
        <button type="submit">
          <small>Submit</small>
        </button>
      </form>

      <FloopWidgetFooter />
    </div>
  );
};
