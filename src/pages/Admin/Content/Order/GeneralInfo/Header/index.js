import React from "react";
import Search from "./Search";
import Title from "./Title";

function Header() {
    return (
        <div className='admin-order-general__header d-flex justify-content-between align-items-center'>
            <Title/>
            <Search />
        </div>
    );
}

export default Header;
