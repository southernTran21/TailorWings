import React from "react";
import PropTypes from "prop-types";
import { Descriptions } from "antd";

CustomerInfo.propTypes = {
    customerInfo: PropTypes.object,
};

CustomerInfo.defaultProps = {
    customerInfo: null,
};

function CustomerInfo(props) {
    const { customerInfo } = props;
    if (!customerInfo) return;
    return (
        <Descriptions title="Customer Information">
            <Descriptions.Item label="Name">
                {customerInfo.cusName}
            </Descriptions.Item>
            <Descriptions.Item label="Phone">
                {customerInfo.phone}
            </Descriptions.Item>
            <Descriptions.Item label="Address">
                {customerInfo.address}
            </Descriptions.Item>
        </Descriptions>
    );
}

export default CustomerInfo;