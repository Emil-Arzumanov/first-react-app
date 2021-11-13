import {Field, Formik, Form} from "formik";
import * as Yup from 'yup';
import {connect} from "react-redux";
import {logInThunk, logOutThunk} from "../../Redux/authorize-reducer";
import {Redirect} from "react-router-dom";

const LoginValidation = Yup.object().shape({
    password: Yup.string()
        .min(6, "To short...Not safe!")
        .max(20, "Wow!Wow!That's enough.Calm down...")
});
const LoginForm = (props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false
                }}
                validationSchema={LoginValidation}
                onSubmit={
                    values => {
                        props.logInThunk(values.email, values.password, values.rememberMe);
                    }
                }
            >
                {({errors, touched}) => (
                    <Form>
                        <div>
                            <Field name={"email"}/>
                        </div>
                        <div>
                            <Field name={"password"} type={"password"}/>
                            {errors.password && touched.password ?
                                <div>{errors.password}</div> :
                                null
                            }
                        </div>
                        <div>
                            <Field name={"rememberMe"} type={"checkbox"}/> remember me
                        </div>
                        <div>
                            {
                                props.isAuthorized ?
                                    <button onClick={props.logOutThunk}>Log Out</button> :
                                    <button type={"submit"}>Log In</button>
                            }
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuthorized: state.authorize.isAuthorized
    };
};

export default connect(mapStateToProps, {logInThunk, logOutThunk})(LoginForm)