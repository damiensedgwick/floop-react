import React, { Dispatch, FormEvent, SetStateAction } from 'react';
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

export const FloopWidgetSuggestion = ({
  setShowWidget,
  setWidgetType,
  projectId,
  userEmail,
}: Props) => {
  const handleRatingSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const title = formData.get('title');
    const message = formData.get('message');

    const body = {
      title: title,
      message: message,
      project_id: projectId,
      user_email: userEmail,
    };

    try {
      await fetch('https://www.feedback-loop.io/submissions/suggestion/', {
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
        <p style={text}>Share your idea</p>
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
        <label htmlFor='title' style={label}>
          <input
            type='text'
            name='title'
            style={input}
            placeholder='What is your suggestion?'
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

      <FloopWidgetFooter />
    </div>
  );
};
