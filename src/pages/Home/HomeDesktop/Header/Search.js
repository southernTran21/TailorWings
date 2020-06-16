import React, { Component } from "react";
import { Input } from "antd";
import { removePunctuation } from "../../../../services/CommonFunction";

const { Search } = Input;

export default class SearchInput extends Component {
    searchHandling = value => {
        if (value != null && value !== "") {
            value = value.toLowerCase();
            value = removePunctuation(value);
            value = value.replace(/ /gi, "-");
            this.props.history.push(`/shopping-store?cat=all&search=${value}`);
        }
    };

    render() {
        const { visibleProductsList, bestSellerInfo } = this.props;
        return (
            <div className="search_wrapper fontMontserrat">
                <Search
                    placeholder="Bạn tìm may gì?"
                    onSearch={value => this.searchHandling(value)}
                    style={{ width: "25vw" }}
                />
            </div>
        );
    }
}
