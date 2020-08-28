import { updateErrorStatus, updateOrder, updateShippingInfo } from "actions";
import InformationInput from "components/Pages/Information/Input";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function InputContainer() {
    /*--------------*/
    const currentCartList =
        JSON.parse(window.localStorage.getItem("cart")) || null;
    const rememberedShippingInfo =
        JSON.parse(window.localStorage.getItem("shippingInfo")) || null;
    /*--------------*/
    const shippingInfo = useSelector((state) => state.cart.shippingInfo);
    const isNotValidInfo = useSelector((state) => state.cart.isNotValidInfo);
    /*--------------*/
    const [isRemember, setIsRemember] = useState(
        rememberedShippingInfo !== null
    );
    const [renderShippingInfo, setRenderShippingInfo] = useState(shippingInfo);
    const [isConfirmClicked, setIsConfirmClicked] = useState(false);
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        /*--------------*/
        if (rememberedShippingInfo) {
            /*--------------*/
            setRenderShippingInfo(rememberedShippingInfo);
            /*--------------*/
            const action_updateShippingInfo = updateShippingInfo(
                rememberedShippingInfo
            );
            dispatch(action_updateShippingInfo);
        }
    }, []);
    /*--------------*/
    /*********************************
     *  Description: handle input change
     *
     *
     *  Call by:
     */
    function onInputChange(e) {
        /*--------------*/
        const value = e.target.value;
        const name = e.target.name;
        /*--------------*/
        setIsConfirmClicked(false);
        if (value !== null && value !== undefined && name) {
            /*--------------*/
            let updatedShippingInfo = {
                ...shippingInfo,
                [name]: { value, isError: false },
            };
            /*--------------*/
            setRenderShippingInfo(updatedShippingInfo);
            /*--------------*/
            const action_updateShippingInfo = updateShippingInfo(
                updatedShippingInfo
            );
            dispatch(action_updateShippingInfo);
        }
        /*--------------*/
    }
    /************_END_****************/

    /*********************************
     *  Description: handle shipping info validation
     *
     *
     *  Call by:
     */
    function onShippingInfoValidate() {
        setIsConfirmClicked(true);
        if (!isNotValidInfo) {
            /*--------------*/
            let updatedRememberInfo = { ...shippingInfo };
            if (!isRemember) {
                updatedRememberInfo = null;
            }
            window.localStorage.setItem(
                "shippingInfo",
                JSON.stringify(updatedRememberInfo)
            );
        }
    }
    /************_END_****************/

    /*********************************
     *  Description: handle remember check status
     *
     *
     *  Call by:
     */
    function onRememberChange() {
        /*--------------*/
        setIsConfirmClicked(false);
        setIsRemember(!isRemember);
    }
    /************_END_****************/
    /*--------------*/
    if (!currentCartList) return <Redirect to="/cart" />;
    return (
        <section className="l-information__input">
            <InformationInput
                shippingInfo={renderShippingInfo}
                onInputChange={onInputChange}
                onShippingInfoValidate={onShippingInfoValidate}
                isNotValidInfo={isNotValidInfo}
                onRememberChange={onRememberChange}
                isRemember={isRemember}
                isConfirmClicked={isConfirmClicked}
            />
        </section>
    );
}

export default InputContainer;
