import React, { Component } from "react";
import CarouselStrikingDesign from "./CarouselStrikingDesign";

class StrikingDesigns extends Component {
    render() {
        return (
            <div className="strikingDesign-wraper">
                <div className="title d-flex flex-column">
                    <span>Thiết Kế Nổi Bật</span>
                    <span>Bắt kịp xu hướng ngay hôm nay!</span>
                </div>
                <CarouselStrikingDesign
                    bestSellerInfo={this.props.bestSellerInfo}
                />
            </div>
        );
    }
}

export default StrikingDesigns;
