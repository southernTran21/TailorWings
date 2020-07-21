import ButtonSize from "components/Button/Size";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/main.scss";
import ButtonFilter from "components/Button/Filter";
import ButtonLoadMore from "components/Button/LoadMore";
import ButtonConfirm from "components/Button/Confirm";
import ButtonSizeOption from "components/Button/SizeOption";
import HomeContainer from "containers/Home";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={HomeContainer} />
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
