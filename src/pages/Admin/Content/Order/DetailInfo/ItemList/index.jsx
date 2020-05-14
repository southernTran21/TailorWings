import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

ItemList.propTypes = {};

function ItemList(props) {
    return (
        <div className='admin-order-detail__item-list'>
            <Item />
        </div>
    );
}

export default ItemList;
