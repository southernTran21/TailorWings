import React, { Component } from "react";
import "./Content.scss";
import { Select } from "antd";

const { Option } = Select;
const tmp = new Array(20).fill("1");

export default class ProductList extends Component {
    render() {
        return (
            <div className="content_wrapper">
                <div className="headerContent d-flex justify-content-between align-items-center">
                    <div className="titleHeader">
                        <span>
                            Hiển thị kết quả tìm kiếm: <span>58 kết quả</span>{" "}
                        </span>
                    </div>
                    <div className="selection">
                        <Select
                            placeholder="Thứ tự mặc định"
                            style={{ width: "100%" }}
                        >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                        </Select>
                    </div>
                </div>
                <div className="productList_wrapper">
                    {tmp.map(index => {
                        return(
                            <div className="contentProduct col-4 d-flex flex-column align-items-center" key={index}>
                                <div className="image"></div>
                                <span>Đầm Suông Lucasta</span>
                                <div className="button">32 MẪU VẢI</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
