import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

AddressPayment.propTypes = {
    shippingInfo: PropTypes.object,
};

AddressPayment.defaultProps = {
    shippingInfo: null,
};

function AddressPayment(props) {
    /*--------------*/
    const infoRender = () => {
        if (props.shippingInfo) {
            const { name, phone, address, note } = props.shippingInfo;
            return (
                <div className="c-payment-address--wrapper">
                    <span className="c-payment-address__name">
                        {name.value} - {phone.value}
                    </span>
                    <span className="c-payment-address__address">
                        {address.value}
                    </span>
                    {note.value !== "" && <span>Ghi chú: {note.value}</span>}
                </div>
            );
        } else {
            return <div className="c-payment-address--wrapper"></div>;
        }
    };
    /*--------------*/
    return (
        <div className="c-payment-address">
            <div className="c-payment-address__head">
                <span className="c-payment-address__title">
                    Địa chỉ nhận hàng
                </span>
                <Link to="/info">
                    <span className="c-payment-address__sub-title">
                        THAY ĐỔI
                    </span>
                </Link>
            </div>
            {infoRender()}
        </div>
    );
}

export default AddressPayment;
