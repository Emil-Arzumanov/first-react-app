import NavbarFriends from "./NavbarFriends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        friendElems: state.friends.friends.map((data, i) => {
            if (i < 3)
                return <div>{data.name}</div>;
            else if (i === 3)
                return <div>...({state.friends.friends.length - 3})</div>;
            else
                return;
        })
    };
};

const NavbarFriendsContainer = connect(mapStateToProps)(NavbarFriends)

export default NavbarFriendsContainer;