import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import { Icon } from 'antd';

import BST1 from '../../../../assets/imageHomePage/imageBST.jpg';
import BST2 from '../../../../assets/imageHomePage/Prairie Pijama.jpg';

export default class CarouselCollection extends Component {
    AutoSlidesPerView = () => {
        const params = {
            slidesPerView: 'auto',
            spaceBetween: 20,
            loop: true
        };
        return (
            <Swiper {...params}>
                <div className='content-carousel'>
                    <div className='title'>Đầm Dạo Phố</div>
                    <div className='image'>
                        <div className='popupImage'>27 thiết kế</div>
                        <img src={BST1} />
                    </div>
                    <div className='end-carousel'>
                        <div className='button d-flex align-items-center justify-content-center'>
                            <span className='titleButton'>Chọn mẫu</span>
                        </div>
                    </div>
                </div>
                <div className='content-carousel'>
                    <div className='title'>Đầm Dạo Phố</div>
                    <div className='image'>
                        <div className='popupImage'>27 thiết kế</div>
                        <img src={BST2} />
                    </div>
                    <div className='end-carousel'>
                        <div className='button d-flex align-items-center justify-content-center'>
                            <span className='titleButton'>Chọn mẫu</span>
                        </div>
                    </div>
                </div>
                <div className='content-carousel'>
                    <div className='title'>Đầm Dạo Phố</div>
                    <div className='image'>
                        <div className='popupImage'>27 thiết kế</div>
                        <img src={BST2} />
                    </div>
                    <div className='end-carousel'>
                        <div className='button d-flex align-items-center justify-content-center'>
                            <span className='titleButton'>Chọn mẫu</span>
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
