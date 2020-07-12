import HomeDesktop from "containers/Desktop/Home";
import HomeMobile from "containers/Mobile/Home";
import React, { Fragment } from "react";
import Media from "react-media";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/main.scss";
import FooterContainerMobile from "containers/Mobile/Footer";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Switch>
                    <Media queries={{ desktop: { minWidth: 769 } }}>
                        {(matches) =>
                            matches.desktop ? (
                                <Fragment>
                                    <Route path="/" component={HomeDesktop} />
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Route path="/" component={HomeMobile} />
                                    <FooterContainerMobile />
                                </Fragment>
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
