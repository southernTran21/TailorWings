import React, { Fragment } from "react";
import PropTypes from "prop-types";

CategoriesItem.propTypes = {
    category: PropTypes.string.isRequired,
};

CategoriesItem.defaultProps = {
    category: null,
};

function CategoriesItem(props) {
    if (!props.category) return <Fragment></Fragment>;
    return (
        <li className="m-categories__item">
            <div className="m-categories__info-wrapper">
                <div className='m-categories__name'>
                    <span>{props.category.name}</span>
                </div>
                <div className='m-categories__design-number'>
                    <span>{props.category.designNumber} designs</span>
                </div>
                {/* <button className="btn btn-primary btn-rounded">{BUTTON_TEXT}</button> */}
            </div>
            <div className="m-categories__image-wrapper"></div>
        </li>
    );
}

export default CategoriesItem;
