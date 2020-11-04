import { message } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countTotalPrice, modifyPrice } from "services/CommonFunctions";
import FooterContainer from "./Footer";
import NavBarContainer from "./Navbar";
import ProductsContainer from "./Products";
import SummaryContainer from "./Summary";
import VoucherContainer from "./Voucher";

function CartContainer() {
    /*--------------*/
    const voucher = useSelector((state) => state.cart.voucher);
    const cartUpdateFlag = useSelector((state) => state.size.cartUpdateFlag);
    const isCartDeleted = useSelector((state) => state.cart.isCartDeleted);
    /*--------------*/
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
    }, [cartUpdateFlag, isCartDeleted]);
    /*--------------*/
    console.log('cartList :>> ', cartList);
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
        if (cartList.length <= 0) {
            message.error("Hiện không có sản phẩm nào!");
        }
    }
    /************_END_****************/
    return (
        <div className="l-cart">
            <NavBarContainer />
            <div className="l-cart__section1">
                <ProductsContainer cartList={cartList} />
                <div className="l-cart__section2">
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
            </div>
        </div>
    );
}

export default CartContainer;
