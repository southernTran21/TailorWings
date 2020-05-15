import React from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import ItemList from "./ItemList";
import PaymentStatus from "./PaymentStatus";
import CustomerInfo from "./CustomerInfo";
import Note from "./Note";
import "./DetailInfo.scss";

DetailInfo.propTypes = {};

function DetailInfo() {
    return (
        <div className="admin-order-detail d-flex">
            <div>
                <Title />
                <ItemList />
                <PaymentStatus />
            </div>
            <div>
                <CustomerInfo />
                <Note />
            </div>
        </div>
    );
}

export default DetailInfo;
