import SelectionInfo from "components/Pages/Selection/Mobile/Info";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDesignOwner } from "services/Firebase API/basic";
import { modifyPrice } from "services/CommonFunctions";
import { updateSelectedProduct } from "actions";

function InfoContainer() {
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
        <div className="l-selection__info">
            <SelectionInfo
                productID={productID}
                name={name}
                price={modifiedPrice}
                designedBy={designedBy}
                onConfirmClick={onConfirmClick}
            />
        </div>
    );
}

export default InfoContainer;
