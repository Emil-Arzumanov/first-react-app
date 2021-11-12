import messagesCSS from "./Messages.module.css";
import DialogItem from "./DialogElements/DialogElements";
import Message from "./Message/Message";
import {MessagesCreatorForm} from "./MessageCreator/MessagesCreatorForm";

const Messages = (props) => {
    return (
        <div className={messagesCSS.dialogs}>
            <DialogItem dialogsData={props.dialogsData} />
            <div>
                <Message dialogsMessages={props.dialogsMessages}/>
                <MessagesCreatorForm sendMessage={props.sendMessage}/>
            </div>
        </div>
    );
};

export default Messages;