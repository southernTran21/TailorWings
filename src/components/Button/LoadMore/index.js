import React from 'react';
import PropTypes from "prop-types";

const TEXT = 'Xem Thêm';

ButtonLoadMore.propTypes = {
    loadMore: PropTypes.func,
};

ButtonLoadMore.defaultProps = {
    loadMore: null,
};

function ButtonLoadMore(props) {
    
    /*********************************
    *  Description: handle button clicked event
    *  
    *  
    *  Call by: 
    */
    function handleClick() {
        if ( props.loadMore ) {
            props.loadMore();
        }
    }
    /************_END_****************/

    return (
        <button className="c-button-load-more" onClick={handleClick}>
            {TEXT}
        </button>
    );
}

export default ButtonLoadMore;