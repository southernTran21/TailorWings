import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Image from "../../../../assets/imageHomePage/imageWeYour.png";

class AboutTailorWings extends Component {
    render() {
        return (
            <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                <div className="weYour-wraper d-flex flex-column justify-content-around">
                    <div className="title__weyour d-flex flex-column justify-content-center align-items-center">
                        <span className="title1">We Tailor Your Wings</span>
                        <span className="text-center title2">
                            “Qua năm tháng, tôi thấu hiểu rằng điều quan trọng
                            của một bộ váy nằm ở chính người phụ nữ sẽ mặc nó” -
                            YSL
                        </span>
                    </div>
                    <div className="image-wraper">
                        <LazyLoadImage
                            alt={"we-tailor-your-wings"}
                            effect="blur"
                            src={Image}
                        />
                    </div>
                </div>
            </LazyLoad>
        );
    }
}

export default AboutTailorWings;
