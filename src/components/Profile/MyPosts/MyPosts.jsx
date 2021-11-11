import PostCreator from "../PostCreator/PostCreator.jsx";
import Post from "../Post/Post";

const Posts = (props) => {
    return (
        <div>
            <PostCreator  addPost={props.addPost}/>
            {
                props.postsData.map(
                    p => <Post message={p.message}/>
                )
            }
        </div>
    );
};
export default Posts;