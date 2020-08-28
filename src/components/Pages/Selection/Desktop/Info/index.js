import React from "react";
import PropTypes from "prop-types";
import ButtonLoadMore from "components/Button/LoadMore";
import ButtonConfirm from "components/Button/Confirm";

InfoDesktop.propTypes = {
    onConfirmClick: PropTypes.func,
};

InfoDesktop.defaultProps = {
    onConfirmClick: null,
}

function InfoDesktop(props) {
    return (
        <div className="c-info-desktop">
            <span className="c-info-desktop__price">240,000 VNĐ</span>
            <span className="c-info-desktop__name">Đầm Suông Lucasta</span>
            <span className="c-info-desktop__desc">
                thiết kế bởi Phương Châm
            </span>
            <div className="c-info-desktop__button">
                <ButtonConfirm
                    text="CHỌN SIZE"
                    padding="1.5rem 8rem"
                    onConfirm="NaF"
                    linkTo={{
                        pathname: "/size",
                        search: `?id=${props.productID}`,
                    }}
                />
            </div>
        </div>
    );
}

export default InfoDesktop;
