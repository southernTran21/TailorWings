import React from 'react';
import PropTypes from 'prop-types';
import ButtonConfirm from 'components/Button/Confirm';

FooterPayment.propTypes = {
    
};

function FooterPayment(props) {
    return (
        <div className='c-payment-footer'>
            <div className="c-payment-footer__content">
                <span className="c-payment-footer__title">PHÍ GIAO HÀNG</span>
                <span className="c-payment-footer__free">MIỄN PHÍ</span>
            </div>
            <div className="c-payment-footer__content">
                <span className="c-payment-footer__title">Thành tiền</span>
                <span className="c-payment-footer__price">675.000 VNĐ</span>
            </div>
            <div className="c-payment-footer__button">
                <ButtonConfirm text="HOÀN TẤT ĐẶT HÀNG" padding="1rem 6.5rem" />
            </div>
        </div>
    );
}

export default FooterPayment;