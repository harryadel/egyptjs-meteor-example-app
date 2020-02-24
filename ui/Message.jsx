import React, { useState } from 'react';

export const Message = ({ message, onSubmit }) => {
  const [editMode, setEditMode] = useState(false);

  const onClick = () => {
    setEditMode(true);
  };

  return (
    <>
      {editMode ? (
        <form onSubmit={onSubmit}>
          <input
            name="message"
            className="message-field"
            type="text"
            placeholder="Enter a message"
          />
          <button>Send</button>
        </form>
      ) : (
        <div onClick={onClick} key={message._id}>
          {message.text}
        </div>
      )}
    </>
  );
};
