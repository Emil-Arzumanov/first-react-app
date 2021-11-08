import {connect} from "react-redux";
import FindUsers from "./FindUsers";
import {
    getUserThunk,
    unfollowUserThunk,
    followUserThunk,
    changePageAC
} from "../../Redux/users-reducer";
import React from "react";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUserThunk(this.props.pages.currentPage,this.props.pages.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getUserThunk(pageNumber,this.props.pages.pageSize);
    };

    render() {
        return <FindUsers usersElements={this.props.usersElements}
                          pages={this.props.pages}
                          isFetching={this.props.isFetching}
                          followUserThunk={this.props.followUserThunk}
                          unfollowUserThunk={this.props.unfollowUserThunk}
                          changePage={this.onPageChanged}
                          followingInProgress={this.props.followingInProgress}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        usersElements: state.users.users,
        pages: {
            pageSize: state.users.pageSize,
            totalCount: state.users.totalCount,
            currentPage: state.users.currentPage
        },
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    };
};

export default compose(
    connect(mapStateToProps, {
        getUserThunk,
        unfollowUserThunk,
        followUserThunk,
        changePageAC
    }),
    withAuthRedirect
)(UsersAPIComponent);