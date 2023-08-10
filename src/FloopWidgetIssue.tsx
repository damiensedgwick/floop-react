import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import ArrowLeftIcon from '@heroicons/react/24/outline/ArrowLeftIcon';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import { WidgetType } from './types';
import { FloopWidgetFooter } from './FloopWidgetFooter';
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
  const [titleCount, setTitleCount] = useState(0);
  const [detailsCount, setDetailsCount] = useState(0);

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
      await fetch('https://feedback-loop.io/submissions/issues', {
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
              onChange={(e) => setTitleCount(e.target.value.length)}
              maxLength={75}
            />
            <p style={chars}>
              <small>{titleCount}&nbsp;/&nbsp;75</small>
            </p>
          </label>
          <label htmlFor='message' style={label}>
            <textarea
              name='message'
              placeholder='Do you want to share any more details?'
              style={textarea}
              onChange={(e) => setDetailsCount(e.target.value.length)}
              maxLength={150}
            ></textarea>
            <p style={chars}>
              <small>{detailsCount}&nbsp;/&nbsp;150</small>
            </p>
          </label>

          <div style={ff}>
            <FloopWidgetFooter />
            <button type='submit' style={submit}>
              <small>Submit</small>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
