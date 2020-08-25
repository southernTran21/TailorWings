import SizeBodyImage from "components/Pages/Size/BodyImage";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

function BodyImageContainer() {
    /*--------------*/
    const size = useSelector((state) => state.size.size);
    /*--------------*/
    if (!size) return <Fragment />;
    return (
        <div className="l-size__body-image">
            <SizeBodyImage image={size.image} />
        </div>
    );
}

export default BodyImageContainer;
