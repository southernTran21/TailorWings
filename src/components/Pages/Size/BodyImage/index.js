import React from "react";
import PropTypes from "prop-types";
import sizeModify from "../../../../assets/Image/size-modify.png";

SizeBodyImage.propTypes = {
    image: PropTypes.string,
};

SizeBodyImage.defaultProps = {
    image: sizeModify,
};

function SizeBodyImage(props) {
    return (
        <div className="c-size-body-image">
            <img src={props.image} alt="body-metric" />
        </div>
    );
}

export default SizeBodyImage;
