import React from 'react';

export const Form = ({ buttonText, onSubmit, defaultValue }) => (
  <form onSubmit={onSubmit}>
    <input
      {...{
        name: 'message',
        className: 'message-field',
        type: 'text',
        placeholder: 'Enter a message',
        ...(defaultValue && { defaultValue }),
      }}
    />
    <button>{buttonText}</button>
  </form>
);
