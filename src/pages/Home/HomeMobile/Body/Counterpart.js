import React, { Component } from 'react';
import { Icon } from 'antd';

import Icon1 from '../../../../assets/imageHomePage/Mask Group 1.svg';
import Icon2 from '../../../../assets/imageHomePage/Mask Group 2.svg';
import Icon3 from '../../../../assets/imageHomePage/Mask Group 3.svg';
import Icon4 from '../../../../assets/imageHomePage/Mask Group 4.svg';

class Counterpart extends Component {
    render() {
        return (
            <div className='weGive-wraper'>
                <div className='title d-flex flex-column justify-content-center align-items-center'>
                    <span>We Give Tailor Wings</span>
                    <span className='text-center'>
                        Trở thành đối tác của Tailor Wings để làm chủ cuộc sống
                        của mình tốt hơn.
                    </span>
                </div>
                <div className='fourBenefit-wraper d-flex flex-column justify-content-center align-items-center'>
                    <div className='twoBenefit d-flex flex-row'>
                        <div className='col-6 d-flex flex-column justify-content-center align-items-center'>
                            <div className='image'>
                                <img src={Icon1} />
                            </div>
                            <div className='titleBenefit d-flex flex-column justify-content-center align-items-center'>
                                <span>Tiếp cận</span>
                                <span>Tiếp cận với khách hàng nhanh chóng</span>
                            </div>
                        </div>
                        <div className='col-6  d-flex flex-column justify-content-center align-items-center'>
                            <div className='image'>
                                <img src={Icon2} />
                            </div>
                            <div className='titleBenefit d-flex flex-column justify-content-center align-items-center'>
                                <span>Lợi ích 2</span>
                                <span>Tiếp cận với khách hàng nhanh chóng</span>
                            </div>
                        </div>
                    </div>
                    <div className='twoBenefit d-flex flex-row '>
                        <div className='col-6 d-flex flex-column justify-content-center align-items-center'>
                            <div className='image'>
                                <img src={Icon3} />
                            </div>
                            <div className='titleBenefit d-flex flex-column justify-content-center align-items-center'>
                                <span>Tiếp cận</span>
                                <span>Tiếp cận với khách hàng nhanh chóng</span>
                            </div>
                        </div>
                        <div className='col-6  d-flex flex-column justify-content-center align-items-center'>
                            <div className='image'>
                                <img src={Icon4} />
                            </div>
                            <div className='titleBenefit d-flex flex-column justify-content-center align-items-center'>
                                <span>Lợi ích 2</span>
                                <span>Tiếp cận với khách hàng nhanh chóng</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='buttonConect d-flex flex-row justify-content-center align-items-center'>
                    <span>Kết nối ngay</span>
                </div>
            </div>
        );
    }
}

export default Counterpart;
