import React, { Dispatch, FormEvent, SetStateAction } from 'react';
import { ArrowLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { WidgetType } from './types';
import { FloopWidgetFooter } from './FloopWidgetFooter';
import {
  content,
  form,
  label,
  rating,
  span,
  submit,
  text,
  textarea,
  title,
} from './styles';

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
  const handleRatingSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const rating = formData.get('rating');
    const message = formData.get('message');

    const body = {
      rating: Number(rating),
      message: message,
      project_id: projectId,
      user_email: userEmail,
    };

    try {
      await fetch('https://www.feedback-loop.io/submissions/rating/', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log('Error sending rating: ', error);
    }
  };

  return (
    <div style={content}>
      <div style={title}>
        <ArrowLeftIcon
          width={20}
          height={20}
          onClick={() => setWidgetType('default')}
        />
        <p style={text}>Rate our product</p>
        <XMarkIcon
          width={20}
          height={20}
          onClick={() => {
            setWidgetType('default');
            setShowWidget(false);
          }}
        />
      </div>

      <form onSubmit={(e) => handleRatingSubmit(e)} style={form}>
        <label htmlFor='rating' style={rating}>
          <span style={span}>
            1
            <input type='radio' name='rating' value={1} required />
          </span>
          <span style={span}>
            2
            <input type='radio' name='rating' value={2} required />
          </span>
          <span style={span}>
            3
            <input type='radio' name='rating' value={3} required />
          </span>
          <span style={span}>
            4
            <input type='radio' name='rating' value={4} required />
          </span>
          <span style={span}>
            5
            <input type='radio' name='rating' value={5} required />
          </span>
        </label>
        <label htmlFor='message' style={label}>
          <textarea
            name='message'
            placeholder='Why did you give this rating?'
            style={textarea}
          ></textarea>
        </label>
        <button type='submit' style={submit}>
          <small>Submit</small>
        </button>
      </form>

      <FloopWidgetFooter />
    </div>
  );
};
