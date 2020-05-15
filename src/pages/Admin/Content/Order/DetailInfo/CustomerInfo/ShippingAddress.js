import React from "react";
import PropTypes from "prop-types";

ShippingAddress.propTypes = {};

function ShippingAddress(props) {
    return (
        <div className="admin-order-detail__customer-info__shipping-address">
            <div className="d-flex justify-content-between">
                <span className="admin-order-detail__customer-info__shipping-address--text1">
                    SHIPPING ADDRESS
                </span>
                <span className="admin-order-detail__customer-info__shipping-address--text2">
                    Edit
                </span>
            </div>
            <span className='admin-order-detail__customer-info__shipping-address--text3'>
                Dương Đinh Đông Khoa <br/> số 6 đường số 4, khu Hà Đô Centrosa, phường
                12, quận 10,<br/> HCMC Hochiminh 72510 <br/>Vietnam<br/> +84 90 683 06 79
            </span>
        </div>
    );
}

export default ShippingAddress;
