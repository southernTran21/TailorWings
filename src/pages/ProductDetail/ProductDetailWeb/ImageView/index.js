import { Button, Icon } from "antd";
import React, { Component } from "react";
import Slider from "react-slick";
import "./ImageView.scss";
import { Link } from "react-router-dom";
import { removePunctuation } from "../../../../services/CommonFunction";

export default class ImageView extends Component {
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
        let productID = match.params.productID || "";
        productID = productID.replace(/ /gi, "");
        if (visibilityProducts.length > 0 && fabricsInfo.length > 0) {
            let currentSelectedProduct = visibilityProducts.find(
                (product) => product.productID === productID
            ) || { image: [], fabricID: "" };
            let currentSelectedFabric = fabricsInfo.find(
                (fabric) => fabric.id === currentSelectedProduct.fabricID
            ) || { image: [] };
            let renderImages = [...currentSelectedProduct.image];
            renderImages.push(currentSelectedFabric.image[1]);
            let backSearch = `?design=${currentSelectedProduct.designID}&fabric=${currentSelectedProduct.fabricID}`;
            this.setState({
                renderImages,
                productName: currentSelectedProduct.name,
                backSearch,
            });
        }
    }

    render() {
        let { renderImages, productName, backSearch } = this.state;
        if (productName != null && productName !== "") {
            productName = removePunctuation(productName.toLowerCase());
            productName.replace(/ /gi, "");
        }
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        console.log("productName :>> ", productName);
        console.log('backSearch :>> ', backSearch);
        return (
            <div className="imageView-wrapper">
                <div className="back-btn d-flex justify-content-end">
                    <Button
                        onClick={() =>
                            // this.props.history.push(
                            //     `/product-detail/fabric-selection/${productName}${backSearch}`
                            // )
                            window.history.back()
                        }
                        className="buttonBack"
                    >
                        {/* <Link
                            to={{
                                pathname: `/product-detail/fabric-selection/${productName}`,
                                search: backSearch
                            }}
                        > */}
                        <Icon type="close" />
                        {/* </Link> */}
                    </Button>
                </div>
                <Slider {...settings}>
                    {renderImages.map((image, index) => {
                        return (
                            <div key={index} className="image-wrapper">
                                <img src={image} alt={productName} />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        );
    }
}
