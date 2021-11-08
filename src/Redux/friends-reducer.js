let initialState = {
    friends: [
        {name: "George", surname: "Washington", friendID: 1},
        {name: "Alexey", surname: "Navalniy", friendID: 2},
        {name: "Vladimir", surname: "Putin", friendID: 3},
        {name: "Bill", surname: "Gates", friendID: 4},
        {name: "Joseph", surname: "Stalin", friendID: 5},
        {name: "Jeff", surname: "Bezos", friendID: 6}
    ]
};

const friendsReducer = (state = initialState) => {
    let stateCopy = {...state};
    return stateCopy;
};

export default friendsReducer;