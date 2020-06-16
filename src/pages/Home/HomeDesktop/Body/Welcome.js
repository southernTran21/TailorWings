import React, { Component } from "react";

import SideMenu from "./SideMenu";
import Banner from "./Banner";



export default class Welcome extends Component {
    render() {
        return (
            <div className="welcome d-flex justify-content-center fontMontserrat">
                {/* <SideMenu/> */}
                <Banner/>
            </div>
        );
    }
}
