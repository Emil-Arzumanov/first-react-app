import {connect} from "react-redux";
import FindUsers from "./FindUsers";
import {
    getUserThunk,
    unfollowUserThunk,
    followUserThunk,
    changePageAC
} from "../../Redux/users/users-reducer";
import React from "react";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getPagesReselect,
    getTotalCount,
    getUsersElements
} from "../../Redux/users/users-selection";

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
        usersElements: getUsersElements(state),
        pages: getPagesReselect(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
};

export default compose(
    connect(mapStateToProps, {
        getUserThunk,
        unfollowUserThunk,
        followUserThunk,
        changePageAC
    })
)(UsersAPIComponent);