import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { ArrowLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { WidgetType } from './types';
import { FloopWidgetFooter } from './FloopWidgetFooter';
import {
  content,
  form,
  input,
  label,
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

export const FloopWidgetIssue = ({
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

    const title = formData.get('title');
    const message = formData.get('message');

    const body = {
      title: title,
      details: message,
      project_id: projectId,
      user_email: userEmail,
    };

    try {
      await fetch('https://www.feedback-loop.io/submissions/issue/', {
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
          style={{ cursor: 'pointer' }}
        />
        <p style={text}>Report an issue</p>
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
          Submitting issue...
        </p>
      ) : (
        <form onSubmit={(e) => handleRatingSubmit(e)} style={form}>
          <label htmlFor='title' style={label}>
            <input
              type='text'
              name='title'
              placeholder='What issue are you having?'
              style={input}
              required
            />
          </label>
          <label htmlFor='message' style={label}>
            <textarea
              name='message'
              placeholder='Can you provide any additional details?'
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
