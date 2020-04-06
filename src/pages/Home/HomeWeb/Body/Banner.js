import React, { Component } from "react";
import { Link } from "react-router-dom";
import imageWelcome from "../../.../../../../assets/imageHomePage/Hero Banner.png";

export default class Banner extends Component {
    render() {
        return (
            <div className="imageBanner d-flex justify-content-center">
                <Link
                    to={{
                        pathname: "/shopping-store",
                        search: "?cat=all&search",
                    }}
                >
                    <img src={imageWelcome} alt="imageWelcome" />
                </Link>
            </div>
        );
    }
}
