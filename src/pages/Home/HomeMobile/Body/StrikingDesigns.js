import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
import CarouselStrikingDesign from "./CarouselStrikingDesign";

class StrikingDesigns extends Component {
    render() {
        return (
            // <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                <div className="strikingDesign-wraper">
                    <div className="title d-flex flex-column">
                        <span>Thiết Kế Nổi Bật</span>
                        <span>Bắt kịp xu hướng ngay hôm nay!</span>
                    </div>
                    <CarouselStrikingDesign
                        bestSellerInfo={this.props.bestSellerInfo}
                    />
                </div>
            // </LazyLoad>
        );
    }
}

export default StrikingDesigns;
