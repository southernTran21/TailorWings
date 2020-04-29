import React, { Component } from "react";
import ReactPixel from "react-facebook-pixel";
import LazyLoad from "react-lazy-load";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
// import image Home Page
import Image1 from "../../../../assets/imageHomePage/bannerHomePageMobile.png";

const image = {
    src: Image1,
    alt: "banner",
};
class BodyHeader extends Component {
    updatePixel = () => {
        ReactPixel.trackCustom("ShoppingStoreAccessWay", "BuyNow");
        console.log("updated to Pixel");
    };

    render() {
        return (
            // <LazyLoad
            //     height={'fit-content'}
            //     offset={0}
            //     throttle={250}
            // >
                <div className="header__bodyPage">
                    {/* <img src={Image1} /> */}
                    <LazyLoadImage
                        alt={image.alt}
                        effect="blur"
                        src={image.src}
                    />
                    <div className="textHeader">
                        <span>Tự do kết hợp VẢI & THIẾT KẾ</span>
                    </div>
                    <Link
                        to={{
                            pathname: "/shopping-store",
                            search: "?cat=all&search",
                        }}
                        onClick={this.updatePixel}
                    >
                        <button className="buttonHeder">
                            TRẢI NGHIỆM NGAY
                        </button>
                    </Link>
                </div>
            // </LazyLoad>
        );
    }
}

export default BodyHeader;
