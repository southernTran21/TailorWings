import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

ItemList.propTypes = {};

function ItemList(props) {
    return (
        <div className='admin-order-detail__item-list'>
            <div className="admin-order-detail__item-list__title">
                <span className='admin-order-detail__item-list__title--1'>4</span>
                <span className='admin-order-detail__item-list__title--2'> items</span>
            </div>
            <Item />
        </div>
    );
}

export default ItemList;
