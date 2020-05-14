import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import OrderList from "./OrderList";
import './GeneralInfo.scss'

GeneralInfo.propTypes = {};

function GeneralInfo(props) {
    return (
        <div className="admin-order-general">
            <Header />
            <OrderList />
        </div>
    );
}

export default GeneralInfo;
