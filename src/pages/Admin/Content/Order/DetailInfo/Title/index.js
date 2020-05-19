import React from "react";
import { useSelector } from "react-redux";
import OrderStatus from "../../../../../../components/Admin/AdminOrder/OrderStatus";
import { Link } from "react-router-dom";

function Title() {
    const orderDetail = useSelector(
        (state) => state.adminOrderReducer.orderDetail
    );

    const { orderID, orderDate, status } = orderDetail;

    if (!orderID && !orderDate && !status)
        return (
            <div className="admin-order-detail__title">
                <div className="admin-order-detail__title__head d-flex align-items-center">
                    <Link
                        to="/admin/order"
                        style={{ color: "black", textDecoration: "none" }}
                    >
                        <svg
                            width="1.52vw"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="admin-order-detail__title__head--icon"
                        >
                            <path
                                d="M12.4116 16.5C11.9778 16.5005 11.5569 16.3516 11.22 16.0783L6.54496 12.2191C6.36163 12.0732 6.21358 11.8878 6.11182 11.6767C6.01006 11.4656 5.95721 11.2343 5.95721 11C5.95721 10.7656 6.01006 10.5343 6.11182 10.3232C6.21358 10.1122 6.36163 9.92675 6.54496 9.78081L11.22 5.92164C11.5014 5.69613 11.8405 5.55423 12.1987 5.51209C12.5569 5.46995 12.9197 5.52928 13.2458 5.68331C13.5292 5.80823 13.7707 6.01209 13.9413 6.27054C14.112 6.52899 14.2047 6.83111 14.2083 7.14081V14.8591C14.2047 15.1688 14.112 15.471 13.9413 15.7294C13.7707 15.9879 13.5292 16.1917 13.2458 16.3166C12.9838 16.4358 12.6995 16.4983 12.4116 16.5Z"
                                fill="#212B36"
                            />
                        </svg>
                        <span className="admin-order-detail__title__head--content">
                            Orders
                        </span>
                    </Link>
                </div>
                <div className="admin-order-detail__title__body d-flex flex-column"></div>
            </div>
        );
    return (
        <div className="admin-order-detail__title">
            <div className="admin-order-detail__title__head d-flex align-items-center">
                <Link
                    to="/admin/order"
                    style={{ color: "black", textDecoration: "none" }}
                >
                    <svg
                        width="1.52vw"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="admin-order-detail__title__head--icon"
                    >
                        <path
                            d="M12.4116 16.5C11.9778 16.5005 11.5569 16.3516 11.22 16.0783L6.54496 12.2191C6.36163 12.0732 6.21358 11.8878 6.11182 11.6767C6.01006 11.4656 5.95721 11.2343 5.95721 11C5.95721 10.7656 6.01006 10.5343 6.11182 10.3232C6.21358 10.1122 6.36163 9.92675 6.54496 9.78081L11.22 5.92164C11.5014 5.69613 11.8405 5.55423 12.1987 5.51209C12.5569 5.46995 12.9197 5.52928 13.2458 5.68331C13.5292 5.80823 13.7707 6.01209 13.9413 6.27054C14.112 6.52899 14.2047 6.83111 14.2083 7.14081V14.8591C14.2047 15.1688 14.112 15.471 13.9413 15.7294C13.7707 15.9879 13.5292 16.1917 13.2458 16.3166C12.9838 16.4358 12.6995 16.4983 12.4116 16.5Z"
                            fill="#212B36"
                        />
                    </svg>
                    <span className="admin-order-detail__title__head--content">
                        Orders
                    </span>
                </Link>
            </div>
            <div className="admin-order-detail__title__body d-flex flex-column">
                <div className="admin-order-detail__title__body__top">
                    <span className="admin-order-detail__title__body__top--title1">
                        {`#${orderID || ""}`}
                    </span>
                    <span className="admin-order-detail__title__body__top--title2">
                        {orderDate || ""}
                    </span>
                </div>
                <div className="admin-order-detail__title__body__bot d-flex justify-content-between">
                    <div className="d-flex">
                        <div className="admin-order-detail__title__body__bot__print d-flex align-items-center">
                            <svg
                                width="1.66vw"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.36 7H18V5C18.0217 4.49233 17.8413 3.99675 17.4983 3.62186C17.1553 3.24698 16.6776 3.02335 16.17 3H7.83002C7.32242 3.02335 6.84478 3.24698 6.50175 3.62186C6.15873 3.99675 5.97831 4.49233 6.00002 5V7H4.64002C3.93628 7.00529 3.26331 7.28924 2.7685 7.78968C2.27369 8.29011 1.99735 8.96625 2.00002 9.67V16.33C1.99735 17.0338 2.27369 17.7099 2.7685 18.2103C3.26331 18.7108 3.93628 18.9947 4.64002 19H5.50002C5.50002 19.5304 5.71073 20.0391 6.08581 20.4142C6.46088 20.7893 6.96959 21 7.50002 21H16.5C17.0305 21 17.5392 20.7893 17.9142 20.4142C18.2893 20.0391 18.5 19.5304 18.5 19H19.36C20.0638 18.9947 20.7367 18.7108 21.2315 18.2103C21.7264 17.7099 22.0027 17.0338 22 16.33V9.67C22.0027 8.96625 21.7264 8.29011 21.2315 7.78968C20.7367 7.28924 20.0638 7.00529 19.36 7ZM8.00002 5H16V7H8.00002V5ZM7.50002 19V15H16.5V19H7.50002Z"
                                    fill="#212B36"
                                />
                            </svg>
                            <span className="admin-order-detail__title__body__bot__print--content font-weight-bold">
                                Print
                            </span>
                        </div>
                        <div className="admin-order-detail__title__body__bot__edit d-flex align-items-center">
                            <svg
                                width="1.66vw"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.4 7.33998L16.66 4.59998C16.3024 4.26408 15.8338 4.07134 15.3433 4.05843C14.8529 4.04553 14.3748 4.21335 14 4.52998L4.99999 13.53C4.67676 13.8559 4.4755 14.2832 4.42999 14.74L3.99999 18.91C3.98652 19.0564 4.00553 19.2041 4.05565 19.3424C4.10578 19.4806 4.18579 19.6062 4.28999 19.71C4.38343 19.8027 4.49425 19.876 4.61609 19.9258C4.73792 19.9755 4.86838 20.0007 4.99999 20H5.08999L9.25999 19.62C9.71679 19.5745 10.144 19.3732 10.47 19.05L19.47 10.05C19.8193 9.68095 20.0081 9.18849 19.995 8.68052C19.9818 8.17254 19.7679 7.69049 19.4 7.33998ZM16 10.68L13.32 7.99998L15.27 5.99998L18 8.72998L16 10.68Z"
                                    fill="#212B36"
                                />
                            </svg>
                            <span className="admin-order-detail__title__body__bot__edit--content font-weight-bold">
                                Edit
                            </span>
                        </div>
                    </div>
                    <OrderStatus
                        orderID={orderID}
                        status={status}
                        className="admin-order-detail__title__body__bot__select"
                    />
                </div>
            </div>
        </div>
    );
}

export default Title;
