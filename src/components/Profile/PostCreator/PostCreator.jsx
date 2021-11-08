import PosCreatCSS from "./PostCreator.module.css";
import React from "react";

const PostCreator = (props) => {
    let newPostMessage = React.createRef();

    let addPost = () => {
        props.addPost()
        newPostMessage.current.value = "";
    }
    let updatePostText = () => {
        let text = newPostMessage.current.value;
        props.updatePostText(text);
    };

    return (
        <div className={PosCreatCSS.creator}>
            <textarea ref={newPostMessage} onChange={updatePostText}></textarea>
            <button onClick={addPost}>Publish</button>
        </div>
    );
};

export default PostCreator;