import ButtonCTA from "components/Button/CTA";
import React from "react";
import CollectionDamDaoPho from "../../../../../assets/Image/dam-dao-pho-collection.png";

CollectionItem.propTypes = {};

function CollectionItem(props) {
    return (
        <div className="c-collection-item">
            <div className="c-collection-item__image">
                <img src={CollectionDamDaoPho} alt="" />
            </div>
            <span className="c-collection-item__name">Đầm Dạo Phố</span>
            <p className="c-collection-item__desc">
                Thoải mái lựa chọn khi ra đường.
            </p>
            <div className="c-collection-item__button">
                <ButtonCTA text="XEM THÊM" />
            </div>
        </div>
    );
}

export default CollectionItem;
