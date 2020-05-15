import React from "react";
import PropTypes from "prop-types";

Item.propTypes = {};

function Item(props) {
    return (
        <div className="admin-order-detail__item-list__content-wrapper d-flex align-items-center">
            <div className="admin-order-detail__item-list__content-wrapper__image"></div>
            <div className="admin-order-detail__item-list__content-wrapper__content">
                <span className="admin-order-detail__item-list__content-wrapper__content--text1 font-weight-bold">
                    Đầm Ôm Elain
                </span>
                <div className="d-flex justify-content-between">
                    <span className="admin-order-detail__item-list__content-wrapper__content--text2 font-weight-bold">
                        Size XL (90, 60, 92)
                    </span>
                    <span className="admin-order-detail__item-list__content-wrapper__content--text3 font-italic">
                        Discount -37.000đ
                    </span>
                </div>
                <span className="admin-order-detail__item-list__content-wrapper__content--text4 d-flex justify-content-end font-weight-bold">
                    1.653.000đ x 1
                </span>
                <span className="admin-order-detail__item-list__content-wrapper__content--text5">
                    B004M001
                </span>
            </div>
        </div>
    );
}

export default Item;
