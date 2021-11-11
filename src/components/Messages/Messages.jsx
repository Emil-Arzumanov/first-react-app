import messagesCSS from "./Messages.module.css";
import DialogItem from "./DialogElements/DialogElements";
import Message from "./Message/Message";
import MessageCreator from "./MessageCreator/MessageCreator";

const Messages = (props) => {
    return (
        <div className={messagesCSS.dialogs}>
            <DialogItem dialogsData={props.dialogsData} />
            <div>
                <Message dialogsMessages={props.dialogsMessages}/>
                <MessageCreator sendMessage={props.sendMessage}/>
            </div>
        </div>
    );
};

export default Messages;