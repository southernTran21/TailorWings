import React from "react";
import PropTypes from "prop-types";
import ButtonCTA from "components/Button/CTA";
import ImageVoucher from "../../../../assets/Image/welcome 1.svg";

HomeVoucher.propTypes = {};

function HomeVoucher(props) {
    return (
        <div className="c-home-voucher">
            <div className="c-home-voucher__content">
                <div className="c-home-voucher__title">
                    <p>Đăng kí để nhận ưu đãi mới nhất</p>
                </div>
                <ButtonCTA text="NHẬN NGAY" />
            </div>
            <div className="c-home-voucher__image">
                <img src={ImageVoucher} alt="" />
            </div>
        </div>
    );
}

export default HomeVoucher;
