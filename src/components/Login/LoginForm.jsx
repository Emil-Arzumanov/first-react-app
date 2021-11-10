import {useFormik} from "formik";

const LoginForm = (props) => {
    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
            rememberMe: false
        },
        onSubmit: values => {
            console.log({values});
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input id={"login"}
                       name={"login"}
                       type={"text"}
                       onChange={formik.handleChange}
                       value={formik.values.login}
                />
            </div>
            <div>
                <input id={"password"}
                       name={"password"}
                       type={"password"}
                       onChange={formik.handleChange}
                       value={formik.values.password}
                />
            </div>
            <div>
                <input id={"rememberMe"}
                       name={"rememberMe"}
                       type={"checkbox"}
                       onChange={formik.handleChange}
                       value={formik.values.rememberMe}
                /> remember me
            </div>
            <div>
                <button type={"submit"}>Log In</button>
            </div>
        </form>
    );
};

export default LoginForm;