import React, { Component } from 'react';
import Slider from "react-slick";
import './RelatedCarousel.scss';
import { Link } from 'react-router-dom';

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

export class RelatedCarousel extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        };
        const { title, relatedProducts, designsInfo } = this.props;
        let test = relatedProducts;
        test = test.concat(relatedProducts);
        test = test.concat(relatedProducts);
        if (test != null) {
            if (test.length > 6) {
                settings.slidesToShow = 6;
                settings.slidesToScroll = 6;
            } else {
                settings.slidesToShow = test.length;
                settings.slidesToScroll = test.length;
            }
        }
        return (
            <div className="relatedCarousel">
                <div className="sectionTitle text-left">
                    <h2>{title}</h2>
                </div>
                <div className="d-flex justify-content-center flex-nowrap">
                    <Slider {...settings}>
                        {test.map((product, index) => {
                            if (product != null) {
                                let modifiedPrice = product.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                                let name = ""
                                if (designsInfo != null) {
                                    let currentDesign = designsInfo.find((design) => {
                                        return design.id === product.designID;
                                    })
                                    if (currentDesign != null) {
                                        name = currentDesign.name;
                                    }
                                }
                                return (
                                    <div key={index} className="borderImgMulti">
                                        <div style={{ height: "auto", width: "100%" }}>
                                            <div className="imgRelatedProduct">
                                                <Link to={`/product-detail?id=${product.designID}&pattern=${product.fabricID}`}>
                                                    <img style={{ width: "100%", height: "auto" }} src={product.image[0]} alt={product.designID} />
                                                </Link>
                                            </div>
                                            <div className="d-flex flex-column align-items-start justify-content-between">
                                                <p className="text-align-left mb-0" style={{ width: "100%" }}>{name}</p>
                                                <p className="text-align-left mb-0" style={{ width: "100%" }}>
                                                    <span className="mr-1">{modifiedPrice}</span>
                                                    VND
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default RelatedCarousel;
