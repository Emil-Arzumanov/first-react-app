import Post from "../Post/Post";
import {PostCreatorForm} from "../PostCreator/PostCreatorForm";

const Posts = (props) => {
    return (
        <div>
            <PostCreatorForm  addPost={props.addPost}/>
            {
                props.postsData.map(
                    p => <Post message={p.message}/>
                )
            }
        </div>
    );
};
export default Posts;