import React, { Component } from "react";
import "./Confirm.scss";

import { Icon, Input } from "antd";

export default class ChangeSize extends Component {
    onSizeShowing = () => {
        const { currentSelectedProduct } = this.props;
        let content = "";
        let isSizeSelected = currentSelectedProduct.size != null;
        let isAllMetricFill = !currentSelectedProduct.bodyMetric.includes("");
        let size = currentSelectedProduct.size;
        let metric = currentSelectedProduct.bodyMetric.join("-");
        if (isSizeSelected && isAllMetricFill) {
            content = `Số đo ( ${size} , ${metric} )`;
        } else if (isSizeSelected) {
            content = `Size ( ${size} )`;
        } else if (isAllMetricFill) {
            content = `Số đo ( ${metric} )`;
        } else {
            content = `Số đo ( Chưa Chọn )`;
        }
        return <span>{content}</span>;
    };

    render() {
        return (
            <div className="changeSize d-flex flex-row align-items-center justify-content-center">
                {/* {this.onSizeShowing()} */}
                <Icon type="left" />
                <a onClick={() => this.props.onContentChange("size")}>
                    <span>THAY ĐỔI SIZE</span>
                </a>
            </div>
        );
    }
}
