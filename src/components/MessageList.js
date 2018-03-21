import React from "react";
import PropTypes from "prop-types";
import MessageItem from "./MessageItem";
import {List} from "semantic-ui-react";
import withLoading from "./helpers/withLoading";

const MessageList = ({messages, handleOnClick, handleLoadMore}) => {
    if (!messages.length) {
        return <div>No messages</div>;
    } else {
        return (
            <div className="messages">
                <List divided>
                    {messages.map(msg => (
                        <MessageItem
                            key={msg.id}
                            message={msg}
                            onClickMessage={() => handleOnClick(msg)}
                        />
                    ))}
                </List>
                <button type="button" onClick={handleLoadMore}>Load more messages...</button>
            </div>

        );
    }
};

MessageList.propTypes = {
    messages: PropTypes.array.isRequired,
    handleOnClick: PropTypes.func.isRequired,
    handleLoadMore: PropTypes.func.isRequired
};

export default withLoading(MessageList, "loadingMessages");
