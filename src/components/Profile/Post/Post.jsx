import postCSS from "./Post.module.css";

const Post = (props) => {
    return (
        <div>
            <div className={postCSS.circle}></div>
            <div className={postCSS.postMessage}>{props.message}</div>
        </div>
    );
};

export default Post;