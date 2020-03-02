import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './FabricSelection.scss';    

class FabricSwiper extends Component {
    render() {
        const { fabricList, productSelectedState } = this.props;
        let renderedSlideNumber = fabricList.length < productSelectedState.length ? fabricList.length : 5 ;
        const params = {
            slidesPerView: renderedSlideNumber,
            spaceBetween: 20,
            loop: false,
            slideToClickedSlide: true,
            on: {
                // https://swiperjs.com/api/#events
                'touchStart': () => this.props.onSwiperTouchStart(),
                'slideChangeTransitionEnd': () => this.props.onSwiperSlideChange(),
                'click': () => this.props.onSwiperSlideChange()
            }
        }
        return (
            <div className='showImgSlide d-flex'>
                <Swiper {...params} getSwiper={this.props.getSwiper.bind(this)}>
                    {
                        fabricList.map((fabric, index) => {
                            return (
                                <div className='' key={index}>
                                    <img className='image' src={fabric.image[0]} />
                                </div>
                            )
                        })
                    }
                </Swiper>
            </div>
        );
    }
}

export default FabricSwiper;