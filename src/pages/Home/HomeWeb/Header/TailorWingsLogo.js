import React, { Component } from "react";

import logoHeader from "../../../../assets/imageHomePage/Logo Header.svg";

export default class TailorWingsLogo extends Component {
    render() {
        return (
            <div className="logo_wrapper">
                <img src={logoHeader} alt="TailorWings" />
            </div>
        );
    }
}
