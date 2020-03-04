import React, { useState } from 'react';
import { Form } from './Form';
import { meteorCall } from '../imports/lib/utils';

export const ChatMessage = ({ message }) => {
  const [showInputField, setShowInputField] = useState(false);

  const onSubmit = event => {
    event.preventDefault();
    const newMessage = event.target.message.value;
    meteorCall('message.edit', {
      _id: message._id,
      message: newMessage,
    }).then(() => setShowInputField(false));
  };

  return (
    <>
      {showInputField ? (
        <Form
          onSubmit={onSubmit}
          defaultValue={message.text}
          buttonText="Edit"
        />
      ) : (
        <li onClick={() => setShowInputField(true)}>{message.text}</li>
      )}
    </>
  );
};
