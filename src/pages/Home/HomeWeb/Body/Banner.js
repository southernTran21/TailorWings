import React, { Component } from "react";

import imageWelcome from "../../.../../../../assets/imageHomePage/Hero Banner.png";

export default class Banner extends Component {
    render() {
        return (
            <div className="imageBanner d-flex justify-content-center">
                <img src={imageWelcome} alt="imageWelcome" />
            </div>
        );
    }
}
