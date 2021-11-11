import {ProfileAPI} from "../api/api";

let ADD_POST = "ADD-POST";
let SET_PROFILE = "SET-PROFILE";
let SET_STATUS = "SET-STATUS";

let initialState = {
    profileData: null,
    postsData: [
        {
            id: 1,
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: 2,
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ],
    newPostElement: "",
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case(ADD_POST): {
            if (action.text === 0) {
                alert("NOTHING TO PUBLISH!")
                return state;
            }
            let newPost = {
                id: state.postsData.length + 1,
                message: action.text
            };
            let postsArr = [...state.postsData];
            postsArr.push(newPost);
            state.newPostElement = "";
            return {
                ...state,
                postsData: postsArr
            };
        }
        case(SET_PROFILE): {
            return {
                ...state,
                profileData: action.data
            }
        }
        case(SET_STATUS): {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
};

export const addPostAC = (text) => {
    return {
        type: ADD_POST,
        text: text
    };
};
export const setProfileDataAC = (data) => {
    return {
        type: SET_PROFILE,
        data: data
    }
};
export const setStatusAC = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
};

export const setProfileDataThunk = (userID = 20511) => {
    return (dispatch) => {
        ProfileAPI.profileUser(userID).then(response => {
            dispatch(setProfileDataAC(response));
        });
    };
};
export const getStatusThunk = (userID = 20511) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userID).then(response => {
            dispatch(setStatusAC(response.data));
        });
    };
};
export const updateStatusThunk = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status).then(response => {
            if (response.data.resulCode === 0) {
                dispatch(setStatusAC(response.data));
            }
        });
    };
};

export default profileReducer;