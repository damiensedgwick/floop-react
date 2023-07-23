import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { ArrowLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { WidgetType } from './types';
import { FloopWidgetFooter } from './FloopWidgetFooter';
import {
  content,
  form, input,
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
  const [submitting, setSubmitting] = useState(false);

  const handleRatingSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const rating = formData.get('rating');
    const message = formData.get('message');

    const body = {
      score: Number(rating),
      details: message,
      project_id: projectId,
      user_email: userEmail,
    };

    try {
      await fetch('https://floop-git-develop-damiensedgwick.vercel.app/submissions/ratings', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      setSubmitting(false);
      setWidgetType('default');
      setShowWidget(false);
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

      {submitting ? (
        <p
          style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '14px' }}
        >
          Submitting rating...
        </p>
      ) : (
        <form onSubmit={(e) => handleRatingSubmit(e)} style={form}>
          <label htmlFor='rating' style={label}>
            <span style={{...span, marginBottom: "5px"}}>Rating us out of 10</span>
           <select style={input}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3" selected>3</option>
            <option value="4">4</option>
            <option value="5">5</option>
             <option value="6">6</option>
            <option value="7">7</option>
            <option value="8" selected>8</option>
            <option value="9">9</option>
            <option value="10">10</option>
           </select>
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
      )}

      <FloopWidgetFooter />
    </div>
  );
};
