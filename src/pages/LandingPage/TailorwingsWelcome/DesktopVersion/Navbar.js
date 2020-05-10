import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Image, SVG
import logoTW from "../../../../assets/imageHomePage/Logo Header.svg";

class Navbar extends Component {
    render() {
        return (
            <div className="navbarHeaderLandingPage d-flex justify-content-between align-items-center">
                <div className="logoTW">
                    <img src={logoTW} alt="" />
                </div>
                <Link
                    style={{ textDecoration: "none" }}
                    to={{
                        pathname: "/shopping-store",
                        search: "?cat=all&search",
                    }}
                >
                    <div className="button d-flex justify-content-center align-items-center">
                        KHÁM PHÁ NGAY
                    </div>
                </Link>
            </div>
        );
    }
}

export default Navbar;
