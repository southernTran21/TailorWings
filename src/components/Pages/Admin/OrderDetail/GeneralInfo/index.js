import React, { Fragment } from "react";
import PropTypes from "prop-types";
import editIcon from "assets/Icon/edit-icon.svg";

OrderDetailGeneralInfo.propTypes = {
    title: PropTypes.string,
    editType: PropTypes.string,
    info: PropTypes.array,
};

OrderDetailGeneralInfo.defaultProps = {
    title: null,
    editType: null,
    info: [],
};

function OrderDetailGeneralInfo(props) {
    if (!props.title || !props.editType) return <Fragment />;
    return (
        <div className="c-order-detail-general-info">
            <div className="c-order-detail-general-info__header">
                <span>{props.title}</span>
                <img src={editIcon} alt="edit-icon" />
            </div>
            {props.info.map((item, index) => {
                if (item.includes("@" || "gmail" || ".com")) {
                    return (
                        <a
                            key={index}
                            className="c-order-detail-general-info__info-gmail"
                            href={item}
                        >
                            {item}
                        </a>
                    );
                } else {
                    return (
                        <span
                            key={index}
                            className="c-order-detail-general-info__info"
                        >
                            {item}
                        </span>
                    );
                }
            })}
        </div>
    );
}

export default OrderDetailGeneralInfo;
