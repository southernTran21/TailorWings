import { Icon } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Confirm.scss";


export default class ChangeSize extends Component {
    render() {
        const { url, urlSearch } = this.props;
        return (
            <div className="changeSize d-flex flex-row align-items-center justify-content-center">
                <Link
                    className="link"
                    to={{ pathname: `${url}`, search: `${urlSearch}` }}
                    onClick={() => this.props.confirmNavigating(false)}
                >
                    <Icon type="left" />
                    <span>THAY ĐỔI SIZE</span>
                </Link>
            </div>
        );
    }
}
