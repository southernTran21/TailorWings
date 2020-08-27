import React from "react";
import PropTypes from "prop-types";

Summary.propTypes = {
    totalPrice: PropTypes.number,
    discountPrice: PropTypes.number,
    voucher: PropTypes.object,
};

Summary.defaultProps = {
    totalPrice: 0,
    discountPrice: 0,
    voucher: null,
};

function Summary(props) {
    return (
        <div className="c-summary">
            <div className="c-summary__amount">
                <p className="c-summary__amount--text1">Tạm Tính</p>
                <p className="c-summary__amount--text2">
                    {props.totalPrice} VNĐ
                </p>
            </div>
            <div className="c-summary__discount">
                <p className="c-summary__discount--text1">Giảm giá</p>
                <p className="c-summary__discount--text2">
                    - {props.discountPrice} VNĐ |{" "}
                    {props.voucher ? props.voucher.value : 0}%
                </p>
            </div>
        </div>
    );
}

export default Summary;
