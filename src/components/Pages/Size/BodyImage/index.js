import React from "react";
import PropTypes from "prop-types";
import sizeNull from "../../../../assets/Image/size-null.png";

SizeBodyImage.propTypes = {
    image: PropTypes.string,
};

SizeBodyImage.defaultProps = {
    image: sizeNull,
};

function SizeBodyImage(props) {
    return (
        <div className="c-size-body-image">
            <img src={props.image} alt="body-metric" />
        </div>
    );
}

export default SizeBodyImage;
