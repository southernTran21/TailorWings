import React from "react";
import PropTypes from "prop-types";

SelectionDescription.propTypes = {
    designDesc: PropTypes.string,
    fabricDesc: PropTypes.string,
};

SelectionDescription.defaultProps = {
    designDesc: "",
    fabricDesc: ""
}

function SelectionDescription(props) {
    return (
        <div className="c-selection-desc">
            <div className="c-selection-desc__wrapper">
                <span className="c-selection-desc__title">
                    Thông tin thiết kế
                </span>
                <p className="c-selection-desc__text">
                    Đầm thiết kế ôm giúp tôn dáng. Đặc biệt túi hai hông tiện
                    rất tiện cho các bạn để điện thoại và tiền an toàn khi ra
                    ngoài. Số đo người mẫu trong hình: Ngực 84, Eo 66, Mông 89.
                    Tương đương size S của Tailor Wings.
                </p>
            </div>
            <div className="c-selection-desc__wrapper">
                <span className="c-selection-desc__title">Thông tin vải</span>
                <p className="c-selection-desc__text">
                    Tên: Vải Đỏ Đa Giác Trắng Mã vải: M002 - Chất liệu vải thô
                    thoáng mát - Không nhăn , không phai màu , độ bền cao
                </p>
            </div>
        </div>
    );
}

export default SelectionDescription;
