import React, { Component } from "react";
import CarouselStrikingDesign from "./CarouselStrikingDesign";

class StrikingDesigns extends Component {
    render() {
        return (
            <div className="strikingDesign-wraper">
                <div className="title d-flex flex-column">
                    <span>Thiết Kế Nổi Bật</span>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean in nisl in ex varius luctus.
                    </span>
                </div>
                <CarouselStrikingDesign
                    bestSellerInfo={this.props.bestSellerInfo}
                />
            </div>
        );
    }
}

export default StrikingDesigns;
