import React, { Component } from "react";
import { Swipeable } from "react-swipeable";
import ProductSwiperImages from "./ProductSwiperImages";
import { Link } from "react-router-dom";

class ProductSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDetailShow: false,
            isImageLoad: new Array(5).fill(false),
        };
    }

    onProductImageSwiped = (direction) => {
        this.props.onProductImageSwiped(direction);
    };

    onImageLoaded = (e) => {
        console.log("loaded");
        let { isImageLoad } = this.state;
        let index = e.target.name;
        isImageLoad[index] = true;
        this.setState({
            isImageLoad,
        });
    };

    render() {
        const {
            productSelectedState,
            renderProducts,
            productSliderIndex,
        } = this.props;
        let imageList = new Array(5).fill("");
        imageList[productSliderIndex] =
            renderProducts[productSliderIndex].image[0];
        let imageViewUrl = `/product-detail/image-view/${renderProducts[productSliderIndex].productID}`;
        return (
            <Swipeable
                trackMouse
                preventDefaultTouchmoveEvent
                onSwipedLeft={() => this.onProductImageSwiped(+1)}
                onSwipedRight={() => this.onProductImageSwiped(-1)}
            >
                <div className="awesome3d">
                    <section style={{ padding: "none" }} id="slider">
                        <input
                            style={{ display: "none" }}
                            type="radio"
                            name="slider"
                            id="s1"
                            checked={productSelectedState[0]}
                        />
                        <input
                            style={{ display: "none" }}
                            type="radio"
                            name="slider"
                            id="s2"
                            checked={productSelectedState[1]}
                        />
                        <input
                            style={{ display: "none" }}
                            type="radio"
                            name="slider"
                            id="s3"
                            checked={productSelectedState[2]}
                        />
                        <input
                            style={{ display: "none" }}
                            type="radio"
                            name="slider"
                            id="s4"
                            checked={productSelectedState[3]}
                        />
                        <input
                            style={{ display: "none" }}
                            type="radio"
                            name="slider"
                            id="s5"
                            checked={productSelectedState[4]}
                        />
                        <label htmlFor="s1" id="slide1">
                            <Link
                                className="link"
                                to={{
                                    pathname: imageViewUrl,
                                    from: 'fabric'
                                }}
                            >
                                {imageList[0] !== "" ? (
                                    <ProductSwiperImages
                                        name="0"
                                        id="slide1"
                                        src={imageList[0]}
                                    />
                                ) : null}
                            </Link>
                        </label>
                        <label htmlFor="s2" id="slide2">
                            <Link
                                className="link"
                                to={{
                                    pathname: imageViewUrl,
                                    from: 'fabric'
                                }}
                            >
                                {imageList[1] !== "" ? (
                                    <ProductSwiperImages
                                        name="1"
                                        id="slide2"
                                        src={imageList[1]}
                                    />
                                ) : null}
                            </Link>
                        </label>
                        <label htmlFor="s3" id="slide3">
                            <Link
                                className="link"
                                to={{
                                    pathname: imageViewUrl,
                                    from: 'fabric'
                                }}
                            >
                                {imageList[2] !== "" ? (
                                    <ProductSwiperImages
                                        name="2"
                                        id="slide3"
                                        src={imageList[2]}
                                    />
                                ) : null}
                            </Link>
                        </label>
                        <label htmlFor="s4" id="slide4">
                            <Link
                                className="link"
                                to={{
                                    pathname: imageViewUrl,
                                    from: 'fabric'
                                }}
                            >
                                {imageList[3] !== "" ? (
                                    <ProductSwiperImages
                                        name="3"
                                        id="slide4"
                                        src={imageList[3]}
                                    />
                                ) : null}
                            </Link>
                        </label>
                        <label htmlFor="s5" id="slide5">
                            <Link
                                className="link"
                                to={{
                                    pathname: imageViewUrl,
                                    from: 'fabric'
                                }}
                            >
                                {imageList[4] !== "" ? (
                                    <ProductSwiperImages
                                        name="4"
                                        id="slide5"
                                        src={imageList[4]}
                                    />
                                ) : null}
                            </Link>
                        </label>
                    </section>
                </div>
            </Swipeable>
        );
    }
}

export default ProductSwiper;
