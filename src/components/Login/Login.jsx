import LoginForm from "./LoginForm";

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm isAuthorized={props.isAuthorized}
                       logInErrorMessage={props.logInErrorMessage}
                       logInThunk={props.logInThunk}
                       logOutThunk={props.logOutThunk}
            />
        </div>
    );
};

export default Login;