import React from "react";
import PropTypes from "prop-types";
import ReactImageAppear from "react-image-appear";
import loader from "assets/Image/image-loader.gif";

Avatar.propTypes = {
    image: PropTypes.string,
};

Avatar.defaultProps = {
    image: "",
};

function Avatar(props) {
    if (!props.image) return <div className="c-avatar"></div>;
    return (
        <div className="c-avatar">
            <ReactImageAppear
                src={props.image}
                animationDuration="1s"
                loader={loader}
                loaderStyle={{ backgroundColor: "transparent" }}
                placeholderStyle={{
                    backgroundColor: "transparent",
                }}
            />
        </div>
    );
}

export default Avatar;
