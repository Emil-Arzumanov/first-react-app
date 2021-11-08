import React from 'react';
import store from "./Redux/redux-store";
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App data={store}/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);