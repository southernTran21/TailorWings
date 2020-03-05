import React, { Component } from "react";

import IconLineChart from "../../../assets/iconImage/line-chart.svg";
export default class SearchSuggest extends Component {
    render() {
        return (
            <div className="seachSuggest-wraper">
                <div className="contentHeader d-flex flex-column justify-content-around">
                    <span>
                        <img src={IconLineChart} />
                        Đặt may nhiều
                    </span>
                    <span>Đầm Suông Lucasta</span>
                    <span>Đầm Ôm Dona</span>
                    <span>Đầm Xòe Dilys</span>
                    <span>Đầm Suông Lucasta</span>
                    <span>Đầm Ôm Dona</span>
                </div>
                <div className="topListProduct">
                    <div className="title">
                        <span>Sản Phẩm Ưa Chuộng</span>
                    </div>
                </div>
            </div>
        );
    }
}
