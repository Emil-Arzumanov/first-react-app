import LoginForm from "./LoginForm";

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm isAuth={props.isAuthorized}/>
        </div>
    );
};

export default Login;