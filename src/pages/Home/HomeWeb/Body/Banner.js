import React, { Component } from "react";

import imageWelcome from "../../.../../../../assets/imageHomePage/imageWelcome.png";

export default class Banner extends Component {
    render() {
        return (
            <div className="col-9">
                <div className="image">
                    <img src={imageWelcome} alt="imageWelcome" />
                </div>
            </div>
        );
    }
}
