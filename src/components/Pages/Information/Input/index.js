import { Checkbox } from "antd";
import classNames from "classnames";
import ButtonConfirm from "components/Button/Confirm";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import NumberFormat from "react-number-format";

InformationInput.propTypes = {
    shippingInfo: PropTypes.object,
    onShippingInfoValidate: PropTypes.func,
    onInputChange: PropTypes.func,
    isNotValidInfo: PropTypes.bool,
    onRememberChange: PropTypes.func,
    isRemember: PropTypes.bool,
    isConfirmClicked: PropTypes.bool,
};

InformationInput.defaultProps = {
    shippingInfo: null,
    onInputChange: null,
    onShippingInfoValidate: null,
    isNotValidInfo: true,
    onRememberChange: null,
    isRemember: false,
    isConfirmClicked: false,
};

function InformationInput(props) {
    if (!props.onInputChange || !props.onRememberChange) return <Fragment />;
    let renderShippingInfo = props.shippingInfo
        ? { ...props.shippingInfo }
        : {
              name: {
                  value: "",
                  isError: true,
              },
              phone: {
                  value: "",
                  isError: true,
              },
              address: {
                  value: "",
                  isError: true,
              },
              note: {
                  value: "",
                  isError: false,
              },
          };

    const { name, phone, address, note } = renderShippingInfo;
    return (
        <div className="c-information-input">
            <div className="c-information-input--wrapper">
                <label htmlFor="name" className="c-information-input__title">
                    Tên người nhận
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    maxLength={50}
                    placeholder="Nhập họ & tên người nhận"
                    className="c-information-input__input"
                    value={name.value}
                    onChange={props.onInputChange}
                />
                <small
                    className={classNames("c-information-input__error", {
                        "c-information-input__error--disable":
                            name.isError && props.isConfirmClicked,
                    })}
                >
                    Vui lòng nhập tên người nhận
                </small>
            </div>
            <div className="c-information-input--wrapper">
                <label htmlFor="phone" className="c-information-input__title">
                    Số điện thoại
                </label>
                <NumberFormat
                    name="phone"
                    className="c-information-input__input"
                    placeholder="Nhập số điện thoại nhận hàng"
                    format="#### ### ###"
                    mask="_"
                    value={phone.value}
                    onChange={props.onInputChange}
                />
                <small
                    className={classNames("c-information-input__error", {
                        "c-information-input__error--disable":
                            phone.isError && props.isConfirmClicked,
                    })}
                >
                    Vui lòng nhập đúng số điện thoại
                </small>
            </div>
            <div className="c-information-input--wrapper">
                <label htmlFor="address" className="c-information-input__title">
                    Địa chỉ nhận hàng
                </label>
                <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Nhập số nhà, tên đường..."
                    className="c-information-input__input"
                    value={address.value}
                    onChange={props.onInputChange}
                />
                <small
                    className={classNames("c-information-input__error", {
                        "c-information-input__error--disable":
                            address.isError && props.isConfirmClicked,
                    })}
                >
                    Vui lòng nhập địa chỉ giao hàng
                </small>
            </div>
            <div className="c-information-input--wrapper">
                <label htmlFor="note" className="c-information-input__title">
                    Ghi chú
                </label>
                <input
                    id="note"
                    name="note"
                    type="text"
                    placeholder="Điền mã Voucher hoặc ghi chú"
                    className="c-information-input__input"
                    value={note.value}
                    onChange={props.onInputChange}
                />
                <p className="c-information-input__desc">
                    * Ưu đãi từ mã Voucher sẽ được trừ trực tiếp khi nhận hàng
                    và thanh toán. Hotline: 0902541398
                </p>
            </div>
            <div className="c-information-input__check-box--wrapper">
                <Checkbox
                    className="c-information-input__title"
                    onChange={props.onRememberChange}
                    checked={props.isRemember}
                >
                    Lưu thông tin cho lần đặt may tới
                </Checkbox>
            </div>
            <div className="c-information-input__button">
                <ButtonConfirm
                    text="GIAO ĐẾN ĐỊA CHỈ NÀY"
                    padding="1.5rem 5.7rem"
                    onConfirm={props.onShippingInfoValidate}
                    linkTo={
                        props.isNotValidInfo ? null : { pathname: "/payment" }
                    }
                />
            </div>
        </div>
    );
}

export default InformationInput;
