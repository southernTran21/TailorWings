import React, { Component } from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const CAT_ID = ["all", "damom", "damxoe", "damsuong"];

export default class Categories extends Component {
    render() {
        let { isRenderProductsEmpty, currentActiveCategory } = this.props;
        if (isRenderProductsEmpty && currentActiveCategory === "all") {
            currentActiveCategory = null;
        }
        let activeCategory = new Array(4).fill(false);
        if (currentActiveCategory != null) {
            let activeIndex = CAT_ID.indexOf(currentActiveCategory);
            activeCategory[activeIndex] = true;
        }
        return (
            <div className="categories_wrapper d-flex justify-content-center align-items-center">
                <Link
                    style={{
                        height: "fit-content",
                        width: "fit-content",
                        border: "none",
                        textDecoration: "none"
                    }}
                    to={{
                        pathname: "/shopping-store",
                        search: "?cat=all&search="
                    }}
                    onClick={() => this.props.categoryActiveHandling("all")}
                >
                    <div name="all" className="image">
                        <img src="" alt="all" />
                    </div>
                </Link>
                <Link
                    style={{
                        height: "fit-content",
                        width: "fit-content",
                        border: "none",
                        textDecoration: "none"
                    }}
                    to={{
                        pathname: "/shopping-store",
                        search: "?cat=damom&search="
                    }}
                    onClick={() => this.props.categoryActiveHandling("damom")}
                >
                    <div name="damom" className="image">
                        <img src="" alt="damom" />
                    </div>
                </Link>
                <Link
                    style={{
                        height: "fit-content",
                        width: "fit-content",
                        border: "none",
                        textDecoration: "none"
                    }}
                    to={{
                        pathname: "/shopping-store",
                        search: "?cat=damxoe&search="
                    }}
                    onClick={() => this.props.categoryActiveHandling("damxoe")}
                >
                    <div name="damxoe" className="image">
                        <img src="" alt="damxoe" />
                    </div>
                </Link>
                <Link
                    style={{
                        height: "fit-content",
                        width: "fit-content",
                        border: "none",
                        textDecoration: "none"
                    }}
                    to={{
                        pathname: "/shopping-store",
                        search: "?cat=damsuong&search="
                    }}
                    onClick={() => this.props.categoryActiveHandling("damsuong")}
                >
                    <div name="damsuong" className="image">
                        <img src="" alt="damsuong" />
                    </div>
                </Link>
            </div>
        );
    }
}
