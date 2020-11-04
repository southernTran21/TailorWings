import ButtonLoadMore from "components/Button/LoadMore";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import DesignItem from "./DesignItem";

Designs.propTypes = {
    title: PropTypes.string,
    renderProducts: PropTypes.object,
    isLoadMore: PropTypes.bool,
    loadMore: PropTypes.func,
};

Designs.defaultProps = {
    title: "",
    renderProducts: { products: [], isMax: false },
    isLoadMore: false,
    loadMore: () => console.log('Load more function does not exist'),
};

function Designs(props) {
    /*--------------*/
    if (!props.renderProducts.products.length > 0)
        return (
            <div className="c-designs">
                <h2 className="c-designs__title">Không có sản phẩm phù hợp!</h2>
            </div>
        );
    const { isMax, products } = props.renderProducts;
    return (
        <div className="c-designs">
            <h2 className="c-designs__title">{props.title}</h2>
            <ul className="c-designs__list">
                {products.map((product, index) => {
                    return <DesignItem product={product} key={index} />;
                })}
            </ul>
            <div className="c-designs__button">
                {props.isLoadMore ? (
                    isMax ? (
                        <Fragment />
                    ) : (
                        <ButtonLoadMore loadMore={props.loadMore || ""} />
                    )
                ) : (
                    <Link
                        to={{
                            pathname: "/designs",
                            search: "?cat=all",
                        }}
                    >
                        <ButtonLoadMore />
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Designs;
