import React, { Component } from 'react';
import './ShoppingCart.scss';
import { Icon, Select } from 'antd';

const { Option } = Select;

const tmp = new Array(5).fill(1);

export default class ShoppingCart extends Component {
    render() {
        return (
            <div className='pageMyCart-wraper'>
                <div className='navbarHeader d-flex flex-row justify-content-between align-items-center'>
                    <div className='iconBack '>
                        <Icon type='left' />
                    </div>
                    <div className='titleHeader'>
                        <span>Giỏ hàng</span>
                    </div>
                    <div className='divClone'></div>
                </div>
                {tmp.map((a, index) => {
                    console.log('a', a);
                    return (
                        <div className='product d-flex flex-row' key={index}>
                            <div className='col-5'>
                                <div className='image'></div>
                                <div className='buttonWishList d-flex flex-row justify-content-center align-items-center'>
                                    <Icon type='heart' />
                                </div>
                            </div>
                            <div className='col-7 d-flex flex-column justify-content-between'>
                                <div className='content-wraper'>
                                    <div className='iconDelete d-flex flex-row justify-content-end  '>
                                        <Icon type='close' />
                                    </div>
                                    <div className='contentHead d-flex flex-column'>
                                        <span>Đầm công chúa</span>
                                        <span>240.000 VNĐ</span>
                                    </div>
                                    <div className='bodyMetric d-flex flex-column'>
                                        <span>Eo 99</span>
                                        <span>Ngực 82</span>
                                        <div className='d-flex flex-row justify-content-between'>
                                            <span>Mông 103</span>
                                            <span>Size XL</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='changeQuantity'>
                                    <Select
                                        defaultValue='1'
                                        style={{ width: '100%' }}
                                    >
                                        <Option value='1'>1</Option>
                                        <Option value='2'>2</Option>
                                        <Option value='3'>3</Option>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div className='checkOutFixBottom'>
                    <div className='title d-flex flex-row justify-content-between align-items-center'>
                        <span>Tạm tính</span>
                        <span>620.000 VNĐ</span>
                    </div>
                    <div className='button d-flex flex-row align-items-center justify-content-center'>
                        <span>
                            Thanh toán
                            <Icon type='right' />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
