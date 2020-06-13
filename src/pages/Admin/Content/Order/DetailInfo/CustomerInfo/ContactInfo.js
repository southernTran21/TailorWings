import PropTypes from "prop-types";
import React from "react";
import { modifyPhone } from "../../../../../../services/CommonFunction";
import { useSelector } from "react-redux";

ContactInfo.propTypes = {
    currentCustomerInfo: PropTypes.object,
};

ContactInfo.defaultProps = {
    currentCustomerInfo: null,
};

function ContactInfo(props) {
    const { cusName, phone, email } = props.currentCustomerInfo;
    const orderDetail = useSelector(
        (state) => state.adminOrderReducer.orderDetail
    );
    const { orderItems } = orderDetail;

    if (!props.currentCustomerInfo || !orderItems)
        return (
            <div className="admin-order-detail__customer-info__contact-info d-flex flex-column"></div>
        );
        
    let modifiedPhone = modifyPhone(phone);
    return (
        <div className="admin-order-detail__customer-info__contact-info d-flex flex-column">
            <div className="admin-order-detail__customer-info__contact-info--b1 d-flex justify-content-between align-items-end">
                <span className="admin-order-detail__customer-info__contact-info--text1">
                    {cusName}
                </span>
                <span className="admin-order-detail__customer-info__contact-info--text2">
                    {`${orderItems.length} orders`}
                </span>
            </div>
            <div className="admin-order-detail__customer-info__contact-info--b2 d-flex justify-content-between">
                <span className="admin-order-detail__customer-info__contact-info--text3">
                    CONTACT INFOMATION
                </span>
                <span className="admin-order-detail__customer-info__contact-info--text4">
                    Edit
                </span>
            </div>
            <span className="admin-order-detail__customer-info__contact-info--text5">
                {email}
            </span>
            <span className="admin-order-detail__customer-info__contact-info--text6">
                {modifiedPhone}
            </span>
        </div>
    );
}

export default ContactInfo;
