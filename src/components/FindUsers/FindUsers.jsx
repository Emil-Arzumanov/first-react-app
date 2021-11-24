import findUsersCSS from "./FindUsers.module.css";
import Users from "./Users/Users";

const FindUsers = (props) => {
    return (
        <div>
            <p className={findUsersCSS.p}>Users</p>
            <div className={findUsersCSS.usersDiv}>
                <Users usersElements={props.usersElements}
                       pages={props.pages}
                       isFetching={props.isFetching}
                       followUnfollowUserThunk={props.followUnfollowUserThunk}
                       onPageChange={props.changePage}
                       followingInProgress={props.followingInProgress}
                />
                <button className={findUsersCSS.button}>Show More</button>
            </div>
        </div>
    );
};

export default FindUsers;