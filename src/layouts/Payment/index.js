import React from "react";
import AddressPaymentContainer from "./Address";
import FooterPaymentContainer from "./Footer";
import NavbarPaymentContainer from "./Navbar";
import OrderInfoContainer from "./OrderInfo";
import PaymentMethodContainer from "./PaymentMethod";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { updatePaymentMethod, resetCartState } from "actions";
import { modifyPrice, countTotalPrice } from "services/CommonFunctions";
import { addNewOrder, setOrderDetail } from "services/Firebase API/paymentPage";
import uniqid from "uniqid";
import { setDocument } from "services/Firebase API/basic";
import { history } from "services/CommonParameter";
import { message } from "antd";

function PaymentContainer() {
    /*--------------*/
    const currentCartList =
        JSON.parse(window.localStorage.getItem("cart")) || null;
    const rememberedShippingInfo =
        JSON.parse(window.localStorage.getItem("shippingInfo")) || null;
    /*--------------*/
    const shippingInfo = useSelector((state) => state.cart.shippingInfo);
    const paymentMethod = useSelector((state) => state.cart.paymentMethod);
    const voucher = useSelector((state) => state.cart.voucher);
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    let currentShippingInfo = shippingInfo
        ? { ...shippingInfo }
        : rememberedShippingInfo
        ? rememberedShippingInfo
        : null;
    /*--------------*/
    let price = {
        totalPrice: 0,
        discountPrice: 0,
        finalPrice: 0,
    };
    if (currentCartList) {
        /*--------------*/
        price.totalPrice = countTotalPrice(currentCartList);
        /*--------------*/
        price.discountPrice = voucher
            ? (price.totalPrice * voucher.value) / 100
            : 0;
        /*--------------*/
        price.finalPrice = price.totalPrice - price.discountPrice;
        /*--------------*/
        price.totalPrice =
            price.totalPrice > 0 ? modifyPrice(price.totalPrice) : 0;
        price.discountPrice =
            price.discountPrice > 0 ? modifyPrice(price.discountPrice) : 0;
        price.finalPrice =
            price.finalPrice > 0 ? modifyPrice(price.finalPrice) : 0;
    }
    /*--------------*/

    /*********************************
     *  Description: handle payment method change
     *
     *
     *  Call by:
     */
    function onPaymentMethodChange(value) {
        /*--------------*/
        const action_updatePaymentMethod = updatePaymentMethod(value);
        dispatch(action_updatePaymentMethod);
    }
    /************_END_****************/

    /*********************************
     *  Description: handle send order to server
     *
     *
     *  Call by:
     */
    function onOrderConfirm() {
        /*--------------*/
        let newOrder = {
            shippingInfo: null,
            doneDate: null,
            orderDate: null,
            detailID: null,
            paymentMethod: 1,
            status: "new",
            voucher: null,
            discount: 0,
            price: null,
        };
        let orderDetail = {
            id: null,
            items: null,
        };
        /*--------------*/
        orderDetail.id = uniqid.process();
        orderDetail.items = currentCartList
            ? JSON.stringify([...currentCartList])
            : null;
        /*--------------*/
        newOrder.shippingInfo = currentShippingInfo
            ? {
                  name: currentShippingInfo.name.value,
                  phone: currentShippingInfo.phone.value,
                  address: currentShippingInfo.address.value,
                  note: currentShippingInfo.note.value,
              }
            : null;
        newOrder.detailID = orderDetail.id;
        newOrder.paymentMethod = paymentMethod;
        newOrder.voucher = voucher ? voucher.code : null;
        newOrder.discount = voucher ? voucher.value : 0;
        newOrder.price = { ...price };

        /*--------------*/
        const isShippingInfoValid = !!newOrder.shippingInfo;
        const isItemsValid = !!orderDetail.items;
        const isOrderIDValid = !!orderDetail.id;
        /*--------------*/
        if (isShippingInfoValid && isItemsValid && isOrderIDValid) {
            Promise.all([
                setOrderDetail(orderDetail, orderDetail.id),
                addNewOrder(newOrder),
            ])
                .then(() => {
                    message.success("Giao dịch thành công!");
                    /*--------------*/
                    window.localStorage.removeItem("cart");
                    /*--------------*/
                    const action_resetCartState = resetCartState();
                    dispatch(action_resetCartState);
                    /*--------------*/
                    history.push("/order-success");
                })
                .catch((error) => {
                    message.error("Giao dịch lỗi, xin vui lòng thử lại!");
                    console.log("error :>> ", error);
                });
        }
    }
    /************_END_****************/
    /*--------------*/
    if (!currentCartList) return <Redirect to="/cart" />;
    if (!currentShippingInfo) return <Redirect to="/info" />;
    return (
        <div className="l-payment">
            <NavbarPaymentContainer />
            <div className="l-payment__section1">
                <OrderInfoContainer cartList={currentCartList} />
                <div className="l-payment__section2">
                    <AddressPaymentContainer
                        shippingInfo={currentShippingInfo}
                    />
                    <PaymentMethodContainer
                        onPaymentMethodChange={onPaymentMethodChange}
                        paymentMethod={paymentMethod}
                    />
                    <FooterPaymentContainer
                        price={price}
                        voucher={voucher}
                        onOrderConfirm={onOrderConfirm}
                    />
                </div>
            </div>
        </div>
    );
}

export default PaymentContainer;
