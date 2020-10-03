import React from "react";
import PropTypes from "prop-types";
import IconSearch from "../../../../assets/Icon/icon-search.svg";
import { Link } from "react-router-dom";

AdminOrderManagement.propTypes = {};

function AdminOrderManagement(props) {
    const test = new Array(10).fill(0);
    return (
        <div className="c-admin-order-management">
            <div className="c-admin-order-management__header">
                <span className="c-admin-order-management__title">
                    Đơn hàng (18)
                </span>
                <div className="c-admin-order-management__search-box">
                    <img
                        src={IconSearch}
                        alt=""
                        className="c-admin-order-management__icon-search"
                    />
                    <input
                        type="text"
                        placeholder="Bạn cần tìm gì?"
                        className="c-admin-order-management__input-search"
                    />
                </div>
            </div>
            <div className="c-admin-order-management__head-table">
                <span className="c-admin-order-management__col">
                    Mã đơn hàng
                </span>
                <span className="c-admin-order-management__col">Ngày nhận</span>
                <span className="c-admin-order-management__col">
                    Khách hàng
                </span>
                <span className="c-admin-order-management__col">
                    Tình trạng
                </span>
                <span className="c-admin-order-management__col">
                    Thanh toán
                </span>
                <span className="c-admin-order-management__col">Tổng tiền</span>
            </div>
            <div className="c-admin-order-management__body-table--wrapper">
                {test.map((result, index) => {
                    const link = `/admin/order-detail/abc`
                    return (
                        <Link to={link}>
                            <div
                                className="c-admin-order-management__body-table"
                                key={index}
                            >
                                <span className="c-admin-order-management__col c-admin-order-management__col-1">
                                    #k8pk4lz9
                                </span>
                                <span className="c-admin-order-management__col">
                                    07/05/2020
                                </span>
                                <span className="c-admin-order-management__col">
                                    Dương Đinh Đông Khoa
                                </span>
                                <span className="c-admin-order-management__col c-admin-order-management__col-2">
                                    Mới
                                </span>
                                <span className="c-admin-order-management__col c-admin-order-management__col-3">
                                    PAID
                                </span>
                                <span className="c-admin-order-management__col c-admin-order-management__col-4">
                                    1.653.000đ
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default AdminOrderManagement;
