import React from "react";
import PropTypes from "prop-types";
import MessageItem from "./MessageItem";
import { List } from "semantic-ui-react";
import withLoading from "./helpers/withLoading";

const MessageList = ({ messages, handleOnClick }) => {
  if (!messages.length) {
    return <div>No messages</div>;
  } else {
    return (
      <List divided>
        {messages.map(msg => (
          <MessageItem
            key={msg.id}
            message={msg}
            onClickMessage={() => handleOnClick(msg)}
          />
        ))}
      </List>
    );
  }
};

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  handleOnClick: PropTypes.func.isRequired
};

export default withLoading(MessageList, "loadingMessages");
