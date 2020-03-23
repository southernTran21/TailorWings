import React, { Component } from "react";
import "./Filter.scss";
import {Checkbox} from 'antd'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter_wrapper">
                <div className="collection">
                    <span>BỘ SƯU TẬP</span>
                    <div className="subTitle d-flex flex-column">
                        <Checkbox>Đầm Dự Tiệc (54)</Checkbox>
                        <Checkbox>Đầm Dạo Phố (23)</Checkbox>
                        <Checkbox>Đầm Công Sở (49)</Checkbox>
                    </div>
                </div>
                <div className="viewPriority">
                    <span>ƯU TIÊN XEM</span>
                    <div className="subTitle d-flex flex-column">
                        <Checkbox>Hàng Mới</Checkbox>
                        <Checkbox>Bán Chạy</Checkbox>
                        <Checkbox>Giảm Giá Nhiều</Checkbox>
                    </div>
                </div>
            </div>
        );
    }
}
