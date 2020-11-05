import "antd/dist/antd.css";
import Footer from "components/Footer";
import React, { Suspense, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "swiper/swiper.scss";
import "./styles/main.scss";
import "./app.scss";
import PageLoader from "components/Loader/Page";
import TestFix from "layouts/TestFix";
import Policy from "layouts/Policy";
import Support from "layouts/Support";
import ReadExcel from "layouts/TestReadExcel";
import { useSelector } from "react-redux";
import classNames from "classnames";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga";

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
const AdminContainer = React.lazy(() => import("layouts/Admin"));
/*--------------*/
const initGA = () => {
    ReactGA.initialize("UA-159143322-1");
};

const logPageViewGA = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

const initPixel = () => {
    const options = {
        autoConfig: true, // set pixel's autoConfig
        debug: false, // enable logs
    };
    ReactPixel.init("218331376051723", null, options);
};

const logPageViewPixel = () => {
    ReactPixel.pageView(window.location.pathname + window.location.search);
};

function App() {
    /*--------------*/
    const isPageFixedTop = useSelector((state) => state.common.isPageFixedTop);
    const isImageSelectionModalOpen = useSelector(
        (state) => state.admin.isImageSelectionModalOpen
    );
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        initGA();
        logPageViewGA();
        initPixel();
        logPageViewPixel();
        /*--------------*/
    }, []);
    /*--------------*/
    return (
        <div
            className={classNames("app", {
                "app--fixed-top": isPageFixedTop || isImageSelectionModalOpen,
            })}
        >
            <Suspense fallback={<PageLoader />}>
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
                    <Route path="/policy" component={Policy} />
                    <Route path="/support" component={Support} />
                    <Route path="/test-fix" component={TestFix} />
                    {/* this is for Admin */}
                    <Route path="/admin" component={AdminContainer} />
                    <Route path="/test-excel" component={ReadExcel} />
                    {/* <Route component={NotFound} /> */}
                </Switch>
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
