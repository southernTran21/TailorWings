import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import ButtonLoadMore from "components/Button/LoadMore";

ProductList.propTypes = {
    title: PropTypes.string,
    productList: PropTypes.array,
    onMoreClick: PropTypes.func,
    buttonName: PropTypes.string,
};

ProductList.defaultProps = {
    title: "",
    productList: [],
    onMoreClick: null,
    buttonName: ""
};

function ProductList(props) {
    /*--------------*/
    if (!props.onMoreClick) return <div className="c-product-list"></div>;
    /*--------------*/
    return (
        <div className="c-product-list">
            <p className="c-product-list__title">{props.title}</p>
            <ul className="c-product-list__list">
                {props.productList.map((product, index) => {
                    /*--------------*/
                    const { name, image, id } = product;
                    /*--------------*/
                    return (
                        <ProductItem
                            key={index}
                            name={name}
                            image={image}
                            id={id}
                        />
                    );
                })}
            </ul>
            <div className="c-product-list__button">
                {props.productList.length > 0 ? (
                    <ButtonLoadMore loadMore={props.onMoreClick} buttonName={props.buttonName} />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default ProductList;
