import React, { Fragment, useState, useEffect } from "react";
import FooterContainer from "./Footer";
import NavBarContainer from "./Navbar";
import ProductsContainer from "./Products";
import SummaryContainer from "./Summary";
import VoucherContainer from "./Voucher";
import { useSelector, useDispatch } from "react-redux";
import { modifyPrice, countTotalPrice } from "services/CommonFunctions";
import { message } from "antd";
import { updateOrder } from "actions";

function CartContainer() {
    /*--------------*/
    const voucher = useSelector((state) => state.cart.voucher);
    const order = useSelector((state) => state.cart.order);
    const cartUpdateFlag = useSelector((state) => state.size.cartUpdateFlag);
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    const [cartList, setCartList] = useState(
        JSON.parse(window.localStorage.getItem("cart")) || []
    );
    /*--------------*/
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        let newCartList = JSON.parse(window.localStorage.getItem("cart")) || [];
        if (newCartList) {
            setCartList(newCartList);
        }
    }, [cartUpdateFlag]);
    /*--------------*/

    if (!cartList) return <Fragment />;
    /*--------------*/
    let totalPrice = countTotalPrice(cartList);
    let modifiedTotalPrice = modifyPrice(totalPrice);
    /*--------------*/
    let discountPrice = voucher
        ? Number((totalPrice * voucher.value) / 100)
        : 0;
    let modifiedDiscountPrice = modifyPrice(discountPrice);
    /*--------------*/
    let finalPrice = totalPrice - discountPrice;
    let modifiedFinalPrice = modifyPrice(finalPrice);
    /*--------------*/
    /*********************************
     *  Description: handle order confirm and navigate to next page
     *
     *
     *  Call by:
     */
    function onConfirm() {
        /*--------------*/
        if (order) {
            /*--------------*/
            let updatedOrder = { ...order };
            updatedOrder.detail = [...cartList];
            updatedOrder.price = {
                totalPrice,
                discountPrice,
                finalPrice,
            };
            /*--------------*/
            if (updatedOrder.detail.length > 0) {
                const action_updateOrder = updateOrder(updatedOrder);
                dispatch(action_updateOrder);
            } else {
                message.error("Hiện không có sản phẩm nào!");
            }
        } else {
            message.error("Lỗi!");
        }
    }
    /************_END_****************/
    return (
        <div className="l-cart">
            <NavBarContainer />
            <ProductsContainer cartList={cartList} />
            <VoucherContainer />
            <SummaryContainer
                totalPrice={modifiedTotalPrice}
                discountPrice={modifiedDiscountPrice}
                voucher={voucher}
            />
            <FooterContainer
                finalPrice={modifiedFinalPrice}
                onConfirm={onConfirm}
            />
        </div>
    );
}

export default CartContainer;
