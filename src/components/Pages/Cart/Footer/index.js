import React from 'react';
import PropTypes from 'prop-types';
import ButtonConfirm from 'components/Button/Confirm';

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <div className='c-cart-footer'>
            <div className="c-cart-footer__text">
                <span className="c-cart-footer__title">Thành tiền</span>
                <span className="c-cart-footer__price">620.000 VNĐ</span>
            </div>
            <div className="c-cart-footer__button">
                <ButtonConfirm text="THANH TOÁN" padding="1.7rem 8.4rem" onConfirm="NaF"/>
            </div>
        </div>
    );
}

export default Footer;