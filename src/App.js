import "antd/dist/antd.css";
import Footer from "components/Footer";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "swiper/swiper.scss";
import "./styles/main.scss";

// Lazy load - Code splitting
const HomeContainer = React.lazy(() => import("layouts/Home"));
const DesignsContainer = React.lazy(() => import("layouts/Designs"));
const DesignerProfileContainer = React.lazy(() =>
    import("layouts/DesignerProfile")
);
const CartContainer = React.lazy(() => import("layouts/Cart"));
const FabricDetailContainer = React.lazy(() => import("layouts/FabricDetail"));
const FabricsContainer = React.lazy(() => import("layouts/Fabrics"));
const InformationContainer = React.lazy(() => import("layouts/Information"));
const OrderSuccessContainer = React.lazy(() => import("layouts/OrderSuccess"));
const PaymentContainer = React.lazy(() => import("layouts/Payment"));
const SelectionContainer = React.lazy(() => import("layouts/Selection"));
const SizeContainer = React.lazy(() => import("layouts/Size"));

function App() {
    return (
        <div className="app">
            <Suspense fallback={<div>Loading ...</div>}>
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/designs" component={DesignsContainer} />
                    <Route
                        exact
                        path="/designer-profile"
                        component={DesignerProfileContainer}
                    />
                    <Route path="/fabrics" component={FabricsContainer} />
                    <Route
                        path="/fabric-detail"
                        component={FabricDetailContainer}
                    />
                    <Route path="/selection" component={SelectionContainer} />
                    <Route path="/size" component={SizeContainer} />
                    <Route path="/cart" component={CartContainer} />
                    <Route path="/info" component={InformationContainer} />
                    <Route path="/payment" component={PaymentContainer} />
                    <Route
                        path="/order-success"
                        component={OrderSuccessContainer}
                    />
                    {/* <Route component={NotFound} /> */}
                </Switch>
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
