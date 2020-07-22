import React from "react";
import PropTypes from "prop-types";
import CollectionItem from "./CollectionItem";

HomeCollections.propTypes = {};

function HomeCollections(props) {
    return (
        <div className="c-home-collections">
            <h2 className="c-home-collections__title"></h2>
            <div className="c-home-collections__list">
                <CollectionItem />
            </div>
            
        </div>
    );
}

export default HomeCollections;
