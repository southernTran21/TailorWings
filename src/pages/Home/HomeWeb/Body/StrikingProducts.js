import React, { Component } from "react";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";

export default class StrikingProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            swiper: null,
        };
    }

    getSwiper = (swiper) => {
        this.setState({
            swiper,
        });
    };

    onSlide = (type) => {
        const { swiper } = this.state;
        switch (type) {
            case "prev":
                swiper.slidePrev();
                break;
            case "next":
                swiper.slideNext();
                break;

            default:
                break;
        }
    };

    bestSellerContent = () => {
        let { bestSellerInfo, visibleProductsList } = this.props;
        return bestSellerInfo.map((product, index) => {
            let currentDesignID = product.designID;
            let totalSupportedFabric = visibleProductsList.filter(
                (visibleProduct) => {
                    let designID = visibleProduct.productID.substring(0, 4);
                    return designID === currentDesignID;
                }
            ).length;
            return (
                <div key={index} className="content-carousel">
                    <Link
                        to={{
                            pathname: "/product-detail",
                            search: `?id=${product.designID}&pattern=${product.fabricID}`,
                        }}
                        style={{
                            width: "100%",
                            height: "100%",
                            textDecoration: "none",
                            border: "none",
                        }}
                    >
                        <div className="image">
                            <img src={product.image} atl={product.name} />
                        </div>
                        <div className="end-carousel">
                            <div className="title d-flex flex-row justify-content-center align-items-center">
                                {product.name}
                            </div>
                            <div className="button d-flex justify-content-center align-items-center">
                                <span className="titleButton">
                                    {totalSupportedFabric + " MẪU VẢI"}
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            );
        });
    };
    render() {
        const params = {
            slidesPerView: "auto",
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
        };
        const { bestSellerInfo } = this.props;
        console.log('bestSellerInfo :>> ', bestSellerInfo);
        return (
            <div className="strikingProducts d-flex flex-column align-items-center fontMontserrat">
                <div className="title">
                    <span>Nổi bật trong tuần</span>
                </div>
                <div className="carousel-wraper d-flex align-items-center">
                    <div
                        className="iconLeft"
                        onClick={() => this.onSlide("prev")}
                    >
                        <svg
                            width="14"
                            height="22"
                            viewBox="0 0 14 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8332 21.4167C10.5526 21.4156 10.2751 21.3579 10.0173 21.2469C9.75957 21.1359 9.52689 20.974 9.33325 20.7709L1.29158 12.4375C0.909858 12.0481 0.696045 11.5245 0.696045 10.9792C0.696045 10.4339 0.909858 9.91029 1.29158 9.52085L9.62492 1.18752C9.81916 0.993273 10.0498 0.839189 10.3036 0.734063C10.5574 0.628937 10.8294 0.574829 11.1041 0.574829C11.3788 0.574829 11.6508 0.628937 11.9046 0.734063C12.1584 0.839189 12.389 0.993273 12.5832 1.18752C12.7775 1.38177 12.9316 1.61237 13.0367 1.86617C13.1418 2.11996 13.1959 2.39198 13.1959 2.66669C13.1959 2.94139 13.1418 3.21341 13.0367 3.46721C12.9316 3.721 12.7775 3.95161 12.5832 4.14585L5.70825 11L12.3332 17.875C12.7213 18.2654 12.9391 18.7934 12.9391 19.3438C12.9391 19.8942 12.7213 20.4222 12.3332 20.8125C12.1361 21.0081 11.9019 21.1623 11.6443 21.2661C11.3867 21.3698 11.1109 21.421 10.8332 21.4167Z"
                                fill="#FF6D3B"
                            />
                        </svg>
                    </div>
                    <div className="carouselStriking">
                        {bestSellerInfo.length > 0 ? (
                            <Swiper
                                {...params}
                                className="d-flex flex-column align-items-center"
                                getSwiper={this.getSwiper.bind(this)}
                            >
                                {this.bestSellerContent()}
                            </Swiper>
                        ) : (
                            ""
                        )}
                    </div>
                    <div
                        className="iconRight"
                        onClick={() => this.onSlide("next")}
                    >
                        <svg
                            width="14"
                            height="22"
                            viewBox="0 0 14 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.87495 21.4165C2.60077 21.4181 2.32898 21.3656 2.07515 21.2619C1.82132 21.1582 1.59045 21.0055 1.39579 20.8124C1.20052 20.6187 1.04553 20.3883 0.939764 20.1344C0.833996 19.8805 0.779541 19.6082 0.779541 19.3332C0.779541 19.0582 0.833996 18.7859 0.939764 18.532C1.04553 18.2781 1.20052 18.0477 1.39579 17.854L8.29162 10.9999L1.66662 4.10404C1.2786 3.7137 1.0608 3.18568 1.0608 2.63529C1.0608 2.0849 1.2786 1.55688 1.66662 1.16654C1.86029 0.971272 2.09071 0.816283 2.34459 0.710515C2.59846 0.604747 2.87076 0.550293 3.14579 0.550293C3.42081 0.550293 3.69312 0.604747 3.94699 0.710515C4.20086 0.816283 4.43128 0.971272 4.62495 1.16654L12.6666 9.49987C13.0483 9.88931 13.2622 10.4129 13.2622 10.9582C13.2622 11.5035 13.0483 12.0271 12.6666 12.4165L4.33329 20.7499C4.14629 20.9518 3.92114 21.1147 3.67083 21.2291C3.42052 21.3436 3.15002 21.4073 2.87495 21.4165Z"
                                fill="#FF6D3B"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}
