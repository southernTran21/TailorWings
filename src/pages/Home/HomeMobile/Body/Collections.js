import React, { Component } from "react";
import CarouselCollection from "./CarouselCollection";
import { Skeleton } from "antd";

class Collections extends Component {
    render() {
        const {collections} = this.props;
        if (collections.length === 0) return <Skeleton active />;
        return (
            <div className="collection-wraper d-flex flex-column justify-content-around">
                <div className="title__collection d-flex flex-column">
                    <span>Bộ Sưu Tập</span>
                    <span>900+ sản phẩm cho bạn lựa chọn...</span>
                </div>
                <CarouselCollection
                    collections={collections}
                />
                <hr />
            </div>
        );
    }
}

export default Collections;
