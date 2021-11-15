import {UsersAPI} from "../../api/api";

let UNFOLLOW_USER = "UNFOLLOW-USER";
let FOLLOW_USER = "FOLLOW-USER";
let SET_USER = "SET-USER";
let CHANGE_PAGE = "CHANGE-PAGE";
let SET_TOTALCOUNT = "SET-TOTALCOUNT";
let TOGGLE_FETCHING = "TOGGLE-FETCHING";
let TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE-FOLLOWING-IN-PROGRESS";

let initialState = {
    users: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case(UNFOLLOW_USER): {
            return {
                ...state,
                users: state.users.map((data) => {
                    if (data.id === action.id) {
                        return {
                            ...data,
                            followed: false
                        };
                    }
                    return data;
                })
            }
        }
        case(FOLLOW_USER): {
            return {
                ...state,
                users: state.users.map((data) => {
                    if (data.id === action.id) {
                        return {
                            ...data,
                            followed: true
                        };
                    }
                    return data;
                })
            }
        }
        case(SET_USER): {
            return {
                ...state,
                users: action.users
            }
        }
        case(CHANGE_PAGE): {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case(SET_TOTALCOUNT): {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case(TOGGLE_FETCHING): {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case(TOGGLE_FOLLOWING_IN_PROGRESS): {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress,action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }
        }
        default:
            return state;
    }
};

export const followUserAС = (id) => {
    return {
        type: FOLLOW_USER,
        id: id
    };
};
export const unfollowUserAС = (id) => {
    return {
        type: UNFOLLOW_USER,
        id: id
    };
};
export const setUserAC = (users) => {
    return {
        type: SET_USER,
        users: users
    };
};
export const changePageAC = (currentPage) => {
    return {
        type: CHANGE_PAGE,
        page: currentPage
    };
};
export const setTotalCountAC = (totalCount) => {
    return {
        type: SET_TOTALCOUNT,
        totalCount: totalCount
    };
};
export const toggleFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_FETCHING,
        isFetching: isFetching
    };
};
export const toggleFollowInProgressAC = (isFetching,id) => {
    return {
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        isFetching: isFetching,
        userID: id
    };
};
export const getUserThunk = (currentPage,pageSize) => {
    return (dispatch) => {
        dispatch(toggleFetchingAC(true));
        UsersAPI.getUsers(currentPage,pageSize).then(data => {
            dispatch(toggleFetchingAC(false));
            dispatch(setUserAC(data.items));
            dispatch(setTotalCountAC(data.totalCount));
            dispatch(changePageAC(currentPage));
        });
    };
};
export const unfollowUserThunk = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowInProgressAC(true,id));
        UsersAPI.deleteUsers(id).then(deleteData => {
            if (deleteData.resultCode === 0) {
                dispatch(unfollowUserAС(id));
            }
            dispatch(toggleFollowInProgressAC(false,id));
        });
    };
};
export const followUserThunk = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowInProgressAC(true,id));
        UsersAPI.postUsers(id).then(deleteData => {
            if (deleteData.resultCode === 0) {
                dispatch(followUserAС(id));
            }
            dispatch(toggleFollowInProgressAC(false,id));
        });
    };
};

export default usersReducer;