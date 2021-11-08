const Login = (props) => {
    return (
        <div>
            <span>Login</span>
            <p>{props.userID}</p>
            <p>{props.login}</p>
            <p>{props.email}</p>
        </div>
    );
};

export default Login;