import React, { Component } from "react";
import Swiper from "react-id-swiper";
import "./FabricSelection.scss";
import classNames from "classnames";

class FabricSwiper extends Component {
    render() {
        const {
            productSelectedState,
            fabricList,
            currentProductIndex,
        } = this.props;
        let renderedSlideNumber =
            fabricList.length < productSelectedState.length
                ? fabricList.length
                : 5;
        let activeState = new Array(fabricList.length).fill(false);
        activeState[currentProductIndex] = true;
        const params = {
            slidesPerView: renderedSlideNumber,
            spaceBetween: 0,
            loop: true,
            slideToClickedSlide: true,
            lazy: false,
            on: {
                //ref: https://swiperjs.com/api/#events
                // touchStart: () => this.props.onSwiperTouchStart(),
                // slideChangeTransitionEnd: () =>
                //     this.props.onSwiperSlideChange(),
                click: (e) => this.props.onFabricClicked(e),
            },
        };
        return (
            <div className="showImgSlide d-flex">
                <Swiper {...params} getSwiper={this.props.getSwiper.bind(this)}>
                    {fabricList.map((fabric, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() =>
                                    this.props.onFabricClicked(index)
                                }
                            >
                                <img
                                    className={classNames("image", {
                                        active: activeState[index],
                                    })}
                                    src={fabric.image[0]}
                                />
                            </div>
                        );
                    })}
                </Swiper>
            </div>
        );
    }
}

export default FabricSwiper;
