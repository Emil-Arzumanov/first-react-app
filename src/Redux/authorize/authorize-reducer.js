import {AuthAPI} from "../../api/api";

let SET_LOGIN_DATA = "authorize-reducer/SET-LOGIN-DATA";

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
    return async (dispatch) => {
        let data = await AuthAPI.loginUser()
        if (data.resultCode === 0) {
            dispatch(setLoginDataAC(data.data.id, data.data.login, data.data.email, true, ""));
        }
    };
};
export const logInThunk = (email, password, rememberMe) => {
    return async (dispatch) => {
        let data = await AuthAPI.login(email, password, rememberMe)
        if (data.resultCode === 0) {
            dispatch(authorizeThunk());
        } else {
            let message = data.data.messages.length > 0 ? data.data.messages[0] : "Some ERROR";
            dispatch(setLoginDataAC(null, null, null, false, message))
        }
    };
};
export const logOutThunk = () => {
    return async (dispatch) => {
        let data = await AuthAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setLoginDataAC(null, null, null, false));
        }
    };
};

export default authorizeReducer;