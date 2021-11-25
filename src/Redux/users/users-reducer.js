import {UsersAPI} from "../../api/api";

let FOLLOW_UNFOLLOW_USER = "FOLLOW-UNFOLLOW-USER";
let SET_USER = "SET-USER";
let CHANGE_PAGE = "user-reducer/CHANGE-PAGE";
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
        case(FOLLOW_UNFOLLOW_USER): {
            return {
                ...state,
                users: state.users.map((data) => {
                    if (data.id === action.id) {
                        return {
                            ...data,
                            followed: action.followed
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
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }
        }
        default:
            return state;
    }
};

export const followUnfollowUserAС = (id, followed) => {
    return {
        type: FOLLOW_UNFOLLOW_USER,
        id: id,
        followed: followed
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
export const toggleFollowInProgressAC = (isFetching, id) => {
    return {
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        isFetching: isFetching,
        userID: id
    };
};
export const getUserThunk = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleFetchingAC(true));
        let data = await UsersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleFetchingAC(false));
        dispatch(setUserAC(data.items));
        dispatch(setTotalCountAC(data.totalCount));
        dispatch(changePageAC(currentPage));
    };
};

export const followUnfollowUserThunk = (id, followed) => {
    return async (dispatch) => {
        dispatch(toggleFollowInProgressAC(true, id));
        let deleteData = followed ? await UsersAPI.postUsers(id) : await UsersAPI.deleteUsers(id);
        if (deleteData.resultCode === 0) {
            dispatch(followUnfollowUserAС(id, followed));
        }
        dispatch(toggleFollowInProgressAC(false, id));
    }
};

export default usersReducer;