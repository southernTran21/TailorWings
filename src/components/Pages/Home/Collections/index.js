import React from "react";
import CollectionItem from "./CollectionItem";

HomeCollections.propTypes = {};

function HomeCollections(props) {
    return (
        <div className="c-home-collections">
            <h2 className="c-home-collections__title">Bộ Sưu Tập</h2>
            <div className="c-home-collections__list">
                <CollectionItem />
            </div>
        </div>
    );
}

export default HomeCollections;
