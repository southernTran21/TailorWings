import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";

export default class PageHeader extends Component {
    onBackLink = () => {
        let backButton = "";
        switch (this.props.paymentStep) {
            case "shoppingCart":
                backButton = (
                    <Link
                        to={{
                            pathname: "/shopping-store",
                            search: "?cat=all&search="
                        }}
                        style={{
                            border: "none",
                            textDecoration: "none",
                            width: "fit-content",
                            height: "fit-content"
                        }}
                    >
                        <div className="iconBack ">
                            <Icon type="left" />
                        </div>
                    </Link>
                );
                break;
            case "customerInfo":
                backButton = (
                    <div
                        className="iconBack"
                        onClick={() => this.props.onStepChange("shoppingCart")}
                    >
                        <Icon type="left" />
                    </div>
                );
                break;
            case "paymentConfirm":
                backButton = (
                    <div
                        className="iconBack"
                        onClick={() => this.props.onStepChange("customerInfo")}
                    >
                        <Icon type="left" />
                    </div>
                );
                break;
            default:
                break;
        }
        return backButton;
    };

    render() {
        return (
            <div className="navbarHeader d-flex flex-row justify-content-between align-items-center">
                {this.onBackLink()}
                <div className="titleHeader d-flex justify-content-center">
                    <span d-flex justify-content-center>{this.props.title}</span>
                </div>
                <div className="divClone"></div>
            </div>
        );
    }
}
