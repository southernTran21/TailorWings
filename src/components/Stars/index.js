import React from "react";
import PropTypes from "prop-types";
import star from "../../assets/Icon/star.svg";
import starFull from "../../assets/Icon/star-full.svg";

Stars.propTypes = {
    number: PropTypes.number,
};

Stars.defaultProps = {
    number: 0,
};

function Stars(props) {
    let starIconList = [];
    for (let i = 0; i <= 4; i++) {
        if (i < props.number) {
            starIconList.push(starFull);
        } else {
            starIconList.push(star);
        }
    }
    return (
        <ul className="c-stars">
            {starIconList.map((icon, index) => {
                return (
                    <li className="c-stars__icon" key={index}>
                        <img src={icon} atl="star" />
                    </li>
                );
            })}
        </ul>
    );
}

export default Stars;
