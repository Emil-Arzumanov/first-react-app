import profile from "./ProfileImgAndInfo.module.css";
import profilePic from "../ProfileIMG/profileIMG.png";
import Loader from "../../GeneralComponents/Loader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

/*
{
  "aboutMe": "я круто чувак 1001%",
  "contacts": {
    "facebook": "facebook.com",
    "website": null,
    "vk": "vk.com/dimych",
    "twitter": "https://twitter.com/@sdf",
    "instagram": "instagra.com/sds",
    "youtube": null,
    "github": "github.com",
    "mainLink": null
  },
  "lookingForAJob": true,
  "lookingForAJobDescription": "не ищу, а дурачусь",
  "fullName": "samurai dimych",
  "userId": 2,
  "photos": {
    "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
    "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
  }
}
*/

const ProfileImgAndInfo = (props) => {
    if (!props.profileData) {
        return <Loader/>
    }
    let profPic = profilePic;
    if (props.profileData.data.photos.large !== null) {
        profPic = props.profileData.data.photos.large;
    }
    return (
        <div className={profile.avaDescription}>
            <div className={profile.ava}>
                <img src={profPic}></img>
            </div>
            <div className={profile.description}>
                <h2>{props.profileData.data.fullName}</h2>
                <p>Работа:"{props.profileData.data.lookingForAJobDescription}"</p>
                <p>City: Minsk</p>
                <p>Education: BSU'11</p>
                <p>Web Site: <a href={props.profileData.data.contacts.vk}>{props.profileData.data.contacts.vk}</a></p>
                <p><ProfileStatus status={props.status} updateStatus={props.updateStatus}/></p>
            </div>
        </div>
    );
};

export default ProfileImgAndInfo;