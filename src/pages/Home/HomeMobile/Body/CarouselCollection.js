import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import { Icon } from 'antd';

export default class CarouselCollection extends Component {
    AutoSlidesPerView = () => {
        const params = {
            slidesPerView: 'auto',
            spaceBetween: 7,
            loop: true
        };
        return (
            <Swiper {...params}>
                <div className='content-carousel'>
                    <div className='title'>Đầm Dạo Phố</div>
                    <div className='image'>
                        <div className='popupImage'>27 thiết kế</div>
                    </div>
                    <div className='end-carousel'>
                        <div className='button d-flex align-items-center'>
                            <span className='titleButton'>26 mẫu vải</span>
                            <span className='putButton'>
                                Đặt may
                                <Icon type='right' />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='content-carousel'>
                    <div className='title'>Đầm Dạo Phố</div>
                    <div className='image'>
                        <div className='popupImage'>27 thiết kế</div>
                    </div>
                    <div className='end-carousel'>
                        <div className='button d-flex align-items-center'>
                            <span className='titleButton'>26 mẫu vải</span>
                            <span className='putButton'>
                                Đặt may
                                <Icon type='right' />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='content-carousel'>
                    <div className='title'>Đầm Dạo Phố</div>
                    <div className='image'>
                        <div className='popupImage'>27 thiết kế</div>
                    </div>
                    <div className='end-carousel'>
                        <div className='button d-flex align-items-center'>
                            <span className='titleButton'>26 mẫu vải</span>
                            <span className='putButton'>
                                Đặt may
                                <Icon type='right' />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='content-carousel'>
                    <div className='title'>Đầm Dạo Phố</div>
                    <div className='image'>
                        <div className='popupImage'>27 thiết kế</div>
                    </div>
                    <div className='end-carousel'>
                        <div className='button d-flex align-items-center'>
                            <span className='titleButton'>26 mẫu vải</span>
                            <span className='putButton'>
                                Đặt may
                                <Icon type='right' />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='content-carousel'>
                    <div className='title'>Đầm Suông Lucasta</div>
                    <div className='image'>
                        <div className='popupImage'>27 thiết kế</div>
                    </div>
                    <div className='end-carousel'>
                        <div className='button d-flex align-items-center'>
                            <span className='titleButton'>26 mẫu vải</span>
                            <span className='putButton'>
                                Đặt may
                                <Icon type='right' />
                            </span>
                        </div>
                    </div>
                </div>
            </Swiper>
        );
    };
    render() {
        return (
            <div className='carousel-wraper'>{this.AutoSlidesPerView()}</div>
        );
    }
}
