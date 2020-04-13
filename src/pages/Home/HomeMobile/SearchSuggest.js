import React, { Component } from "react";
import IconLineChart from "../../../assets/iconImage/line-chart.svg";
import { removePunctuation } from "../../../services/CommonFunction";
import { Link } from "react-router-dom";
import "./home.scss";

const defaultSuggestion = [
    "Đầm suông Lucasta",
    "Đầm xòe Kelsey",
    "X005",
    "Đầm xòe Dilys",
    "Đầm ôm Donna"
];

export default class SearchSuggest extends Component {
    suggestionContent = () => {
        const { suggestedSearch, bestSellerInfo } = this.props;
        let content = "";
        if (suggestedSearch.length > 0) {
            content = suggestedSearch.map((suggestion, index) => {
                let name = suggestion;
                let url = suggestion.toLowerCase();
                url = removePunctuation(url);
                url = url.replace(/ /g, "-");
                return (
                    <Link
                        key={index}
                        style={{
                            border: "none",
                            textDecoration: "none",
                            width: "fit-content",
                            height: "fit-content"
                        }}
                        to={{
                            pathname: "/shopping-store",
                            search: `?cat=all&search=${url}`
                        }}
                        onClick={() => this.props.searchOpen()}
                    >
                        <span className="suggestion">{name}</span>
                    </Link>
                );
            });
        } else {
            content = bestSellerInfo.map((suggestion, index) => {
                let name = suggestion.name;
                let url = suggestion.name.toLowerCase();
                url = removePunctuation(url);
                url = url.replace(/ /g, "-");
                return (
                    <Link
                        key={index}
                        style={{
                            border: "none",
                            textDecoration: "none",
                            width: "fit-content",
                            height: "fit-content"
                        }}
                        to={{
                            pathname: "/shopping-store",
                            search: `?cat=all&search=${url}`
                        }}
                        onClick={() => this.props.searchOpen()}
                    >
                        <span className="suggestion">{name}</span>
                    </Link>
                );
            });
        }
        return content;
    };

    render() {
        return (
            <div className="seachSuggest-wraper">
                <div className="contentHeader d-flex flex-column">
                    <span>
                        <img src={IconLineChart} />
                        Đặt may nhiều
                    </span>
                    <div className={"suggestionContent d-flex flex-column"}>
                        {this.suggestionContent()}
                    </div>
                </div>
                <div className="topListProduct">
                    <div className="title">
                        <span>Sản Phẩm Ưa Chuộng</span>
                    </div>
                    <div className="bestSellerInfo-wrapper">
                        {this.props.bestSellerInfo.map((product, index) => {
                            return (
                                <div key={index} className="col-6">
                                    <Link
                                        style={{
                                            height: "fit-content",
                                            width: "fit-content",
                                            border: "none",
                                            textDecoration: "none"
                                        }}
                                        to={{
                                            pathname: "/product-detail",
                                            search: `?id=${product.designID}&pattern=${product.fabricID}`
                                        }}
                                    >
                                        <div className="imageProduct">
                                            <img
                                                src={product.image[0]}
                                                alt={product.productID}
                                            ></img>
                                        </div>
                                    </Link>
                                    <div className="titleProduct">
                                        <span>{product.name}</span>
                                    </div>
                                    <div className="button d-flex flex-row justify-content-center">
                                        <span>{`${product.totalSupportedFabric} mẫu vải`}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
