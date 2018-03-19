import React from "react";
import {
  ListItem,
  ListContent,
  ListHeader,
  ListDescription
} from "semantic-ui-react";

const MessageItem = ({ message, onClickMessage }) => (
  <ListItem onClick={onClickMessage}>
    <ListContent>
      <ListHeader>{message.subject}</ListHeader>
      <ListDescription>{message.from}</ListDescription>
    </ListContent>
  </ListItem>
);

export default MessageItem;
