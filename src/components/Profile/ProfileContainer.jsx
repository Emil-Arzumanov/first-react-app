import {
    addPostAC,
    getStatusThunk,
    newPostMessageAC,
    setProfileDataAC,
    setProfileDataThunk,
    updateStatusThunk
} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import React from "react";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        this.props.setProfileDataThunk(this.props.match.params.userID)
        this.props.getStatusThunk(this.props.match.params.userID)
    };

    render() {
        return <Profile addPost={this.props.addPostAC}
                        updatePostText={this.props.newPostMessageAC}
                        postsData={this.props.postsData}
                        profileData={this.props.profileData}
                        updateStatus={this.props.updateStatusThunk}
                        status={this.props.status}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        profileData: state.profileData.profileData,
        postsData: state.profileData.postsData,
        status: state.profileData.status
    };
};

export default compose(
    connect(mapStateToProps,{
        newPostMessageAC,
        addPostAC,
        setProfileDataAC,
        setProfileDataThunk,
        getStatusThunk,
        updateStatusThunk
    }),
    withRouter,
    withAuthRedirect
)(ProfileAPIComponent);;