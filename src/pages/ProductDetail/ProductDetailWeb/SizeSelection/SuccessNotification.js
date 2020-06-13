import React, { Component } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export default class SuccessNotification extends Component {
    render() {
        const { isSuccess } = this.props;

        return (
            <div
                className={classNames("success_wrapper", {
                    success_show: isSuccess,
                })}
            >
                <span className="left">
                    Đặt may thành công. Vui lòng kiểm tra giỏ hàng.
                </span>
                <div
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                        window.gtag_report_conversion(
                            `${window.location.origin}/shopping-cart`
                        )
                    }
                >
                    <span className="right">
                        XEM GIỎ HÀNG
                        <svg
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.375 18.4167C11.2324 18.4175 11.0911 18.3902 10.9591 18.3363C10.8271 18.2823 10.7071 18.2029 10.6058 18.1025C10.5043 18.0018 10.4237 17.882 10.3687 17.75C10.3137 17.6179 10.2854 17.4764 10.2854 17.3333C10.2854 17.1903 10.3137 17.0487 10.3687 16.9167C10.4237 16.7847 10.5043 16.6649 10.6058 16.5642L14.1917 13L10.7467 9.41417C10.5449 9.21119 10.4317 8.93662 10.4317 8.65042C10.4317 8.36422 10.5449 8.08965 10.7467 7.88667C10.8474 7.78513 10.9672 7.70454 11.0992 7.64954C11.2312 7.59454 11.3728 7.56622 11.5158 7.56622C11.6589 7.56622 11.8005 7.59454 11.9325 7.64954C12.0645 7.70454 12.1843 7.78513 12.285 7.88667L16.4667 12.22C16.6652 12.4225 16.7764 12.6948 16.7764 12.9783C16.7764 13.2619 16.6652 13.5342 16.4667 13.7367L12.1333 18.07C12.0361 18.175 11.919 18.2597 11.7889 18.3192C11.6587 18.3787 11.518 18.4118 11.375 18.4167Z"
                                fill="white"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        );
    }
}
