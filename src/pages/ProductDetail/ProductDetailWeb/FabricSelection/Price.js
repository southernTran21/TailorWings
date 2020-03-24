import React, { Component } from "react";

export default class Price extends Component {
    render() {
        return (
            <div className="price d-flex flex-column justify-content-end">
                <span>950,000 VNĐ</span>
                <span>Đầm Suông Lucasta</span>
                <span className="button">CHỌN SIZE</span>
            </div>
        );
    }
}
