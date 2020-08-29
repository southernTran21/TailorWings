import React, { Fragment } from "react";
import Designs from "components/Designs";
import PropTypes from "prop-types";

DesignListContainer.propTypes = {
    renderProducts: PropTypes.array,
    onLoadMore: PropTypes.func,
};

DesignListContainer.defaultProps = {
    renderProducts: null,
    onLoadMore: null,
};

function DesignListContainer(props) {
    if (!props.onLoadMore) return <Fragment />;
    return (
        <div className="l-designer__design-list">
            <Designs
                title="Sản Phẩm Nổi Bật"
                renderDesigns={props.renderProducts}
                isLoadMore={true}
                loadMore={props.onLoadMore}
            />
        </div>
    );
}

export default DesignListContainer;
