import React from "react";
import Designs from "components/Designs";
import PropTypes from "prop-types";

DesignListContainer.propTypes = {
    renderDesigns: PropTypes.array,
};
DesignListContainer.defaultProps = {
    renderDesigns: null,
};

function DesignListContainer(props) {
    let renderDesigns = props.renderDesigns
        ? {
              isMax: true,
              designs: props.renderDesigns || [],
          }
        : null;
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
