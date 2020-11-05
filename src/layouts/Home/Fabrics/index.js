import React from "react";
import { Link } from "react-router-dom";
import fabricBanner from "assets/Image/tu-chon-hoa-tiet-vai-cho-chiec-dam-cua-ban.png"

function FabricsContainer() {
    return (
        <Link to="/fabrics?col=all">
            <div className="l-home__fabrics">
                <img src={fabricBanner} alt="tu-chon-hoa-tiet-vai-cho-chiec-dam-cua-ban" />
            </div>
        </Link>
    );
}

export default FabricsContainer;
