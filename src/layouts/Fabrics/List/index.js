import React from "react";
import PropTypes from "prop-types";
import Fabrics from "components/Pages/Fabrics";

ListContainer.propTypes = {
    renderFabrics: PropTypes.array,
    onLoadMore: PropTypes.func,
};

ListContainer.defaultProps = {
    renderFabrics: null,
    onLoadMore: null,
};

function ListContainer(props) {
    return (
        <section className="l-fabrics__list">
            <Fabrics
                renderFabrics={props.renderFabrics}
                onLoadMore={props.onLoadMore}
            />
        </section>
    );
}

export default ListContainer;
