import React, { Component } from "react";
import imageOrderConfirm from "../../../../assets/iconImage/fogg-delivery-1 1.svg";
import { Link } from "react-router-dom";

export default class OrderConfirm extends Component {
    render() {
        const name = "Nam";
        return (
            <div className="orderConfirmMobile_wrapper d-flex flex-column align-items-center">
                <div className="imageOrderConfirm">
                    <img src={imageOrderConfirm} alt="" />
                </div>
                <div className="iconChecked">
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25 0C20.0555 0 15.222 1.46622 11.1108 4.21326C6.99953 6.9603 3.79521 10.8648 1.90302 15.4329C0.0108321 20.0011 -0.484251 25.0277 0.480379 29.8773C1.44501 34.7268 3.82603 39.1814 7.32234 42.6777C10.8187 46.174 15.2732 48.555 20.1228 49.5196C24.9723 50.4843 29.9989 49.9892 34.5671 48.097C39.1353 46.2048 43.0397 43.0005 45.7867 38.8893C48.5338 34.778 50 29.9445 50 25C50 21.717 49.3534 18.4661 48.097 15.4329C46.8406 12.3998 44.9991 9.6438 42.6777 7.32233C40.3562 5.00087 37.6002 3.15938 34.5671 1.90301C31.534 0.646644 28.2831 0 25 0ZM35.75 19.025L24.325 34.025C24.0921 34.3275 23.793 34.5727 23.4507 34.7417C23.1083 34.9107 22.7318 34.9991 22.35 35C21.9703 35.002 21.5951 34.9176 21.2529 34.753C20.9107 34.5883 20.6104 34.3479 20.375 34.05L14.275 26.275C14.0731 26.0156 13.9243 25.719 13.837 25.4022C13.7497 25.0853 13.7257 24.7543 13.7663 24.4281C13.8069 24.102 13.9114 23.787 14.0737 23.5012C14.2361 23.2154 14.4532 22.9644 14.7125 22.7625C15.2363 22.3547 15.9006 22.1717 16.5594 22.2538C16.8855 22.2944 17.2005 22.3989 17.4863 22.5612C17.7721 22.7236 18.0231 22.9406 18.225 23.2L22.3 28.4L31.75 15.9C31.9503 15.6374 32.2003 15.4167 32.4858 15.2507C32.7714 15.0847 33.0868 14.9766 33.4141 14.9324C33.7415 14.8883 34.0743 14.9091 34.3936 14.9936C34.7128 15.0782 35.0124 15.2247 35.275 15.425C35.5377 15.6253 35.7583 15.8753 35.9243 16.1608C36.0903 16.4464 36.1985 16.7618 36.2426 17.0891C36.2867 17.4165 36.2659 17.7493 36.1814 18.0686C36.0969 18.3878 35.9503 18.6874 35.75 18.95V19.025Z"
                            fill="#FF6D3B"
                        />
                    </svg>
                </div>
                <div className="contentPage d-flex flex-column align-items-center">
                    <span className="titleHead">{`Cảm Ơn ${name} Đã Đặt May!`}</span>
                    <span className="titleSecond">
                        Đơn hàng của bạn đang được xử lý & giao tới bạn trong{" "}
                        <span className="underline">3-5 ngày làm việc.</span>
                    </span>
                    <a
                        href="https://www.facebook.com/TailorWings"
                        target="_blank"
                        className="giftButton d-flex justify-content-center align-items-center"
                        onClick={() =>
                            window.gtag_report_conversion(
                                `${window.location.origin}/shopping-store?cat=all&search`
                            )
                        }
                    >
                        BẤM VÀO ĐÂY NHẬN QUÀ BẤT NGỜ
                    </a>
                    <div
                        onClick={() =>
                            window.gtag_report_conversion(
                                `${window.location.origin}/shopping-store?cat=all&search`
                            )
                        }
                        style={{ cursor: "pointer" }}
                    >
                        <span className="titleThird d-flex align-items-center">
                            TIẾP TỤC ĐẶT MAY
                            <svg
                                width="7"
                                height="11"
                                viewBox="0 0 7 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.49994 11C1.36833 11.0008 1.23787 10.9755 1.11603 10.9258C0.994195 10.876 0.883379 10.8027 0.789939 10.71C0.696211 10.617 0.621816 10.5064 0.571048 10.3846C0.520279 10.2627 0.494141 10.132 0.494141 10C0.494141 9.86799 0.520279 9.73729 0.571048 9.61543C0.621816 9.49357 0.696211 9.38297 0.789939 9.29L4.09994 6.00001L0.919939 2.69C0.733688 2.50264 0.629147 2.24919 0.629147 1.98501C0.629147 1.72082 0.733688 1.46737 0.919939 1.28001C1.0129 1.18628 1.1235 1.11188 1.24536 1.06111C1.36722 1.01035 1.49793 0.984207 1.62994 0.984207C1.76195 0.984207 1.89266 1.01035 2.01452 1.06111C2.13638 1.11188 2.24698 1.18628 2.33994 1.28001L6.19994 5.28C6.38317 5.46693 6.4858 5.71825 6.4858 5.98C6.4858 6.24176 6.38317 6.49308 6.19994 6.68001L2.19994 10.68C2.11018 10.7769 2.00211 10.8551 1.88196 10.91C1.76181 10.965 1.63197 10.9955 1.49994 11Z"
                                    fill="#FF6D3B"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
