import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuthorized: state.authorize.isAuthorized
    };
};

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuthorized) return <Redirect to={"/Login"}/>
            return <Component {...this.props}/>
        }
    }
    let withAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return withAuthRedirectComponent;
};