import NavbarFriendsCSS from "./NavbarFriends.module.css";

const NavbarFriends = (props) => {
    return (
        <div className={NavbarFriendsCSS.divClass}>
            <p>Friends</p>
            {props.friendElems}
        </div>
    );
};

export default NavbarFriends;