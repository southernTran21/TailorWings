import React, { Component } from "react";
import { Link } from "react-router-dom";
import imageWelcome from "../../.../../../../assets/imageHomePage/Hero Banner.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
                    {/* <img src={imageWelcome} alt="imageWelcome" /> */}
                    <LazyLoadImage
                        alt='imageWelcome'
                        effect="blur"
                        src={imageWelcome}
                    />
                </Link>
            </div>
        );
    }
}
