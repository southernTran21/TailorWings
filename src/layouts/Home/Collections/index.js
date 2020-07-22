import React from "react";
import HomeCollections from "components/Pages/Home/Collections";

CollectionsContainer.propTypes = {};

function CollectionsContainer(props) {
    return (
        <section className="l-home__collections">
            <HomeCollections />
        </section>
    );
}

export default CollectionsContainer;
