import React from "react";
import PropTypes from "prop-types";
import PriceTag from "components/PriceTag";
import Quantity from "components/Quantity";

SizeInfo.propTypes = {};

function SizeInfo(props) {
    return (
        <div className="c-size-info">
            <div className="c-size-info--left">
                <span className="c-size-info__name">Đầm ôm hebe</span>
                <PriceTag price="240.000" />
            </div>
            <div className="c-size-info--right">
                <div className="c-size-info__quantity">
                    <Quantity />
                </div>
            </div>
        </div>
    );
}

export default SizeInfo;
