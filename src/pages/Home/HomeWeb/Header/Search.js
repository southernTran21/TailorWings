import React, { Component } from "react";
import { Input } from "antd";

const { Search } = Input;

export default class SearchInput extends Component {
    render() {
        const {visibleProductsList, bestSellerInfo} = this.props
        return (
            <div className="search_wrapper fontMontserrat">
                <Search
                    placeholder="Bạn tìm may gì?"
                    onSearch={value => console.log(value)}
                    style={{ width: "25vw" }}
                />
            </div>
        );
    }
}
