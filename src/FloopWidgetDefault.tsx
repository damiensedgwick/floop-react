import React, { Dispatch, SetStateAction } from 'react';
import { WidgetType } from './types';
import { LightBulbIcon } from './LightBulbIcon';
import { XMarkIcon } from './XMarkIcon';
import { FloopWidgetFooter } from './FloopWidgetFooter';
import { button, buttons, content, text, title } from './styles';
import { ExclamationTriangleIcon } from './ExclamationTriangleIcon';
import { StarIcon } from './StarIcon';

type Props = {
  setShowWidget: Dispatch<SetStateAction<boolean>>;
  setWidgetType: Dispatch<SetStateAction<WidgetType>>;
};

export const FloopWidgetDefault = ({ setShowWidget, setWidgetType }: Props) => {
  return (
    <div style={content}>
      <div style={title}>
        <p style={text}>What would you like to say?</p>
        <XMarkIcon onClick={() => setShowWidget(false)} />
      </div>

      <div style={buttons}>
        <button
          style={{ ...button, background: '#f0fdf4' }}
          onClick={() => setWidgetType('rating')}
        >
          <StarIcon />
          <small>Rating</small>
        </button>
        <button
          style={{ ...button, background: '#fef2f2' }}
          onClick={() => setWidgetType('issue')}
        >
          <ExclamationTriangleIcon />
          <small>issue</small>
        </button>
        <button
          style={{ ...button, background: '#fefce8' }}
          onClick={() => setWidgetType('suggestion')}
        >
          <LightBulbIcon />
          <small>suggestion</small>
        </button>
      </div>

      <FloopWidgetFooter />
    </div>
  );
};
