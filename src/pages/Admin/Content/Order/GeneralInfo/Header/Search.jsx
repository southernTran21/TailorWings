import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removePunctuation } from "../../../../../../services/CommonFunction";
import * as actions from "../../../../../../actions";

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const typingTimeoutRef = useRef(null);
    const orderList =
        useSelector((state) => state.adminOrderReducer.orderList) || [];
    const dispatch = useDispatch();

    function handleSearch(e) {
        /* set input value to searchItem */
        const value = e.target.value;
        setSearchTerm(value);

        /* check whether setTimeout is counting and clear */
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        /* counting for 300ms without typing from user => update renderList to redux store */
        typingTimeoutRef.current = setTimeout(() => {
            const newRenderList = handleFilter(orderList, value);

            const updateRenderList = actions.updateRenderList(newRenderList);
            dispatch(updateRenderList);
        }, 300);
    }

    function handleFilter(searchList, searchTerm) {
        if (searchTerm && searchTerm !== "") {
            const newRenderList = searchList.filter((order) => {
                /* modified searchItem */
                let searchModified = removePunctuation(
                    searchTerm.toLowerCase()
                );
                searchModified = searchModified.replace(/-/gi, "");
                /* modified cusName */
                let cusNameMofified = removePunctuation(
                    order.cusName.toLowerCase()
                );
                cusNameMofified = cusNameMofified.replace(/-/gi, "");
                /* modified orderID */
                let orderIDModified = removePunctuation(
                    order.orderID.toLowerCase()
                );
                orderIDModified = orderIDModified.replace(/-/gi, "");

                return (
                    cusNameMofified.search(searchModified) != -1 ||
                    orderIDModified.search(searchModified) != -1
                );
            });
            if (newRenderList) {
                return newRenderList;
            } else {
                return searchList;
            }
        } else {
            return searchList;
        }
    }

    return (
        <div>
            <hr />
            <h2>Search</h2>
            <form>
                <input type="text" value={searchTerm} onChange={handleSearch} />
            </form>
        </div>
    );
}

export default Search;
