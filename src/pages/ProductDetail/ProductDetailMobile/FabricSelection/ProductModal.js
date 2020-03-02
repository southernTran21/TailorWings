import React, { Component } from 'react'
import Slider from "react-slick";
import classNames from 'classnames'

export default class ProductModal extends Component {

    onCloseModal = () => {
        this.props.onProductModalStatusChanged(false)
    }

    render() {
        const { isProductModalShow, renderProducts, productSliderIndex } = this.props;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };
        return (
            <div id="myModal" className={classNames("modal", { popUpShow: isProductModalShow })}>
                <div
                    className='d-flex flex-column justify-content-center align-items-end'
                    style={{ width: '100%', height: '100%' }}
                >
                    <span
                        className="closeModal"
                        onClick={this.onCloseModal}
                    >
                        &times;
                        </span>
                </div>
                <Slider {...settings}>
                    {
                        renderProducts[productSliderIndex].image.map((image, index) => {
                            return (
                                <img
                                    key={index}
                                    className="modal-content"
                                    id="img01"
                                    src={image}
                                />
                            )
                        })
                    }
                </Slider>
                <div id="caption" style={{ width: '100%', height: '100%' }} />
            </div>
        )
    }
}
