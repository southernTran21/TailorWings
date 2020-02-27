import React, { Component } from 'react';
import { getSupportedFabrics } from '../../services/ProductDetail';
import './MultiCarousel.scss';
import Slider from "react-slick";
import classNames from 'classnames';
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

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // focusOnSelect: true,
    // swipeToSlide: true,
    // swipe: true
};

export class MultiCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMulti: false,
            isSlickGoTo: false,
            slidesToShow: 1,
            designID: '',
            supportedFabrics: [],
        }
    }

    static getDerivedStateFromProps(props, state) {
        const { currentFabricID, currentDesignID, designsInfo, fabricsInfo } = props;
        let { slidesToShow, isMulti, supportedFabrics, designID } = state;
        if (fabricsInfo !== [] && currentFabricID !== "" && designsInfo !== "" && currentDesignID !== "") {
            designID = currentDesignID;
            let currentDesignInfo = designsInfo.find((design) => {
                return design.id === currentDesignID;
            })
            supportedFabrics = fabricsInfo.filter((fabric) => {
                if (currentDesignInfo.fabricType.includes(fabric.type)) {
                    return fabric;
                }
            })
            let currentFabricIndex = supportedFabrics.findIndex(fabric => fabric.id === currentFabricID);
            let targetIndex = 0;
            if (currentFabricIndex !== targetIndex) {
                let temp = supportedFabrics[targetIndex];
                supportedFabrics[targetIndex] = supportedFabrics[currentFabricIndex];
                supportedFabrics[currentFabricIndex] = temp;
            }
            if (supportedFabrics.length > 3) {
                slidesToShow = 3;
                isMulti = true;
            } else {
                slidesToShow = supportedFabrics.length;
                isMulti = false
            }
            return {
                isMulti,
                slidesToShow,
                designID,
                supportedFabrics,
            }
        }
        return null;
    }

    // componentDidMount() {
    //     const { currentFabricID, designInfo, fabricsInfo } = this.props;
    //     let { slidesToShow, isMulti, supportedFabrics, currentFabricIndex, designID } = this.state;

    //     if (fabricsInfo !== [] && currentFabricID !== "" && designInfo !== "") {
    //         designID = designInfo.id;
    //         supportedFabrics = fabricsInfo.filter((fabric) => {
    //             if (designInfo.fabricType.includes(fabric.type)) {
    //                 return fabric;
    //             }
    //         })
    //         currentFabricIndex = supportedFabrics.findIndex(fabric => fabric.id === currentFabricID);
    //         let lastIndex = supportedFabrics.length - 1;
    //         if (currentFabricIndex !== lastIndex) {
    //             let temp = supportedFabrics[lastIndex];
    //             supportedFabrics[lastIndex] = supportedFabrics[currentFabricIndex];
    //             supportedFabrics[currentFabricIndex] = temp;
    //         }
    //         if (supportedFabrics.length > 3) {
    //             slidesToShow = 3;
    //             isMulti = true;
    //         } else {
    //             slidesToShow = supportedFabrics.length;
    //             isMulti = false
    //         }
    //     }
    //     this.setState({
    //         isMulti,
    //         slidesToShow,
    //         designID,
    //         supportedFabrics,
    //         currentFabricIndex
    //     })
    // }


    render() {
        const { supportedFabrics, slidesToShow, isMulti, designID } = this.state;
        return (
            // <div></div>
            <div className={classNames("multiCarousel", { onlyOneSlide: !isMulti })}>
                <Slider initialSlide={0} {...settings} slidesToShow={slidesToShow} slidesToScroll={slidesToShow} >
                    {supportedFabrics.map((fabric, index) => {
                        if (fabric != null) {
                            return (
                                <div key={index} className="borderImgMulti" >
                                    <Link style={{ width: "100%", height: "100%" }} to={{
                                        pathname: "/product-detail",
                                        search: `?id=${designID}&pattern=${fabric.id}`
                                    }}>
                                        <img src={fabric.image[1]} alt={fabric.name} />
                                    </Link>
                                </div>
                            )
                        }
                    })}
                </Slider>
            </div>
        );
    }
}

export default MultiCarousel;
