import React from "react";
import Search from "./Search";
import Title from "./Title";

function Header() {
    return (
        <div className="admin-order-general__header">
            <Title />
            <Search />
        </div>
    );
}

export default Header;
