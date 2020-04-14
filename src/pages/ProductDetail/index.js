import React, { Component } from 'react'
import Media from 'react-media';
import ReactGA from 'react-ga';
import ProductDetailMobile from './ProductDetailMobile';
import ProductDetailWeb from './ProductDetailWeb/index';

import empty from "../../assets/imageSizeSelection/Asset 9.svg";
import XS from "../../assets/imageSizeSelection/size XS.svg";
import S from "../../assets/imageSizeSelection/size S.svg";
import M from "../../assets/imageSizeSelection/size M.svg";
import L from "../../assets/imageSizeSelection/size L.svg";
import XL from "../../assets/imageSizeSelection/size XL.svg";
import XXL from "../../assets/imageSizeSelection/size XXL.svg";

const sizeImages = [
    {
        id: "XS",
        image: XS
    },
    {
        id: "S",
        image: S
    },
    {
        id: "M",
        image: M
    },
    {
        id: "L",
        image: L
    },
    {
        id: "XL",
        image: XL
    },
    {
        id: "XXL",
        image: XXL
    },
    {
        id: 'empty',
        image: empty
    }
];

const initGA = () => {
    console.log('initGA');
    ReactGA.initialize('UA-159143322-2')
}

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search)
}

export default class ProductDetail extends Component {
    componentDidMount() {
        initGA();
        logPageView();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <Media queries={{ small: { maxWidth: 750 } }}>
                {matches =>
                    matches.small ?
                        (
                            <ProductDetailMobile
                                history={this.props.history}
                                visibilityProducts={this.props.visibilityProducts}
                                designsInfo={this.props.designsInfo}
                                fabricsInfo={this.props.fabricsInfo}
                                sizeImages={sizeImages}
                            />
                        ) :
                        (
                            <ProductDetailWeb
                                history={this.props.history}
                                visibilityProducts={this.props.visibilityProducts}
                                designsInfo={this.props.designsInfo}
                                fabricsInfo={this.props.fabricsInfo}
                                localStorageUpdatedHandling={this.props.localStorageUpdatedHandling}
                            />
                        )
                }
            </Media>
        )
    }
}
