import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import iconIG from "../../.../../../../assets/imageHomePage/instagram.svg";
import IG1 from "../../../../assets/imageHomePage/IG1.jpg";
import IG2 from "../../../../assets/imageHomePage/IG2.jpg";
import IG3 from "../../../../assets/imageHomePage/IG3.jpg";
import IG4 from "../../../../assets/imageHomePage/IG4.jpg";

export default class Instagram extends Component {
    render() {
        return (
            <div className="instagram fontMontserrat">
                <div className="title d-flex flex-row align-items-center justify-content-center">
                    <img src={iconIG} alt="instagram" />
                    <span>Instagram</span>
                </div>
                <div className="crouselImage d-flex justify-content-between">
                    <a
                        className="image"
                        href="https://www.instagram.com/tailorwings/"
                        target="_blank"
                    >
                        {/* <img src={IG1} alt="instagram-tailorwings" /> */}
                        <LazyLoadImage
                            alt="instagram-tailorwings"
                            effect="blur"
                            src={IG1}
                        />
                    </a>
                    <a
                        className="image"
                        href="https://www.instagram.com/tailorwings/"
                        target="_blank"
                    >
                        {/* <img src={IG2} alt="instagram-tailorwings" /> */}
                        <LazyLoadImage
                            alt="instagram-tailorwings"
                            effect="blur"
                            src={IG2}
                        />
                    </a>
                    <a
                        className="image"
                        href="https://www.instagram.com/tailorwings/"
                        target="_blank"
                    >
                        {/* <img src={IG3} alt="instagram-tailorwings" /> */}
                        <LazyLoadImage
                            alt="instagram-tailorwings"
                            effect="blur"
                            src={IG3}
                        />
                    </a>
                    <a
                        className="image"
                        href="https://www.instagram.com/tailorwings/"
                        target="_blank"
                    >
                        {/* <img src={IG4} alt="instagram-tailorwings" /> */}
                        <LazyLoadImage
                            alt="instagram-tailorwings"
                            effect="blur"
                            src={IG4}
                        />
                    </a>
                </div>
            </div>
        );
    }
}
