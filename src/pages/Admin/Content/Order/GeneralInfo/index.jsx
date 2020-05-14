import React from "react";
import Header from "./Header";
import OrderList from "./OrderList";

function GeneralInfo() {
    return (
        <div className="admin-order-general">
            <Header />
            <OrderList />
        </div>
    );
}

export default GeneralInfo;
