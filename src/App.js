import appCSS from './App.module.css';
import Navigation from './components/Nav/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import MessagesContainer from "./components/Messages/MessagesContainer";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import Header from "./components/Header/Header";

const App = (props) => {

    return (
        <BrowserRouter>
            <Provider store={props.data}>
                <div className={appCSS.appWrapper}>
                    <Header/>
                    <Navigation/>
                    <div className={appCSS.changableContent}>
                        <Route path="/Login" render={() => <LoginContainer/>}/>
                        <Route path="/Profile/:userID?" render={() => <ProfileContainer/>}/>
                        <Route path="/Messages" render={() => <MessagesContainer/>}/>
                        <Route path="/News" render={() => <News/>}/>
                        <Route path="/Music" render={() => <Music/>}/>
                        <Route path="/FindUsers" render={() => <FindUsersContainer/>}/>
                        <Route path="/Settings" render={() => <Settings/>}/>
                        <Route path="/Friends" render={() => <Friends/>}/>
                    </div>
                </div>
            </Provider>
        </BrowserRouter>
    );
};

export default App;