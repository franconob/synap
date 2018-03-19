import { createSelector } from "reselect";

const messagesSelector = state => state.messages.data;
const personSelector = state => state.messages.person;

const getMessages = createSelector(messagesSelector, messages => messages);
const getPerson = createSelector(personSelector, person => person);

export { getMessages, getPerson };
