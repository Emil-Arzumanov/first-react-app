import {LoginForm} from "./LoginForm";

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm logIn={props.logInThunk}
                       logOut={props.logOutThunk}
            />
        </div>
    );
};

export default Login;