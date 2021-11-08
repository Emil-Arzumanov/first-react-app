import profile from "./Profile.module.css";
import longPic from "./ProfileIMG/long.jpg";
import ProfileImgAndInfo from "./ProfileImgAndInfo/ProfileImgAndInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={profile.content}>
            <div>
                <img src={longPic}></img>
            </div>
            <div className={profile.profileInfo}>
                <ProfileImgAndInfo profileData={props.profileData}
                                   updateStatus={props.updateStatus}
                                   status={props.status}
                />
                <MyPosts addPost={props.addPost}
                         updatePostText={props.updatePostText}
                         postsData={props.postsData}
                />
            </div>
        </div>
    );
};

export default Profile;