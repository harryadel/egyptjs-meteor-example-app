import { Message } from '../collections/message.js';

Meteor.methods({
  'message.insert': function({ message }) {
    return Message.insert({ text: message });
  },
  'message.edit': function({ _id, message }) {
    return Message.update({ _id }, { $set: { text: message } });
  },
});
