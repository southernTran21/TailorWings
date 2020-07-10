import HomeDesktop from "containers/Desktop/Home";
import HomeMobile from "containers/Mobile/Home";
import React from "react";
import Media from "react-media";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/styles.scss";



function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    <Media queries={{ desktop: { minWidth: 769 } }}>
                        {(matches) =>
                            matches.desktop ? (
                                <Route path="/" component={HomeDesktop} />
                            ) : (
                                <Route path="/" component={HomeMobile} />
                            )
                        }
                    </Media>
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
