import classNames from "classnames";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { getCurrentDate } from "services/CommonFunction";
import { trackingIncrement } from "services/Fundamental";
import "./Categories.scss";

import PropTypes from 'prop-types';

Categories.propTypes = {
    categories: PropTypes.array,
    activeStatus: PropTypes.array,
};

Categories.defaultProps = {
    categories: null,
    activeStatus: null,
}

function Categories(props) {
    const { categories, activeStatus } = props;

    if (!categories || !activeStatus) return <Fragment></Fragment>;

    /*********************************
     *  Description: to update tracking counter
     *
     *
     *  Call by:
     */
    function handleTracking(catID) {
        let date = getCurrentDate();
        if (!catID) return;
        trackingIncrement("tracking", date, "categories", catID);
    }
    /************_END_****************/

    return (
        <div className="categories_wrapper d-flex justify-content-between align-items-center">
            {categories.map((category, index) => {
                return (
                    <Link
                        key={index}
                        style={{
                            height: "fit-content",
                            width: "fit-content",
                            border: "none",
                            textDecoration: "none",
                        }}
                        to={{
                            pathname: `/shopping-store/${category.id}`,
                            search: "?t=cat",
                        }}
                        onClick={() => {
                            handleTracking(category.id.replace(/-/gi, ''));
                        }}
                    >
                        <div
                            name={category.id}
                            className={classNames(
                                "image d-flex flex-column align-items-center",
                                { blur: !activeStatus[index] }
                            )}
                        >
                            <img src={category.image} alt={category.id} />
                            <span>{category.name}</span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default Categories;
