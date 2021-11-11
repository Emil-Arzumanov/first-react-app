import React from "react";
import MessagesCreatorForm from "./MessagesCreatorForm";

const MessageCreator = (props) => {
    return (
        <MessagesCreatorForm sendMessage={props.sendMessage}/>
    );
};

export default MessageCreator;