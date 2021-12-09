import React from 'react';
import MarketingApp from "./component/MarketingApp";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export default function App() {
    return (
        <div>
            <h1>Hi there!</h1>
            <hr/>
            <MarketingApp />
        </div>

    );
}