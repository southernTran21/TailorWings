import React from "react";
import PropTypes from "prop-types";

RecruitmentItem.propTypes = {
    text: PropTypes.string,
};
RecruitmentItem.defaultProps = {
    text: null,
};

function RecruitmentItem(props) {
    return (
        <li className="c-recruitment-item">
            <div className="c-recruitment-item__line">
                <svg
                    width="4.6rem"
                    height=".6rem"
                    viewBox="0 0 46 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3 3H43"
                        stroke="#FF8445"
                        stroke-width="5"
                        stroke-linecap="round"
                    />
                </svg>
            </div>
            <div className="c-recruitment-item__desc">
                <p>{props.text}</p>
            </div>
        </li>
    );
}

export default RecruitmentItem;
