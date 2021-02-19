import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Products from "components/Pages/Cart/Products";
import ListLoader from "components/Loader/List";

ProductsContainer.propTypes = {
    cartList: PropTypes.array,
};

ProductsContainer.defaultProps = {
    cartList: null,
};

function ProductsContainer(props) {
    /*--------------*/
    const [isReload, setIsReload] = useState(false);
    /*--------------*/
    /*********************************
     *  Description:
     *
     *
     *  Call by:
     */
    function onReload() {
        /*--------------*/
        setIsReload(true);
        /*--------------*/
        setTimeout(() => {
            /*--------------*/
            setIsReload(false);
            /*--------------*/
        }, 500);
        /*--------------*/
    }
    /************_END_****************/
    /*--------------*/
    if (isReload)
        return (
            <section className="l-cart__products">
                <ListLoader />
            </section>
        );
    /*--------------*/
    if (!props.cartList) return <Fragment />;
    /*--------------*/
    return (
        <section className="l-cart__products">
            <Products productList={props.cartList} onReload={onReload} />
        </section>
    );
}

export default ProductsContainer;
