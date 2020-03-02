import React, { Component } from 'react';
import { Swipeable } from "react-swipeable";


class ProductSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDetailShow: false
        }
    }

    onProductImageSwiped = (direction) => {
        this.props.onProductImageSwiped(direction);
    }

    onImageClicked = (e) => {
        const { productSliderIndex } = this.props;
        let index = Number(e.target.name);
        if (index === productSliderIndex) {
            this.props.onProductModalStatusChanged(true);
        } else {
            this.props.selectHandling(e)
        }
    }

    render() {
        const { productSelectedState, renderProducts } = this.props;
        return (
            <Swipeable
                trackMouse
                preventDefaultTouchmoveEvent
                onSwipedLeft={() => this.onProductImageSwiped(+1)}
                onSwipedRight={() => this.onProductImageSwiped(-1)}
            >
                <div className='awesome3d'>
                    <section style={{ padding: "none" }} id="slider">
                        <input style={{ display: "none" }} type="radio" name="slider" id="s1" checked={productSelectedState[0]} />
                        <input style={{ display: "none" }} type="radio" name="slider" id="s2" checked={productSelectedState[1]} />
                        <input style={{ display: "none" }} type="radio" name="slider" id="s3" checked={productSelectedState[2]} />
                        <input style={{ display: "none" }} type="radio" name="slider" id="s4" checked={productSelectedState[3]} />
                        <input style={{ display: "none" }} type="radio" name="slider" id="s5" checked={productSelectedState[4]} />
                        <label onClick={(e) => this.onImageClicked(e)} htmlFor="s1" id="slide1">
                            <img name='0' id="slide1" onClick={(e) => this.onImageClicked(e)} src={renderProducts[0].image[0]} />
                        </label>
                        <label onClick={(e) => this.onImageClicked(e)} htmlFor="s2" id="slide2">
                            <img name='1' id="slide2" onClick={(e) => this.onImageClicked(e)} src={renderProducts[1].image[0]} />
                        </label>
                        <label onClick={(e) => this.onImageClicked(e)} htmlFor="s3" id="slide3">
                            <img name='2' id="slide3" onClick={(e) => this.onImageClicked(e)} src={renderProducts[2].image[0]} />
                        </label>
                        <label onClick={(e) => this.onImageClicked(e)} htmlFor="s4" id="slide4">
                            <img name='3' id="slide4" onClick={(e) => this.onImageClicked(e)} src={renderProducts[3].image[0]} />
                        </label>
                        <label onClick={(e) => this.onImageClicked(e)} htmlFor="s5" id="slide5">
                            <img name='4' id="slide5" onClick={(e) => this.onImageClicked(e)} src={renderProducts[4].image[0]} />
                        </label>
                    </section>
                </div>
            </Swipeable>
        );
    }
}

export default ProductSwiper;