import SelectionInfo from "components/Pages/Selection/Mobile/Info";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchDesignOwner } from "services/Firebase API/basic";
import { modifyPrice } from "services/CommonFunctions";

function InfoContainer() {
    /*--------------*/
    const renderProduct = useSelector((state) => state.selection.renderProduct);
    /*--------------*/
    const [designedBy, setDesignedBy] = useState("");
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
            } catch (error) {
                console.log("error.message :>> ", error.message);
            }
        }
        /*--------------*/
        if (renderProduct) {
            _fetchDesignOwner();
        }
    }, [renderProduct]);
    /*--------------*/
    if (!renderProduct) return <Fragment />;
    const { name, price } = renderProduct;
    let modifiedPrice = modifyPrice(price);
    return (
        <div className="l-selection__info">
            <SelectionInfo name={name} price={modifiedPrice} designedBy={designedBy} />
        </div>
    );
}

export default InfoContainer;
