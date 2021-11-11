import PosCreatCSS from "./PostCreator.module.css";
import React from "react";
import PostCreatorForm from "./PostCreatorForm";

const PostCreator = (props) => {
    return (
        <PostCreatorForm addPost={props.addPost}/>
    );
};

export default PostCreator;