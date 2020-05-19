import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import OrderStatus from "../../../../../../components/Admin/AdminOrder/OrderStatus";
import { modifyPrice } from "../../../../../../services/CommonFunction";

OrderItem.propTypes = {
    order: PropTypes.object,
};

OrderItem.defaultProps = {
    order: null,
};

function OrderItem(props) {
    const match = useRouteMatch();

    const { orderID, orderDate, cusName, status, isPaid, total } = props.order;

    const [modifiedPrice, setModifiedPrice] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("Unpaid");
    const [paymentStatusColor, setPaymentStatusColor] = useState("#FC4856");

    useEffect(() => {
        /* modify price */
        setModifiedPrice(modifyPrice(total));
        /* set payment status and color */
        if (isPaid) {
            setPaymentStatus("Paid");
            setPaymentStatusColor("#77C44C");
        }
    }, [props.order]);

    if (!props.order) return null;
    return (
        <div className="admin-order-general__order-item">
            <div className="admin-order-general__column1">
                <Link
                    to={{
                        pathname: `${match.url}/${orderID}`,
                    }}
                    className="admin-order-general__order-item__id-order"
                >
                    {`#${orderID}`}
                </Link>
            </div>
            <div className="admin-order-general__column2">
                <span>{orderDate}</span>
            </div>
            <div className="admin-order-general__column3">
                <span>{cusName}</span>
            </div>
            <div className="admin-order-general__column4">
                <OrderStatus
                    orderID={orderID}
                    status={status}
                    className="admin-order-general__order-item__select"
                />
                <span></span>
            </div>
            <div
                className="admin-order-general__column5"
                style={{
                    color: paymentStatusColor,
                }}
            >
                <span>{paymentStatus}</span>
            </div>
            <div className="admin-order-general__column6">
                <span>{modifiedPrice}</span>
            </div>
        </div>
    );
}

export default OrderItem;
