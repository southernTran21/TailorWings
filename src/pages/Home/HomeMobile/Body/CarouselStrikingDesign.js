import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import { Icon } from 'antd';

export default class CarouselStrikingDesign extends Component {
    AutoSlidesPerView = () => {
        const params = {
            slidesPerView: 'auto',
            spaceBetween: 0,
            centeredSlides: true,
            loop: true
        };
        return (
            <Swiper {...params}>
                <div className='content-carousel'>
                    <div className='image'></div>
                    <div className='end-carousel'>
                        <div className='title'>Đầm Suông Lucasta</div>
                        <div className='button d-flex justify-content-between align-items-center'>
                            <span className='titleButton'>26 mẫu vải</span>
                            <span className='putButton'>
                                Đặt may
                                <Icon type='right' />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='content-carousel'>
                    <div className='image'></div>
                    <div className='end-carousel'>
                        <div className='title'>Đầm Suông Lucasta</div>
                        <div className='button d-flex justify-content-between align-items-center'>
                            <span className='titleButton'>26 mẫu vải</span>
                            <span className='putButton'>
                                Đặt may
                                <Icon type='right' />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='content-carousel'>
                    <div className='image'></div>
                    <div className='end-carousel'>
                        <div className='title'>Đầm Suông Lucasta</div>
                        <div className='button d-flex justify-content-between align-items-center'>
                            <span className='titleButton'>26 mẫu vải</span>
                            <span className='putButton'>
                                Đặt may
                                <Icon type='right' />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='content-carousel'>
                    <div className='image'></div>
                    <div className='end-carousel'>
                        <div className='title'>Đầm Suông Lucasta</div>
                        <div className='button d-flex justify-content-between align-items-center'>
                            <span className='titleButton'>26 mẫu vải</span>
                            <span className='putButton'>
                                Đặt may
                                <Icon type='right' />
                            </span>
                        </div>
                    </div>
                </div>
                <div className='content-carousel'>
                    <div className='image'></div>
                    <div className='end-carousel'>
                        <div className='title'>Đầm Suông Lucasta</div>
                        <div className='button d-flex justify-content-between align-items-center'>
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
