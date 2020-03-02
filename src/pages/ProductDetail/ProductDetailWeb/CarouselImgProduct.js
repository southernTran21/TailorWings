import React, { Component } from 'react';
import { getDocument } from '../../../services/Fundamental'
import './CarouselImgProduct.scss'
import Slider from "react-slick";
import './ProductDetail.css'
import './ProductDetail.scss'

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={onClick}>
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
        </a>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={onClick}>
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
        </a>
    );
}

class CarouselImgProduct extends Component {
    render() {
        const { productInfo, fabricInfo, productImage } = this.props;
        let imgURL = productImage || [];
        const settings = {
            pauseOnHover: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1000,
            fade: true,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };
        return (
            <div className="imgProduct d-flex flex-column align-items-center justify-content-center"  >
                <div id="carouselExampleIndicators" className="img-fluid carousel slide" data-ride="carousel">
                    <Slider {...settings} style={{ width: "100%" }}>
                        {imgURL.map((path, index) => {
                            return (
                                <div key={index} className="borderImgCarousel">
                                    <img style={{ width: "100%", height: "auto" }} src={path} alt={index} />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default CarouselImgProduct;