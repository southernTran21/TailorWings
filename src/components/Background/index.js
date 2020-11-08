import PropTypes from "prop-types";
import React from "react";
import ReactImageAppear from "react-image-appear";
import { Link } from "react-router-dom";
import backButton from "../../assets/Icon/back-button.svg";
import defaultBackground from "../../assets/Image/default-background.jpg";
import loader from "assets/Image/image-loader.gif";

Background.propTypes = {
    background: PropTypes.string,
    backLink: PropTypes.object,
};

Background.defaultProps = {
    background: null,
    backLink: { pathname: "/", search: "" },
};

function Background(props) {
    return (
        <div className="c-background">
            <Link to={props.backLink || "/"} className="c-background__button-back">
                <img
                    src={backButton}
                    alt="back"
                />
            </Link>
            <ReactImageAppear
                className="c-background__image"
                src={props.background ? props.background : defaultBackground}
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

export default Background;
