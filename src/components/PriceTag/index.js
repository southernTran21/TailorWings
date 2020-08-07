import React from 'react';
import PropTypes from 'prop-types';

PriceTag.propTypes = {
    price: PropTypes.string,
};

PriceTag.defaultProps = {
    price: 0
}

function PriceTag(props) {
    return (
        <div className="c-price-tag">
            <span>{props.price} VNĐ</span>
        </div>
    );
}

export default PriceTag;