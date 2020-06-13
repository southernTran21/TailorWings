import React from "react";
import Header from "./Header";
import OrderList from "./OrderList";
import './GeneralInfo.scss'

function GeneralInfo() {
    return (
        <div className="admin-order-general">
            <Header />
            <OrderList />
        </div>
    );
}

export default GeneralInfo;
