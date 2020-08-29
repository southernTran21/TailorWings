import React from "react";
import { Link } from "react-router-dom";

function FabricsContainer() {
    return (
        <Link to="/fabrics">
            <div className="l-home__fabrics">
                <img src="https://picsum.photos/1280/520" alt="" />
            </div>
        </Link>
    );
}

export default FabricsContainer;
