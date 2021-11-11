import {useFormik} from "formik";
import React from "react";
import PostCreatorCSS from "./PostCreator.module.css";

const PostCreatorForm = (props) => {
    const formik = useFormik({
        initialValues: {
            text: "",
        },
        onSubmit: values => {
            props.addPost(values.text);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={PostCreatorCSS.creator}>
                <input id={"text"}
                       name={"text"}
                       type={"text"}
                       onChange={formik.handleChange}
                       value={formik.values.text}
                />
                <button type={"submit"}>Publish</button>
            </div>
        </form>
    );
};

export default PostCreatorForm;