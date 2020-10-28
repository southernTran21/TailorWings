import { updateDefaultProducts, updateSRC } from "actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDefaultProducts } from "services/FirebaseAPI/basic";
import BannerContainer from "./Bannner";
import ListContainer from "./List";
import NavbarContainer from "./Navbar";
import OptionsContainer from "./Options";

function DesignsContainer() {
    const location = window.location;
    /*--------------*/
    const defaultProductsLength = useSelector(
        (state) => state.common.defaultProducts.length
    );
    const selectionSrc = useSelector((state) => state.selection.src);
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
        if (selectionSrc.pathname !== "/designs") {
            const action_updateSrc = updateSRC({
                pathname: location.pathname,
                search: location.search,
            });
            dispatch(action_updateSrc);
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
