import InfoDesktop from "components/Pages/Selection/Desktop/Info";
import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDesignOwner } from "services/FirebaseAPI/basic";
import { updateSelectedProduct } from "actions";
import { modifyPrice } from "services/CommonFunctions";

function InfoContainerDesktop() {
    /*--------------*/
    const renderProduct = useSelector((state) => state.selection.renderProduct);
    const selectedProduct = useSelector(
        (state) => state.selection.selectedProduct
    );
    /*--------------*/
    const [designedBy, setDesignedBy] = useState("");
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        async function _fetchDesignOwner() {
            try {
                const designedBy = await fetchDesignOwner(
                    renderProduct.designID
                );
                /*--------------*/
                setDesignedBy(designedBy);
            } catch (error) {}
        }
        /*--------------*/
        if (renderProduct) {
            _fetchDesignOwner();
        }
    }, [renderProduct]);
    /*********************************
     *  Description: update Selected Product to store
     *
     *
     *  Call by:
     */
    function onConfirmClick() {
        if (renderProduct) {
            /*--------------*/
            const { name, image, price, productID } = renderProduct;
            let info = {
                name,
                image,
                price,
                productID,
            };
            const action_updateSelectedProduct = updateSelectedProduct(info);
            dispatch(action_updateSelectedProduct);
        }
    }
    /************_END_****************/
    /*--------------*/
    if (!renderProduct) return <Fragment />;
    const { name, price, productID } = renderProduct;
    let modifiedPrice = modifyPrice(price);
    return (
        <section className="l-selection__Info-desktop">
            <InfoDesktop
                productID={productID}
                name={name}
                price={modifiedPrice}
                designedBy={designedBy}
                onConfirmClick={onConfirmClick}
            />
        </section>
    );
}

export default InfoContainerDesktop;
