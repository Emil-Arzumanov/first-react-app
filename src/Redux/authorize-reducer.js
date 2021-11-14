import {AuthAPI} from "../api/api";

let SET_LOGIN_DATA = "SET-LOGIN-DATA";

let initialState = {
    userID: null,
    login: null,
    email: null,
    password: null,
    isAuthorized: false,
    logInErrorMessage: ""
};

const authorizeReducer = (state = initialState, action) => {
    switch (action.type) {
        case(SET_LOGIN_DATA): {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state;
    }
};

export const setLoginDataAC = (userID, login, email, isAuthorized, logInErrorMessage) => {
    return {
        type: SET_LOGIN_DATA,
        data: {userID, login, email, isAuthorized, logInErrorMessage}
    };
};
export const authorizeThunk = () => {
    return (dispatch) => {
        return AuthAPI.loginUser().then(data => {
            if (data.resultCode === 0) {
                dispatch(setLoginDataAC(data.data.id, data.data.login, data.data.email, true, ""));
            }
        });
    };
};
export const logInThunk = (email, password, rememberMe) => {
    return (dispatch) => {
        AuthAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(authorizeThunk());
            } else {
                let message = data.data.messages.length > 0 ? data.data.messages[0] : "Some ERROR";
                dispatch(setLoginDataAC(null, null, null, false, message))
            }
        });
    };
};
export const logOutThunk = () => {
    return (dispatch) => {
        AuthAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setLoginDataAC(null, null, null, false));
            }
        });
    };
};

export default authorizeReducer;