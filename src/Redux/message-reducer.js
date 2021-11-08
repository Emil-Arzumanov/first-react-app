let SEND_MESSAGE = "SEND-MESSAGE";
let CHANGE_MESSAGE = "CHANGE-MESSAGE";

let initialState = {
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
        messages: ["Hi!", "Fuck you,asshole!", "Thanks man :)", "LOL", "DING=DONG", "Fuck you,asshole!",
            "Thanks man :)", "LOL", "DING=DONG", "Fuck you,asshole!", "Thanks man :)", "LOL", "DING=DONG",
            "Fuck you,asshole!", "Thanks man :)", "LOL", "DING=DONG"]
    }

};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case(CHANGE_MESSAGE): {
            let stateCopy = {...state};
            stateCopy.dialog.currentTextar = action.text;
            return stateCopy;
        }
        case(SEND_MESSAGE): {
            let stateCopy = {...state};
            if (stateCopy.dialog.currentTextar.length === 0) {
                alert("NOTHING TO SEND!")
                return stateCopy;
            }
            let newMessage = stateCopy.dialog.currentTextar;
            stateCopy.dialog.messages = [...state.dialog.messages];
            stateCopy.dialog.messages.push(newMessage);
            stateCopy.dialog.currentTextar = "";
            return stateCopy;
        }
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    };
};
export const newMessageActionCreator = (text) => {
    return {
        type: CHANGE_MESSAGE,
        text: text
    };
};

export default messageReducer;