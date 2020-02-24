import React, { useState } from 'react';
import { Form } from './Form';

export const ChatMessage = ({ message }) => {
  const [showInputField, setShowInputField] = useState(false);

  const onSubmit = event => {
    event.preventDefault();
    const newMessage = event.target.message.value;
    Meteor.call(
      'message.edit',
      { _id: message._id, message: newMessage },
      (error, result) => {
        if (!error) {
          setShowInputField(false);
        }
      }
    );
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
