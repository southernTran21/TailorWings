import React from "react";
import PropTypes from "prop-types";
import ButtonLoadMore from "components/Button/LoadMore";
import ButtonConfirm from "components/Button/Confirm";

InfoDesktop.propTypes = {
    productID: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
    designedBy: PropTypes.string,
    onConfirmClick: PropTypes.func,
};

InfoDesktop.defaultProps = {
    productID: "",
    price: 0,
    name: "",
    designedBy: "",
    onConfirmClick: null,
};

function InfoDesktop(props) {
    return (
        <div className="c-info-desktop">
            <span className="c-info-desktop__price">{props.price} VNĐ</span>
            <span className="c-info-desktop__name">{props.name}</span>
            <span className="c-info-desktop__desc">
                thiết kế bởi {props.designedBy}
            </span>
            <div className="c-info-desktop__button">
                <ButtonConfirm
                    text="CHỌN SIZE"
                    padding="1.5rem 8rem"
                    onConfirm={props.onConfirmClick}
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
