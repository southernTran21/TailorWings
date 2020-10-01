import React from "react";
import PropTypes from "prop-types";
import IconSearch from "../../../../assets/Icon/icon-search.svg";
import IconUpload from "../../../../assets/Icon/icon-upload.svg";

AdminDataUpload.propTypes = {};

function AdminDataUpload(props) {
    return (
        <div className="c-admin-data-upload">
            <div className="c-admin-data-upload__header">
                <div className="c-admin-data-upload--left">
                    <div className="c-admin-data-upload__search-box">
                        <img
                            src={IconSearch}
                            alt=""
                            className="c-admin-data-upload__icon-search"
                        />
                        <input
                            type="text"
                            placeholder="Bạn cần tìm gì?"
                            className="c-admin-data-upload__input-search"
                        />
                    </div>
                    <div className="c-admin-data-upload__button-upload">
                        <span>Tải lên *. </span>
                        <img src={IconUpload} alt="" />
                    </div>
                </div>
                <span className="c-admin-data-upload__button-confirm">
                    Confirm
                </span>
            </div>
            <div className="c-admin-data-upload__table-wrapper">
                <div className="c-admin-data-upload__head-table">
                    <span className="c-admin-data-upload__col">
                        Mã đơn hàng
                    </span>
                    <span className="c-admin-data-upload__col">Ngày nhận</span>
                    <span className="c-admin-data-upload__col">Khách hàng</span>
                    <span className="c-admin-data-upload__col">Tình trạng</span>
                    <span className="c-admin-data-upload__col">Thanh toán</span>
                    <span className="c-admin-data-upload__col">Tổng tiền</span>
                    <span className="c-admin-data-upload__col">
                        Mô tả chi tiết
                    </span>
                    <span className="c-admin-data-upload__col">
                        Mô tả chi tiết
                    </span>
                    <span className="c-admin-data-upload__col">
                        Mô tả chi tiết
                    </span>
                    <span className="c-admin-data-upload__col">
                        Mô tả chi tiết
                    </span>
                    <span className="c-admin-data-upload__col">
                        Mô tả chi tiết
                    </span>
                    <span className="c-admin-data-upload__col">
                        Mô tả chi tiết
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AdminDataUpload;
