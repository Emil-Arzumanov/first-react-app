import messageCreatorCSS from "./MessageCreator.module.css";
import React from "react";

const MessageCreator = (props) => {
    let newMessage = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
        newMessage.current.value = "";
    }
    let updateMessageText = () => {
        let text = newMessage.current.value;
        props.updateMessageText(text);
    };

    return (
        <div className={messageCreatorCSS.div}>
            <textarea ref={newMessage} onChange={updateMessageText} className={messageCreatorCSS.textarea}></textarea>
            <button onClick={sendMessage} className={messageCreatorCSS.button}>Send</button>
        </div>
    );
};

export default MessageCreator;