import React, { Component } from "react";
import Slider from "react-slick";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderImages: [],
            productName: "",
        };
    }

    componentDidMount() {
        const { visibilityProducts, fabricsInfo, match } = this.props;
        let productID = match.params.productID || "";
        productID = productID.replace(/ /gi, "");
        if (visibilityProducts.length > 0 && fabricsInfo.length > 0) {
            let currentSelectedProduct = visibilityProducts.find(
                (product) => product.productID === productID
            ) || { image: new Array(3).fill('') , fabricID: "" };
            let currentSelectedFabric = fabricsInfo.find(
                (fabric) => fabric.id === currentSelectedProduct.fabricID
            ) || { image: new Array(2).fill('') };
            let renderImages = [...currentSelectedProduct.image];
            renderImages.push(currentSelectedFabric.image[1]);
            this.setState({
                renderImages,
                productName: currentSelectedProduct.name,
            });
        }
    }

    render() {
        const { renderImages, productName } = this.state;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        };
        console.log('renderImages :>> ', renderImages);
        console.log('productName :>> ', productName);
        return (
            <div id="myModal" className="modal">
                <div
                    className="d-flex flex-column justify-content-center align-items-end"
                    style={{ width: "100vw", height: "10vh" }}
                >
                    <span
                        className="closeModal"
                        onClick={() => window.history.back()}
                    >
                        &times;
                    </span>
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
