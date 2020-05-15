import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removePunctuation } from "../../../../../../services/CommonFunction";
import * as actions from "../../../../../../actions";
import { Input } from "antd";

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
        <div className="admin-order-general__header__search">
            <svg
                width="1.32vw"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15.5325 14.4675L12.9825 11.925C13.8052 10.8768 14.2517 9.58249 14.25 8.25C14.25 7.06331 13.8981 5.90328 13.2388 4.91658C12.5795 3.92989 11.6425 3.16085 10.5461 2.70673C9.44975 2.2526 8.24335 2.13378 7.07946 2.36529C5.91558 2.5968 4.84648 3.16825 4.00736 4.00736C3.16825 4.84648 2.5968 5.91557 2.36529 7.07946C2.13378 8.24335 2.2526 9.44975 2.70673 10.5461C3.16085 11.6425 3.92989 12.5795 4.91658 13.2388C5.90328 13.8981 7.06331 14.25 8.25 14.25C9.58249 14.2517 10.8768 13.8052 11.925 12.9825L14.4675 15.5325C14.5372 15.6028 14.6202 15.6586 14.7116 15.6967C14.803 15.7347 14.901 15.7544 15 15.7544C15.099 15.7544 15.197 15.7347 15.2884 15.6967C15.3798 15.6586 15.4628 15.6028 15.5325 15.5325C15.6028 15.4628 15.6586 15.3798 15.6967 15.2884C15.7347 15.197 15.7544 15.099 15.7544 15C15.7544 14.901 15.7347 14.803 15.6967 14.7116C15.6586 14.6202 15.6028 14.5372 15.5325 14.4675ZM3.75 8.25C3.75 7.35999 4.01392 6.48996 4.50839 5.74994C5.00286 5.00992 5.70566 4.43314 6.52793 4.09254C7.35019 3.75195 8.25499 3.66284 9.12791 3.83647C10.0008 4.0101 10.8026 4.43869 11.432 5.06802C12.0613 5.69736 12.4899 6.49918 12.6635 7.3721C12.8372 8.24501 12.7481 9.14981 12.4075 9.97208C12.0669 10.7943 11.4901 11.4971 10.7501 11.9916C10.01 12.4861 9.14002 12.75 8.25 12.75C7.05653 12.75 5.91194 12.2759 5.06802 11.432C4.22411 10.5881 3.75 9.44348 3.75 8.25Z"
                    fill="#939FAC"
                />
            </svg>
            <Input placeholder="Filter Orders" />
        </div>
    );
}

export default Search;
