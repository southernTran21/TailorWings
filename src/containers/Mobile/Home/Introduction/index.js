import React from "react";
import PropTypes from "prop-types";
import Introduction from "components/Mobile/Home/Introduction";

IntroductionContainer.propTypes = {};

function IntroductionContainer(props) {
    return (
        <div className="m-home__intro">
            <Introduction />
        </div>
    );
}

export default IntroductionContainer;
