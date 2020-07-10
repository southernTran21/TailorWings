import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import './styles/styles.scss'

import Home from "containers/Mobile/Home";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} />
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
