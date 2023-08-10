import React from 'react';

type Props = {
  onClick: () => void;
};

export const XMarkIcon = ({ onClick }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      width={20}
      height={20}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  );
};
