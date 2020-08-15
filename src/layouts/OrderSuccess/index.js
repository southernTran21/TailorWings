import React from "react";
import PropTypes from "prop-types";
import NavBarOrderSuccessContainer from "./Navbar";
import ImageOrderSuccess from "../../assets/Image/order-success.svg";
import IconCheck from "../../assets/Icon/check-circle.svg";
import ButtonCTA from "components/Button/CTA";

OrderSuccessContainer.propTypes = {};

function OrderSuccessContainer(props) {
    return (
        <div className="l-order-success">
            <NavBarOrderSuccessContainer />
            <section className="l-order-success__image">
                <img src={ImageOrderSuccess} alt="" />
            </section>
            <section className="l-order-success__check">
                <img src={IconCheck} alt="" />
            </section>
            <section className="l-order-success__content">
                <span>Cảm Ơn Bạn Đã Đặt May!</span>
                <p>
                    Đơn hàng của bạn đang được xử lý & giao tới bạn trong 3-5
                    ngày làm việc.
                </p>
            </section>
            <section className="l-order-success__button">
                <ButtonCTA text="BẤM VÀO ĐÂY NHẬN QUÀ BẤT NGỜ" />
            </section>
            <section className="l-order-success__continued">
                <span>TIẾP TỤC ĐẶT MAY</span>
                <svg
                    width="2.4rem"
                    height="2.4rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.4999 17C10.3683 17.0008 10.2379 16.9755 10.116 16.9258C9.9942 16.876 9.88338 16.8027 9.78994 16.71C9.69621 16.617 9.62182 16.5064 9.57105 16.3846C9.52028 16.2627 9.49414 16.132 9.49414 16C9.49414 15.868 9.52028 15.7373 9.57105 15.6154C9.62182 15.4936 9.69621 15.383 9.78994 15.29L13.0999 12L9.91994 8.68999C9.73369 8.50263 9.62915 8.24918 9.62915 7.98499C9.62915 7.7208 9.73369 7.46735 9.91994 7.27999C10.0129 7.18626 10.1235 7.11187 10.2454 7.0611C10.3672 7.01033 10.4979 6.98419 10.6299 6.98419C10.762 6.98419 10.8927 7.01033 11.0145 7.0611C11.1364 7.11187 11.247 7.18626 11.3399 7.27999L15.1999 11.28C15.3832 11.4669 15.4858 11.7182 15.4858 11.98C15.4858 12.2417 15.3832 12.4931 15.1999 12.68L11.1999 16.68C11.1102 16.7769 11.0021 16.8551 10.882 16.91C10.7618 16.965 10.632 16.9955 10.4999 17Z"
                        fill="#FF6D3B"
                    />
                </svg>
            </section>
        </div>
    );
}

export default OrderSuccessContainer;
