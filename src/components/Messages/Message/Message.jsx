import messagesCSS from "../Messages.module.css";
import messageCSS from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={messagesCSS.currentDialog}>
            {
                props.dialogsMessages.map((data) => {
                    return (
                        <p className={messageCSS.message}>{data}</p>
                    );
                })
            }
        </div>
    );
};

export default Message;