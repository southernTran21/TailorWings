import { updateQuantity } from "actions";
import SizeInfo from "components/Pages/Size/Info";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

function InfoContainer() {
    /*--------------*/
    const selectedProduct = useSelector(
        (state) => state.selection.selectedProduct
    );
    const quantity = useSelector((state) => state.size.quantity);
    /*--------------*/
    const dispatch = useDispatch();
    /*********************************
     *  Description: handle quantity change
     *
     *
     *  Call by:
     */
    function onQuantityChange(quantity) {
        if (!isNaN(quantity)) {
            /*--------------*/
            const action_updateQuantity = updateQuantity(quantity);
            dispatch(action_updateQuantity);
            /*--------------*/
        }
    }
    /************_END_****************/
    if (!selectedProduct) return <Fragment />;
    const { name, price } = selectedProduct;
    return (
        <div className="l-size__info">
            <SizeInfo
                name={name}
                price={price}
                quantity={quantity}
                onQuantityChange={onQuantityChange}
            />
        </div>
    );
}

export default InfoContainer;
