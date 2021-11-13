import {Field, Formik, Form} from "formik";
import * as Yup from 'yup';

const LoginValidation = Yup.object().shape({
    password: Yup.string()
        .min(6, "To short...Not safe!")
        .max(20, "Wow!Wow!That's enough.Calm down...")
});

export const LoginForm = (props) => (
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
                    props.logIn({values});
                }
            }
        >
            {({errors, touched}) => (
                <Form>
                    <div>
                        <Field name={"login"}/>
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
                        <button type={"submit"}>Log In</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);