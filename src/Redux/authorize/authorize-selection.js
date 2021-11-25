export const getUserIsAuthorized = (state) => {
    return state.authorize.isAuthorized;
};

export const getLogInErrorMessage = (state) => {
    return state.authorize.logInErrorMessage
};