// import DesignsContainer from "layouts/Designs";
// import HomeContainer from "layouts/Home";
import CartContainer from "layouts/Cart";
import FabricDetailContainer from "layouts/FabricDetail";
import FabricsContainer from "layouts/Fabrics";
import SelectionContainer from "layouts/Selection";
import SizeContainer from "layouts/Size";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/main.scss";
import "antd/dist/antd.css";

// Lazy load - Code splitting
const HomeContainer = React.lazy(() => import("layouts/Home"));
const DesignsContainer = React.lazy(() => import("layouts/Designs"));
const DesignerProfileContainer = React.lazy(() =>
    import("layouts/DesignerProfile")
);

function App() {
    return (
        <div className="app">
            <Suspense fallback={<div>Loading ...</div>}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomeContainer} />
                        <Route path="/designs" component={DesignsContainer} />
                        <Route
                            path="/designer-profile"
                            component={DesignerProfileContainer}
                        />
                        <Route path="/fabrics" component={FabricsContainer} />
                        <Route
                            path="/fabric-detail"
                            component={FabricDetailContainer}
                        />
                        <Route
                            path="/selection"
                            component={SelectionContainer}
                        />
                        <Route path="/size" component={SizeContainer} />
                        <Route path="/cart" component={CartContainer} />
                        {/* <Route component={NotFound} /> */}
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
