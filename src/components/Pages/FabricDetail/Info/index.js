import React from "react";
import PropTypes from "prop-types";

FabricDetailInfo.propTypes = {};

function FabricDetailInfo(props) {
    return (
        <div className="c-fabric-detail-info">
            <h2 className="c-fabric-detail-info__name">
                Vải Lụa Pháp Vàng Nghệ
            </h2>
            <div className="c-fabric-detail-info__tag">
                <span>Lụa</span>
            </div>
            {/* <div className="c-fabric-detail-info__id"></div> */}
            <div className="c-fabric-detail-info__desc">
                <span>Mã vải: M002</span>
                <span>- Chất liệu vải thô thoáng mát</span>
                <span>- Không nhăn, không phai màu, độ bền cao</span>
            </div>
        </div>
    );
}

export default FabricDetailInfo;
