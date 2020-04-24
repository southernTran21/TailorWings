import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Steps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectionStep: "fabric-selection",
            productName: "",
            urlSearch: "",
        };
    }

    componentDidMount() {
        const { history, match } = this.props;
        let selectionStep = window.location.pathname.match(
            /product-detail\/(.*)\b\//
        )[1];
        let productName = window.location.pathname.match(
            /selection\/(.*)\b/
        )[1];
        let urlSearch = window.location.search;
        this.setState({
            selectionStep,
            productName,
            urlSearch,
        });
        this.unlisten = history.listen((location) => {
            let selectionStep = location.pathname.match(
                /product-detail\/(.*)\b\//
            )[1];
            let productName = window.location.pathname.match(
                /selection\/(.*)\b/
            )[1];
            let urlSearch = location.search;
            this.setState({
                selectionStep,
                productName,
                urlSearch,
            });
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        const { selectionStep, productName, urlSearch } = this.state;
        let classStep = ["", ""];
        if (selectionStep === "fabric-selection") {
            classStep[0] = "highlight step";
            classStep[1] = "opacityStep step";
        } else {
            classStep[0] = "step";
            classStep[1] = "highlight step";
        }
        return (
            <div className="steps d-flex justify-content-center align-items-center">
                <Link
                    to={{
                        pathname: "/shopping-store",
                        search: "?cat=all&search",
                    }}
                >
                    <span className="step">Chọn mẫu</span>
                </Link>
                <svg
                    width="10"
                    height="13"
                    viewBox="0 0 10 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.46 13C2.14597 12.9982 1.83587 12.93 1.55 12.8C1.24083 12.6637 0.977413 12.4413 0.791223 12.1594C0.605032 11.8774 0.503933 11.5479 0.5 11.21V2.79001C0.503933 2.45215 0.605032 2.12257 0.791223 1.84063C0.977413 1.55868 1.24083 1.33629 1.55 1.20001C1.90574 1.03198 2.30153 0.967256 2.69227 1.01323C3.083 1.05919 3.45297 1.214 3.76 1.46001L8.86 5.67001C9.05999 5.82923 9.22151 6.0315 9.33252 6.26177C9.44353 6.49203 9.50118 6.74438 9.50118 7.00001C9.50118 7.25564 9.44353 7.50798 9.33252 7.73825C9.22151 7.96852 9.05999 8.17079 8.86 8.33001L3.76 12.54C3.39238 12.8381 2.93331 13.0006 2.46 13Z"
                        fill="#FF6D3B"
                    />
                </svg>
                <Link
                    to={{
                        pathname: `/product-detail/fabric-selection/${productName}`,
                        search: `${urlSearch}`,
                    }}
                >
                    <span
                        className={classStep[0]}
                        onClick={this.onFabricNavigating}
                    >
                        Chọn vải
                    </span>
                </Link>
                <svg
                    width="10"
                    height="13"
                    viewBox="0 0 10 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.46 13C2.14597 12.9982 1.83587 12.93 1.55 12.8C1.24083 12.6637 0.977413 12.4413 0.791223 12.1594C0.605032 11.8774 0.503933 11.5479 0.5 11.21V2.79001C0.503933 2.45215 0.605032 2.12257 0.791223 1.84063C0.977413 1.55868 1.24083 1.33629 1.55 1.20001C1.90574 1.03198 2.30153 0.967256 2.69227 1.01323C3.083 1.05919 3.45297 1.214 3.76 1.46001L8.86 5.67001C9.05999 5.82923 9.22151 6.0315 9.33252 6.26177C9.44353 6.49203 9.50118 6.74438 9.50118 7.00001C9.50118 7.25564 9.44353 7.50798 9.33252 7.73825C9.22151 7.96852 9.05999 8.17079 8.86 8.33001L3.76 12.54C3.39238 12.8381 2.93331 13.0006 2.46 13Z"
                        fill="#FF6D3B"
                    />
                </svg>
                <span className={classStep[1]}>Chọn size</span>
                <svg
                    width="10"
                    height="13"
                    viewBox="0 0 10 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.46 13C2.14597 12.9982 1.83587 12.93 1.55 12.8C1.24083 12.6637 0.977413 12.4413 0.791223 12.1594C0.605032 11.8774 0.503933 11.5479 0.5 11.21V2.79001C0.503933 2.45215 0.605032 2.12257 0.791223 1.84063C0.977413 1.55868 1.24083 1.33629 1.55 1.20001C1.90574 1.03198 2.30153 0.967256 2.69227 1.01323C3.083 1.05919 3.45297 1.214 3.76 1.46001L8.86 5.67001C9.05999 5.82923 9.22151 6.0315 9.33252 6.26177C9.44353 6.49203 9.50118 6.74438 9.50118 7.00001C9.50118 7.25564 9.44353 7.50798 9.33252 7.73825C9.22151 7.96852 9.05999 8.17079 8.86 8.33001L3.76 12.54C3.39238 12.8381 2.93331 13.0006 2.46 13Z"
                        fill="#FF6D3B"
                    />
                </svg>
                <span className="opacityStep step">Đặt hàng</span>
            </div>
        );
    }
}
