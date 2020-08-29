import { updateDefaultProducts } from "actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDefaultProducts } from "services/Firebase API/basic";
import BannerContainer from "./Bannner";
import ListContainer from "./List";
import NavbarContainer from "./Navbar";
import OptionsContainer from "./Options";

function DesignsContainer() {
    /*--------------*/
    const defaultProductsLength = useSelector(
        (state) => state.common.defaultProducts.length
    );
    /*--------------*/
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        async function _fetchDefaultProducts() {
            try {
                const fetchedDefaultProducts = await fetchDefaultProducts();
                if (fetchedDefaultProducts.length > 0) {
                    /*--------------*/
                    const action_updateDefaultProducts = updateDefaultProducts(
                        fetchedDefaultProducts
                    );
                    dispatch(action_updateDefaultProducts);
                }
            } catch (error) {
                console.log("error.message :>> ", error.message);
            }
        }
        /*--------------*/
        if (defaultProductsLength < 1) {
            _fetchDefaultProducts();
        }
    }, [defaultProductsLength]);

    return (
        <div className="l-designs">
            <NavbarContainer />
            <BannerContainer />
            <OptionsContainer />
            <ListContainer />
        </div>
    );
}

export default DesignsContainer;
