import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import { Icon } from 'antd';

import Image2 from '../../../../assets/imageHomePage/thiet ke noi bat.jpg';

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
                    <div className='image'>
                        <img src={Image2} />
                    </div>
                    <div className='end-carousel'>
                        <div className='title'>Đầm Suông Lucasta</div>
                        <div className='button d-flex justify-content-between align-items-center'>
                            <div className='col-6 d-flex flex-row justify-content-center align-items-center'>
                                <span className='titleButton'>26 mẫu vải</span>
                            </div>
                            <div className='col-6'>
                                <div className='putButton d-flex flex-row justify-content-center align-items-center'>
                                    <span>Đặt may</span>
                                    <Icon type='right' />
                                </div>
                            </div>
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
