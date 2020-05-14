import React from "react";
import PropTypes from "prop-types";
import OrderItem from "./OrderItem";

OrderList.propTypes = {};

function OrderList(props) {
    return (
        <div className="admin-order-general__order-list">
            <div className="admin-order-general__order-list__title">
                <div className="admin-order-general__column1">
                    Order
                </div>
                <div className="admin-order-general__column2">
                    Date{" "}
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 13.3333C9.80532 13.3337 9.61662 13.2659 9.46669 13.1417L4.46669 8.97501C4.29651 8.83356 4.18949 8.6303 4.16918 8.40994C4.14886 8.18959 4.21691 7.97019 4.35836 7.80001C4.49981 7.62983 4.70307 7.52281 4.92342 7.50249C5.14378 7.48217 5.36318 7.55022 5.53336 7.69167L10 11.425L14.4667 7.82501C14.5519 7.75578 14.65 7.70409 14.7553 7.6729C14.8606 7.64171 14.971 7.63163 15.0802 7.64324C15.1894 7.65486 15.2952 7.68794 15.3916 7.74058C15.4879 7.79323 15.5729 7.8644 15.6417 7.95001C15.718 8.03569 15.7758 8.13621 15.8115 8.24527C15.8471 8.35434 15.8599 8.46959 15.8489 8.58381C15.838 8.69802 15.8036 8.80875 15.7478 8.90905C15.6921 9.00935 15.6162 9.09705 15.525 9.16667L10.525 13.1917C10.3708 13.2963 10.1859 13.3461 10 13.3333Z"
                            fill="#212B36"
                        />
                    </svg>
                </div>
                <div className="admin-order-general__column3">
                    Customer
                </div>
                <div className="admin-order-general__column4">
                    Status
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 13.3333C9.80532 13.3337 9.61662 13.2659 9.46669 13.1417L4.46669 8.97501C4.29651 8.83356 4.18949 8.6303 4.16918 8.40994C4.14886 8.18959 4.21691 7.97019 4.35836 7.80001C4.49981 7.62983 4.70307 7.52281 4.92342 7.50249C5.14378 7.48217 5.36318 7.55022 5.53336 7.69167L10 11.425L14.4667 7.82501C14.5519 7.75578 14.65 7.70409 14.7553 7.6729C14.8606 7.64171 14.971 7.63163 15.0802 7.64324C15.1894 7.65486 15.2952 7.68794 15.3916 7.74058C15.4879 7.79323 15.5729 7.8644 15.6417 7.95001C15.718 8.03569 15.7758 8.13621 15.8115 8.24527C15.8471 8.35434 15.8599 8.46959 15.8489 8.58381C15.838 8.69802 15.8036 8.80875 15.7478 8.90905C15.6921 9.00935 15.6162 9.09705 15.525 9.16667L10.525 13.1917C10.3708 13.2963 10.1859 13.3461 10 13.3333Z"
                            fill="#212B36"
                        />
                    </svg>
                </div>
                <div className="admin-order-general__column5">
                    Payment
                </div>
                <div className="admin-order-general__column6">
                    Total
                </div>
            </div>
            <OrderItem />
        </div>
    );
}

export default OrderList;
