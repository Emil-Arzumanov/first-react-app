import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let store = {
    _state: {
        profileData: {
            postsData: [
                {
                    id: 1,
                    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                    id: 2,
                    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                }
            ],
            newPostElement: ""
        },
        messagesData: {
            dialogsData: [
                {name: "Dima", messageID: 1},
                {name: "Vika", messageID: 2},
                {name: "Stas", messageID: 3},
                {name: "Lera", messageID: 4},
                {name: "Diana", messageID: 5},
                {name: "Anton", messageID: 6},
                {name: "Dima", messageID: 7},
                {name: "Vika", messageID: 8},
                {name: "Stas", messageID: 9},
                {name: "Lera", messageID: 10},
                {name: "Diana", messageID: 11},
                {name: "Anton", messageID: 12}
            ],
            dialog: {
                currentTextar: "",
                messages: ["Hi!", "Fuck you,asshole!", "Thanks man :)","LOL","DING=DONG", "Fuck you,asshole!",
                    "Thanks man :)","LOL","DING=DONG", "Fuck you,asshole!", "Thanks man :)","LOL","DING=DONG",
                    "Fuck you,asshole!", "Thanks man :)","LOL","DING=DONG"]
            }
        },
        friends: [
            {name: "George", surname: "Washington", friendID: 1},
            {name: "Alexey", surname: "Navalniy", friendID: 2},
            {name: "Vladimir", surname: "Putin", friendID: 3},
            {name: "Bill", surname: "Gates", friendID: 4},
            {name: "Joseph", surname: "Stalin", friendID: 5},
            {name: "Jeff", surname: "Bezos", friendID: 6}
        ]
    },
    getState() {
        return this._state;
    },
    _rerenderEntireTree() {
    },
    subscriber(observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {
        this._state.profileData = profileReducer(action,this._state.profileData);
        this._state.messagesData = messageReducer(action,this._state.messagesData);
        this._rerenderEntireTree(this._state);
    }
};

window.state = store._state;
export default store;