import React from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import ItemList from "./ItemList";
import PaymentStatus from "./PaymentStatus";
import CustomerInfo from "./CustomerInfo";
import Note from "./Note";

DetailInfo.propTypes = {};

function DetailInfo() {
    return (
        <div className='admin-order-detail'>
            <Title />
            <ItemList />
            <PaymentStatus />
            <CustomerInfo />
            <Note />
        </div>
    );
}

export default DetailInfo;
