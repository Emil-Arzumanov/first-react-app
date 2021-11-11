import {useFormik} from "formik";
import messageCreatorCSS from "./MessageCreator/MessageCreator.module.css";
import React from "react";

const MessagesForm = (props) => {
    const formik = useFormik({
        initialValues: {
            text: "",
        },
        onSubmit: values => {
            props.sendMessage(values.text);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className={messageCreatorCSS.form}>
            <div className={messageCreatorCSS.div}>
                <input id={"text"}
                       name={"text"}
                       type={"text"}
                       onChange={formik.handleChange}
                       value={formik.values.text}
                       className={messageCreatorCSS.textarea}
                />
                <button type={"submit"} className={messageCreatorCSS.button}>Send</button>
            </div>
        </form>
    );
};

export default MessagesForm;