import navCSS from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import NavbarFriendsContainer from "./NavbarFriends/NavbarFriendsContainer";

const Navigation = (props) => {
    return (
        <nav className={navCSS.nav}>
            <div>
                <NavLink to="/Profile" activeClassName={navCSS.activeLink}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/Messages" activeClassName={navCSS.activeLink}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/News" activeClassName={navCSS.activeLink}>News</NavLink>
            </div>
            <div>
                <NavLink to="/Music" activeClassName={navCSS.activeLink}>Music</NavLink>
            </div>
            <div className={navCSS.settings}>
                <NavLink to="/FindUsers" activeClassName={navCSS.activeLink}>Find Users</NavLink>
            </div>
            <div className={navCSS.settings}>
                <NavLink to="/Settings" activeClassName={navCSS.activeLink}>Settings</NavLink>
            </div>
            <div className={navCSS.friends}>
                <NavLink to={"/Friends"}><NavbarFriendsContainer/></NavLink>
            </div>
        </nav>
    );
};

export default Navigation;