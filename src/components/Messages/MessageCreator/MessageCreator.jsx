import React from "react";
import MessagesForm from "../MessagesForm";

const MessageCreator = (props) => {
    return (
        <MessagesForm sendMessage={props.sendMessage}/>
    );
};

export default MessageCreator;