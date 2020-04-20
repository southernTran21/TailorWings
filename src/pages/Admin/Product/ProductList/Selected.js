/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import './Selected.scss';
import { Popconfirm, Button, Popover, Checkbox, message, Input, Radio } from 'antd';
import classNames from 'classnames'


export const ContentAddToCollection = (nameContent) => {
    return (
        <div className="eventAddToCollection font-weight-bold">
            <div className="content">
                <Checkbox style={{ fontSize: '14px', color: 'black' }}>{nameContent}</Checkbox>
                <span style={{ fontSize: '12px', color: 'black', marginLeft: '40px' }}>20</span>
            </div>
            <div className="content">
                <Checkbox style={{ fontSize: '14px', color: 'black' }}>{nameContent}</Checkbox>
                <span style={{ fontSize: '12px', color: 'black', marginLeft: '40px' }}>20</span>
            </div>
            <div className="buttonApply">
                <a>Apply</a>
            </div>
        </div>
    )
}

export const ContentSetVisibility = (onVisibilitySetting) => {
    return (
        <div className="eventSetVisibility ">
            <div className="content">
                <div onClick={() => onVisibilitySetting(true)} className="text-center font-weight-bold" style={{ padding: 0 }}>
                    <i className="far fa-eye"></i>
                    <a>Visible</a>
                </div>
            </div>
            <div className="content">
                <div onClick={() => onVisibilitySetting(false)} className="text-center font-weight-bold" style={{ padding: 0 }}>
                    <i className="far fa-eye-slash"></i>
                    <a>Hidden</a>
                </div>
            </div>
        </div>
    )
}

export const ContentDiscount = (
    valueDiscountK,
    valueDiscountP,
    discountType,
    onDiscountTypeChange,
    checked,
    onDiscountValueChange,
    onApplyDiscountChange
) => {
    return (
        <div className="eventDiscount ">
            <Radio.Group onChange={onDiscountTypeChange} value={discountType}>
                <div className="d-flex flex-row justify-content-between align-items-center" style={{ marginTop: '10px' }}>
                    <div className="content">
                        <Radio value='K'></Radio>
                        <span style={{ fontSize: '12px', color: 'black' }}> $(K)</span>
                    </div>
                    <Input value={valueDiscountK} name='K' onChange={onDiscountValueChange} placeholder="" disabled={!checked} />
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center" style={{ marginTop: '10px' }}>
                    <div className="content">
                        <Radio value="P"></Radio>
                        <span style={{ fontSize: '12px', color: 'black' }}> %</span>
                    </div>
                    <Input value={valueDiscountP} name="P" onChange={onDiscountValueChange} placeholder="" disabled={checked} />
                </div>
            </Radio.Group>
            <div className="buttonSubmit">
                <a onClick={onApplyDiscountChange} >Apply</a>
            </div>
        </div>
    )
}

export class Selected extends Component {
    state = {
        isDiscountChange: false,
        discountType: 'K',
        checked: true,
        valueDiscountK: 0,
        valueDiscountP: 0
    };

    onDelete = () => {
        this.props.deleteHanding();
    }

    onVisibilitySetting = (isVisible) => {
        this.props.setVisibilityHandling(isVisible);
    }

    onDiscountTypeChange = e => {
        this.setState({
            discountType: e.target.value,
            checked: !this.state.checked
        });
    };

    onDiscountValueChange = (e) => {
        if (!isNaN(e.target.value)) {
            if (e.target.name === 'K') {
                this.setState({
                    valueDiscountK: e.target.value,
                    valueDiscountP: 0,
                    isDiscountChange: true
                })
            } else if (e.target.name === 'P') {
                this.setState({
                    valueDiscountK: 0,
                    valueDiscountP: e.target.value,
                    isDiscountChange: true
                })
            } else {
                //do nothing
            }
        } else {
            message.error('Vui lòng nhập chữ số!');
        }

    }

    onApplyDiscountChange = () => {
        const { discountType, valueDiscountK, valueDiscountP, isDiscountChange } = this.state;
        if (isDiscountChange) {
            this.props.updateDiscountHandling(discountType, valueDiscountK, valueDiscountP);
            this.setState({
                valueDiscountK: 0,
                valueDiscountP: 0,
                isDiscountChange: false
            })
        } else {
            message.error('Vui lòng nhập giá trị giảm giá!');
        }
    }

    render() {
        let nameContent = 'Đầm Suông'
        const { isOpen, selectedProducts } = this.props;
        return (
            <div className={classNames({ "selectedProduct d-flex flex-row justify-content-between align-items-center": isOpen, close: !isOpen })} >
                <div className="numberProductSelect">
                    <a><i className="far fa-minus-square"></i>{` ${selectedProducts.length} product selected`}</a>
                </div>
                <div className="buttonEvent">
                    <Popover placement="bottom" content={ContentAddToCollection(nameContent)} trigger="click">
                        <Button>Add to category</Button>
                    </Popover>
                    <Popover placement="bottom" content={ContentSetVisibility(this.onVisibilitySetting)} trigger="click">
                        <Button>Set visibility</Button>
                    </Popover>
                    <Popover placement="bottom" trigger="click">
                        <Button>Export</Button>
                    </Popover>
                    <Popconfirm placement="bottom" title='Bạn có chắc là muốn xóa?' onConfirm={this.onDelete} okText="Yes" cancelText="No">
                        <Button>Delete</Button>
                    </Popconfirm>
                    <Popover
                        placement="bottom"
                        content={ContentDiscount(
                            this.state.valueDiscountK,
                            this.state.valueDiscountP,
                            this.state.discountType,
                            this.onDiscountTypeChange,
                            this.state.checked,
                            this.onDiscountValueChange,
                            this.onApplyDiscountChange
                        )}
                        trigger="click"
                    >
                        <Button>Discount</Button>
                    </Popover>
                </div>
            </div>
        );
    }
}

export default Selected;
