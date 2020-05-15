import React from "react";
import PropTypes from "prop-types";

OrderItem.propTypes = {
    order: PropTypes.object,
};

OrderItem.defaultProps = {
    order: null,
};

function OrderItem(props) {
    let order = props.order;
    if (!order) return null;
    return (
        <div className="admin-order-general__order-item">
            <div className="admin-order-general__column1"><a href="#">#k8pk4lz9</a></div>
            <div className="admin-order-general__column2"><span>07/05/2020</span></div>
            <div className="admin-order-general__column3">Dương Đinh Đông Đông</div>
            <div className="admin-order-general__column4"><span>New</span></div>
            <div className="admin-order-general__column5"><span>Paid</span></div>
            <div className="admin-order-general__column6"><span>1.653.000đ</span></div>
        </div>
    );
}

export default OrderItem;
