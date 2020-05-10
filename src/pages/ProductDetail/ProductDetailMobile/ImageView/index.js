import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { removePunctuation } from "../../../../services/CommonFunction";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderImages: [],
            productName: "",
            backSearch: "?design=&fabric=",
        };
    }

    componentDidMount() {
        const { visibilityProducts, fabricsInfo, match } = this.props;
        /* ------------- */
        let productID = match.params.productID || "";
        productID = productID.replace(/ /gi, "");
        /* ------------- */
        if (visibilityProducts.length > 0 && fabricsInfo.length > 0) {
            let currentSelectedProduct = visibilityProducts.find(
                (product) => product.productID === productID
            ) || { image: [], fabricID: "" };
            /* ------------- */
            let currentSelectedFabric = fabricsInfo.find(
                (fabric) => fabric.id === currentSelectedProduct.fabricID
            ) || { image: [] };
            /* ------------- */
            let renderImages = [...currentSelectedProduct.image];
            renderImages.push(currentSelectedFabric.image[1]);
            /* ------------- */
            let backSearch = `?design=${currentSelectedProduct.designID}&fabric=${currentSelectedProduct.fabricID}`;
            /* ------------- */
            this.setState({
                renderImages,
                productName: currentSelectedProduct.name,
                backSearch,
            });
        }
    }

    render() {
        let { renderImages, productName, backSearch } = this.state;
        const { location } = this.props;
        /* ------------- */
        if (productName != null && productName !== "") {
            productName = removePunctuation(productName.toLowerCase());
            productName.replace(/ /gi, "");
        }
        /* ------------- */
        let pathName =
            location.from === "fabric"
                ? `/product-detail/fabric-selection/${productName}`
                : `/product-detail/confirm-selection/${productName}`;
        /* ------------- */
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        };
        /* ------------- */
        return (
            <div id="myModal" className="modal">
                <div
                    className="d-flex flex-column justify-content-center align-items-end"
                    style={{ width: "100vw", height: "10vh" }}
                >
                    <Link
                        to={{
                            pathname: pathName,
                            search: backSearch,
                        }}
                    >
                        <span className="closeModal">&times;</span>
                    </Link>
                </div>
                <Slider {...settings}>
                    {renderImages.map((image, index) => {
                        return (
                            <div key={index} className="image-wrapper">
                                <img
                                    key={index}
                                    className="modal-content"
                                    id="img01"
                                    src={image}
                                    alt={productName}
                                />
                            </div>
                        );
                    })}
                </Slider>
                <div id="caption" style={{ width: "100vw", height: "10vh" }} />
            </div>
        );
    }
}

export default index;
