import React from "react";
import PropTypes from "prop-types";

ContactInfo.propTypes = {};

function ContactInfo(props) {
    return (
        <div className="admin-order-detail__customer-info__contact-info d-flex flex-column">
            <div className="admin-order-detail__customer-info__contact-info--b1 d-flex justify-content-between align-items-end">
                <span className="admin-order-detail__customer-info__contact-info--text1">
                    Dương Đinh Đông Khoa
                </span>
                <span className="admin-order-detail__customer-info__contact-info--text2">
                    2 orders
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
            <span className='admin-order-detail__customer-info__contact-info--text5'>khoasdyn@gmail.com</span>
            <span className='admin-order-detail__customer-info__contact-info--text6'>+84 939 929 405</span>
        </div>
    );
}

export default ContactInfo;
