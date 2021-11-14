import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";
import authorizeReducer from "./authorize-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profileData: profileReducer,
    messagesData: messageReducer,
    friends: friendsReducer,
    users: usersReducer,
    authorize: authorizeReducer,
    app: appReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;