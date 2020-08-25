import ProductImages from "components/Pages/Size/ProductImages";
import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "actions";
import { message } from "antd";
import { history } from "services/CommonParameter";

function ProductImagesContainer() {
    /*--------------*/
    const selectedProduct = useSelector(
        (state) => state.selection.selectedProduct
    );
    const size = useSelector((state) => state.size.size);
    const bodyMetric = useSelector((state) => state.size.bodyMetric);
    const quantity = useSelector((state) => state.size.quantity);
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/

    /*********************************
     *  Description: handle adding new product to cart
     *
     *
     *  Call by:
     */
    function onAddToCart() {
        const isBodyMetricFullFilled =
            Object.values(bodyMetric).indexOf(0) < 0 &&
            Object.values(bodyMetric).indexOf("") < 0;
        const isSizeSelected = size.id !== "modify";
        console.log('isBodyMetricFullFilled :>> ', isBodyMetricFullFilled);
        console.log('isSizeSelected :>> ', isSizeSelected);
        if (isBodyMetricFullFilled || isSizeSelected) {
            /*--------------*/
            const action_addToCart = addToCart(selectedProduct);
            dispatch(action_addToCart);
            setTimeout(() => {
                history.push("/cart");
            }, 500);
        } else {
            message.error("Vui lòng chọn size chuẩn hoặc cung cấp size đo!");
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }

    /************_END_****************/

    if (!selectedProduct) return <Fragment />;
    return (
        <div className="l-size__product-images">
            <ProductImages
                images={selectedProduct.image}
                onAddToCart={onAddToCart}
            />
        </div>
    );
}

export default ProductImagesContainer;
