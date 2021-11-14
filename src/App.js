import appCSS from './App.module.css';
import Navigation from './components/Nav/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import MessagesContainer from "./components/Messages/MessagesContainer";
import FindUsersContainer from "./components/FindUsers/FindUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import Header from "./components/Header/Header";
import {Component} from "react";
import {compose} from "redux";
import {setInitializeThunk} from "./Redux/app-reducer";
import Loader from "./components/GeneralComponents/Loader";

class App extends Component {
    componentDidMount() {
        this.props.setInitializeThunk()
    }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }
        return (
            <Provider store={this.props.data}>
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
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {setInitializeThunk})
)(App);