import React from 'react';
import './App.css';
import { useTracker } from 'meteor/react-meteor-data';
import { Message } from '../collections/message';
import { ChatMessage } from './ChatMessage.jsx';
import { Form } from './Form.jsx';

export const App = () => {
  const onSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const message = event.target.message.value;
    Meteor.call('message.insert', { message }, (error, result) => {
      console.log(error, result);
    });
    form.reset();
  };

  const messagesLoading = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    const handle = Meteor.subscribe('messages');
    return !handle.ready();
  }, []);

  const messages = useTracker(() => Message.find({}).fetch(), []);

  return (
    <div>
      <h1>EgyptJS - Meteor Example App</h1>
      {messagesLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          {messages.map(message => (
            <ChatMessage key={message._id} message={message} />
          ))}
        </div>
      )}
      <Form onSubmit={onSubmit} buttonText="Send" />
    </div>
  );
};
