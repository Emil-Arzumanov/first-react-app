import headerCSS from "./Header.module.css";
import logo from "../imgs/logo.png"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={headerCSS.header}>
            <img src={logo}></img>
            <NavLink to={"/Login"}>
                <a className={headerCSS.loginA}>Login</a>
            </NavLink>
        </header>
    );
}

export default Header;