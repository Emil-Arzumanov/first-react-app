import {connect} from "react-redux";
import React from "react";
import {authorizeThunk, logInThunk, logOutThunk} from "../../Redux/authorize/authorize-reducer";
import Login from "./Login";
import {getLogInErrorMessage, getUserIsAuthorized} from "../../Redux/authorize/authorize-selection";

class LoginAPIComponent extends React.Component {
    render() {
        return <Login isAuthorized={this.props.isAuthorized}
                      logInErrorMessage={this.props.logInErrorMessage}
                      logInThunk={this.props.logInThunk}
                      logOutThunk={this.props.logOutThunk}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuthorized: getUserIsAuthorized(state),
        logInErrorMessage: getLogInErrorMessage(state)
    };
};

const LoginContainer = connect(mapStateToProps,{
    authorizeThunk,
    logInThunk,
    logOutThunk
})(LoginAPIComponent)

export default LoginContainer;