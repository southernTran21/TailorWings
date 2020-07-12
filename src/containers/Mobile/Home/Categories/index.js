import React from "react";
import PropTypes from "prop-types";
import Categories from "components/Mobile/Home/Categories";

CategoriesContainer.propTypes = {};

function CategoriesContainer(props) {
    return (
        <div className="m-home__categories">
            <Categories />
        </div>
    );
}

export default CategoriesContainer;
