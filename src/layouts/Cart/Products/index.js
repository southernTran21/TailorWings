import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Products from "components/Pages/Cart/Products";

ProductsContainer.propTypes = {
    cartList: PropTypes.array,
};

ProductsContainer.defaultProps = {
    cartList: null,
};

function ProductsContainer(props) {
    if (!props.cartList) return <Fragment />;
    return (
        <section className="l-cart__products">
            <Products productList={props.cartList} />
        </section>
    );
}

export default ProductsContainer;
