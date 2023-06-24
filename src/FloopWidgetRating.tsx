import React, { Dispatch, FormEvent, SetStateAction } from "react";
import { ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { WidgetType } from "./types";
import { FloopWidgetFooter } from "./FloopWidgetFooter";
import styles from "./index.module.css";

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
    <div className={styles.rating}>
      <div className={styles.title}>
        <ArrowLeftIcon
          width={20}
          height={20}
          onClick={() => setWidgetType("default")}
        />
        <p>Rate our product</p>
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
        <label htmlFor="rating" className={styles.rating}>
          <span>
            1
            <input type="radio" name="rating" value={1} required />
          </span>
          <span>
            2
            <input type="radio" name="rating" value={2} required />
          </span>
          <span>
            3
            <input type="radio" name="rating" value={3} required />
          </span>
          <span>
            4
            <input type="radio" name="rating" value={4} required />
          </span>
          <span>
            5
            <input type="radio" name="rating" value={5} required />
          </span>
        </label>
        <label htmlFor="message">
          <textarea
            name="message"
            placeholder="Why did you give this rating?"
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
