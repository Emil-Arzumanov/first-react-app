import {Field, Form, Formik} from "formik";
import messageCreatorCSS from "./MessageCreator.module.css";
import React from "react";
import * as Yup from "yup";

const MessagesCreatorValidation = Yup.object().shape({
    text: Yup.string()
        .required("You have to write something...")
});

export const MessagesCreatorForm = (props) => (
    <div>
        <Formik
            initialValues={{
                text: ""
            }}
            validationSchema={MessagesCreatorValidation}
            onSubmit={
                values => {
                    props.sendMessage(values.text);
                }
            }
        >
            {({errors, touched}) => (
                <Form>
                    <div className={messageCreatorCSS.div}>
                        <Field name={"text"}
                               type={"text"}
                               className={messageCreatorCSS.textarea}
                        />
                        {
                            (errors.text && touched.text) ?
                                <div>{errors.text}</div> :
                                <button type={"submit"} className={messageCreatorCSS.button}>Send</button>
                        }
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);