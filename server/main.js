import { Meteor } from 'meteor/meteor';
import '../collections/message';
import '../methods/message';
import { Message } from '../collections/message';

Meteor.publish('messages', () => Message.find({}));

Meteor.startup(() => {});
