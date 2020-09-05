import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";
import { countTotalQuantity } from "services/CommonFunctions";
import { updateCart, deleteCartProduct } from "actions";
import { useDispatch } from "react-redux";

Products.propTypes = {
    productList: PropTypes.array,
};

Products.defaultProps = {
    productList: null,
};

function Products(props) {
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    if (!props.productList) return <Fragment />;
    /*--------------*/
    let totalQuantity = countTotalQuantity(props.productList);
    /*********************************
     *  Description: handle updating quantity or size
     *
     *
     *  Note:
     */
    function onProductUpdate(isQuantityChanged, index, value1, value2) {
        let updatedList = [...props.productList];
        /*--------------*/
        if (isQuantityChanged) {
            updatedList[index].quantity = value1;
        } else {
            updatedList[index].size = value1;
            updatedList[index].bodyMetric = value2;
        }
        /*--------------*/
        if (updatedList.length === props.productList.length) {
            /*--------------*/
            const action_updateCart = updateCart(updatedList);
            dispatch(action_updateCart);
        }
    }
    /************_END_****************/

    /*********************************
     *  Description: handle delete item
     *
     *
     *  Call by:
     */
    function onDelete(deletedIndex) {
        /*--------------*/
        let updatedList = [...props.productList];
        if (deletedIndex > -1 && deletedIndex <= updatedList.length) {
            updatedList.splice(deletedIndex, 1);
            /*--------------*/
            window.localStorage.setItem("cart", JSON.stringify(updatedList));
            /*--------------*/
            const action_deleteCartProduct = deleteCartProduct();
            dispatch(action_deleteCartProduct);
        }
    }
    /************_END_****************/
    return (
        <div className="c-cart-products">
            <h2 className="c-cart-products__title">{totalQuantity} Sản Phẩm</h2>
            <ul className="c-cart-products__list">
                {props.productList.map((product, index) => {
                    return (
                        <ProductItem
                            key={index}
                            product={product}
                            index={index}
                            onProductUpdate={onProductUpdate}
                            onDelete={onDelete}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default Products;
