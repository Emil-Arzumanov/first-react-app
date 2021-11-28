let SEND_MESSAGE = "SEND-MESSAGE";

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
        messages: ["Hi!", "How are you?", "Hello!I'm okay,hope you're doing ok too? :)", "Yes,absolutely!", "I am very happy to hear that",
            "Ok.Goodbye than!","Yeah...I guess goodbye!"]
    }

};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case(SEND_MESSAGE): {
            if (action.text.length === 0) {
                alert("NOTHING TO SEND!")
                return state;
            }
            let messagesArr = [...state.dialog.messages];
            messagesArr.push(action.text);
            let stateCopy = {...state};
            stateCopy.dialog.messages = [...messagesArr];
            return {
                ...state
            };
        }
        default:
            return state;
    }
};

export const sendMessageActionCreator = (text) => {
    return {
        type: SEND_MESSAGE,
        text: text
    };
};

export default messageReducer;