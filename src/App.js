import HomeContainer from "containers/Home";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/main.scss";
import ButtonCTA from "components/Button/CTA";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    {/* <Route path="/" component={HomeContainer} /> */}
                    <Route path="/test" component={ButtonCTA} />

                    {/* <Route component={NotFound} /> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
