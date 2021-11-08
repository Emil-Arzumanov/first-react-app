import usersCSS from "./Users.module.css";
import findUserLogo from "../UsersIMG/avatar.png";
import React from "react";
import {NavLink} from "react-router-dom";
import Loader from "../../GeneralComponents/Loader";

const Users = (props) => {
    {
        let pagesCount = Math.ceil(props.pages.totalCount / props.pages.pageSize);
        let pages = [];
        for (let i = pagesCount-10; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <>
                {
                    props.isFetching ? <Loader/> : <div>
                        <div className={usersCSS.pages}>
                            {
                                pages.map((p) => {
                                    return <span
                                        className={p === props.pages.currentPage && usersCSS.selectedPage}
                                        onClick={() => props.onPageChange(p)}
                                    >{p}</span>
                                })
                            }
                        </div>
                        {
                            props.usersElements.map(data => {
                                let profPic = findUserLogo;
                                if (data.photos.small !== null) {
                                    profPic = data.photos.small;
                                }
                                return (<div key={data.id} className={usersCSS.allDiv}>
                                    <div className={usersCSS.logoDiv}>
                                        <NavLink to={"/profile/" + data.id}>
                                            <img alt="Logo" src={profPic} className={usersCSS.logo}/>
                                        </NavLink>
                                        {
                                            data.followed ?
                                                <button disabled={props.followingInProgress.some(id => data.id === id)} className={usersCSS.button} onClick={() => {
                                                    props.unfollowUserThunk(data.id);
                                                }
                                                }>{"Unfollow"}</button> :
                                                <button disabled={props.followingInProgress.some(id => data.id === id)} className={usersCSS.button} onClick={() => {
                                                    props.followUserThunk(data.id);
                                                }
                                                }>{"Follow"}</button>
                                        }
                                    </div>
                                    <div className={usersCSS.informationDiv}>
                                        <div className={usersCSS.name}>{data.name} {"data.surname[0]"}.</div>
                                        <div className={usersCSS.home}>{"data.homeCountry"},{"data.homeTown"}</div>
                                        <div className={usersCSS.status}><p>"{'data.status'}"</p></div>
                                    </div>
                                </div>);
                            })
                        }
                    </div>
                }
            </>
        );
    }
};

export default Users;