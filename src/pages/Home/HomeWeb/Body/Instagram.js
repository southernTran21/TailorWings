import React, { Component } from "react";

import iconIG from "../../.../../../../assets/imageHomePage/instagram.svg";

export default class Instagram extends Component {
    render() {
        return (
            <div className="instagram fontMontserrat">
                <div className="title d-flex align-items-center">
                    <img src={iconIG} alt="instagram" />
                    <span>Instagram</span>
                </div>
                <div className="crouselImage d-flex">
                    <div className="image"></div>
                    <div className="image" style={{ margin: "0 0.83vw" }}></div>
                    <div className="image"></div>
                </div>
            </div>
        );
    }
}
