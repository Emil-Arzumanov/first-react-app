import {newMessageActionCreator, sendMessageActionCreator} from "../../Redux/message-reducer";
import {connect} from "react-redux";
import Messages from "./Messages";
import React from "react";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

class MessagesAPIContainer extends React.Component {
    render() {
        return <Messages sendMessage={this.props.sendMessageActionCreator}
                         updateMessageText={this.props.newMessageActionCreator}
                         dialogsData={this.props.dialogsData}
                         dialogsMessages={this.props.messages}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesData.dialogsData,
        messages: state.messagesData.dialog.messages,
        isAuthorized: state.authorize.isAuthorized
    };
};

export default compose(
    connect(mapStateToProps, {newMessageActionCreator, sendMessageActionCreator}),
    withAuthRedirect
)(MessagesAPIContainer);