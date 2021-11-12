import {Field, Form, Formik} from "formik";
import React from "react";
import PostCreatorCSS from "./PostCreator.module.css";
import * as Yup from "yup";

const PostCreatorValidation = Yup.object().shape({
    text: Yup.string()
        .required("You have to write something...")
});

export const PostCreatorForm = (props) => (
    <div>
        <Formik
            initialValues={{
                text: ""
            }}
            validationSchema={PostCreatorValidation}
            onSubmit={
                values => {
                    props.addPost(values.text);
                }
            }
        >
            {({errors, touched}) => (
                <Form>
                    <div className={PostCreatorCSS.creator}>
                        <Field name={"text"} type={"text"}/>
                        {
                            (errors.text && touched.text) ?
                                <div>{errors.text}</div> :
                                <button type={"submit"}>Publish</button>
                        }
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);