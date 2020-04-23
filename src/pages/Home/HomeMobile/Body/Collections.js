import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
import CarouselCollection from "./CarouselCollection";

class Collections extends Component {
    render() {
        return (
            <LazyLoad height={"fit-content"} offset={0} throttle={250}>
                <div className="collection-wraper d-flex flex-column justify-content-around">
                    <div className="title__collection d-flex flex-column">
                        <span>Bộ Sưu Tập</span>
                        <span>900+ sản phẩm cho bạn lựa chọn...</span>
                    </div>
                    <CarouselCollection
                        collectionsInfo={this.props.collectionsInfo}
                    />
                    <hr />
                </div>
            </LazyLoad>
        );
    }
}

export default Collections;
