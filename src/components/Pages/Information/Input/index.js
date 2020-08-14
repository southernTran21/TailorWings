import React from 'react';
import PropTypes from 'prop-types';
import ButtonConfirm from 'components/Button/Confirm';

InformationInput.propTypes = {
    
};

function InformationInput(props) {
    return (
        <div className='c-information-input'>
            <div className="c-information-input--wrapper">
                <span className="c-information-input__title">Tên người nhận</span>
                <input type="text" placeholder='Nhập họ & tên người nhận' className='c-information-input__input'/>
            </div>
            <div className="c-information-input--wrapper">
                <span className="c-information-input__title">Số điện thoại</span>
                <input type="text" placeholder='Nhập số điện thoại nhận hàng' className='c-information-input__input'/>
            </div>
            <div className="c-information-input--wrapper">
                <span className="c-information-input__title">Địa chỉ nhận hàng</span>
                <input type="text" placeholder='Nhập số nhà, tên đường...' className='c-information-input__input'/>
            </div>
            <div className="c-information-input--wrapper">
                <span className="c-information-input__title">Ghi chú</span>
                <input type="text" placeholder='Điền mã Voucher hoặc ghi chú' className='c-information-input__input'/>
                <p className="c-information-input__desc">* Ưu đãi từ mã Voucher sẽ được trừ trực tiếp khi nhận hàng và thanh toán. Hotline: 0902541398</p>
            </div>
            <div className="c-information-input__check-box--wrapper">
                <input type="checkbox" className='c-information-input__check-box'/>
                <span className='c-information-input__title'>Lưu thông tin cho lần đặt may tới</span>
            </div>
            <div className="c-information-input__button">
                <ButtonConfirm text="GIAO ĐẾN ĐỊA CHỈ NÀY" padding="1.5rem 5.7rem"/>
            </div>
        </div>
    );
}

export default InformationInput;