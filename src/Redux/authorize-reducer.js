import {AuthAPI} from "../api/api";

let SET_LOGIN_DATA = "SET-LOGIN-DATA";

let initialState = {
    userID: null,
    login: null,
    email: null,
    isAuthorized: false
};

const authorizeReducer = (state = initialState, action) => {
    switch (action.type) {
        case(SET_LOGIN_DATA): {
            return {
                ...state,
                ...action.data,
                isAuthorized: action.isAuthorized
            }
        }
        default:
            return state;
    }
};

export const setLoginDataAC = (userID, login, email) => {
    return {
        type: SET_LOGIN_DATA,
        data: {userID, login, email},
        isAuthorized: true
    };
};
export const authorizeThunk = () => {
    return (dispatch) => {
        AuthAPI.loginUser(`auth/me`).then(data => {
            if (data.resultCode === 0) {
                dispatch(setLoginDataAC(data.data.id,data.data.login,data.data.email));
            };
        });
    };
};

export default authorizeReducer;