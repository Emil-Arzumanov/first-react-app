import {connect} from "react-redux";
import React from "react";
import {authorizeThunk, setLoginDataAC} from "../../Redux/authorize-reducer";
import Login from "./Login";

class LoginAPIComponent extends React.Component {
    componentDidMount() {
        this.props.authorizeThunk();
    };

    render() {
        return <Login {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userID: state.authorize.userID,
        login: state.authorize.login,
        email: state.authorize.email,
        isAuthorized: state.authorize.isAuthorized
    };
};

const LoginContainer = connect(mapStateToProps,{
    setLoginDataAC,
    authorizeThunk
})(LoginAPIComponent)

export default LoginContainer;