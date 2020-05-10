import React, { Component, lazy, Suspense } from "react";
import "./Desktop.scss";

const Navbar = lazy(() => import("./Navbar"));
const Banner = lazy(() => import("./Banner"));
const WhyTailorwings = lazy(() => import("./WhyTailorwings"));
const TailorRegistration = lazy(() => import("./TailorRegistration"));
const Footer = lazy(() => import("./Footer"));

class DesktopVersion extends Component {
    render() {
        const { history } = this.props;
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <div className="landingPageWelcomeDesktop_wrapper">
                    <Navbar history={history} />
                    <Banner />
                    <WhyTailorwings history={history} />
                    <TailorRegistration />
                    <Footer />
                </div>
            </Suspense>
        );
    }
}

export default DesktopVersion;
