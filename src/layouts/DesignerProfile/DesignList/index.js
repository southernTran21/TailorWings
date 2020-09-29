import React from "react";
import Designs from "components/Designs";
import PropTypes from "prop-types";
import ListLoader from "components/Loader/List";

DesignListContainer.propTypes = {
    renderDesigns: PropTypes.array,
    isListLoading: PropTypes.bool,
};
DesignListContainer.defaultProps = {
    renderDesigns: null,
    isListLoading: false,
};

function DesignListContainer(props) {
    let renderDesigns = props.renderDesigns
        ? {
              isMax: true,
              designs: props.renderDesigns || [],
          }
        : null;
    if (props.isListLoading) {
        return <ListLoader />;
    }
    return (
        <div className="l-designer__design-list">
            <Designs
                title="Sản Phẩm Nổi Bật"
                renderDesigns={renderDesigns}
                isLoadMore={true}
            />
        </div>
    );
}

export default DesignListContainer;
