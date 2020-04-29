import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import imagePassion from "../../../../assets/imageHomePage/imagePassion.svg";

class Passion extends Component {
    render() {
        return (
            // <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                <div className="passion">
                    <div className="titleHeader d-flex flex-column justify-content-center align-items-center">
                        <span>Passion Led Us Here</span>
                        <span>
                            Quần áo bạn mặc là do bàn tay của người thợ may tạo
                            ra. Tailor Wings mong muốn đem giá trị về đúng người
                            đã tạo ra nó. Hãy cùng Tailor Wings chắp cho những
                            đôi cánh chưa từng được bay lên - những người thợ
                            may tận tụy.
                        </span>
                    </div>
                    <div className="video">
                        <LazyLoadImage
                            alt={"tailor-wings-passion"}
                            effect="blur"
                            src={imagePassion}
                        />
                    </div>
                    <hr />
                </div>
            // </LazyLoad>
        );
    }
}

export default Passion;
