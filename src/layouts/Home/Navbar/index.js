import { updateLoginDisplayStatus, updatePageFixedTopStatus } from "actions";
import NavbarShopping from "components/Navbar/NavbarShopping";
import React from "react";
import { useDispatch } from "react-redux";

function NavbarContainer() {
    /*--------------*/
    const dispatch = useDispatch();
    /*********************************
     *  Description: handle login display status change
     *
     *
     *  Call by:
     */
    function onLoginDisplayStatusChange() {
        /*--------------*/
        const action_updateLoginDisplayStatus = updateLoginDisplayStatus();
        dispatch(action_updateLoginDisplayStatus);
        /*--------------*/
        const action_updatePageFixedTopStatus = updatePageFixedTopStatus();
        dispatch(action_updatePageFixedTopStatus);
    }
    /************_END_****************/
    return (
        <section className="l-home__navbar">
            <NavbarShopping onLoginDisplayStatusChange={onLoginDisplayStatusChange} />
        </section>
    );
}

export default NavbarContainer;
