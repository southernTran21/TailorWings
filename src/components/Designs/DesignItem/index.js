import { modifyDefaultProducts } from "actions";
import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
    countSupportedFabric,
    fetchDesignOwner
} from "services/Firebase API/basic";

DesignItem.propTypes = {
    design: PropTypes.object,
};

DesignItem.defaultProps = {
    design: null,
};

function DesignItem(props) {
    /*--------------*/
    const dispatch = useDispatch();
    /*--------------*/
    const {
        image,
        designOwner,
        name,
        designID,
        fabricNumber,
        productID,
    } = props.design;
    /*--------------*/
    const [supportedFabricNumber, setSupportedFabricNumber] = useState(
        fabricNumber
    );
    const [currentDesignOwner, setCurrentDesignOwner] = useState(designOwner);

    useEffect(() => {
        async function _modifyDefaultProduct() {
            try {
                if (designID && !fabricNumber) {
                    const countedNumber = await countSupportedFabric(designID);
                    const designOwner = await fetchDesignOwner(designID);
                    if (
                        countedNumber !== supportedFabricNumber &&
                        designOwner !== currentDesignOwner
                    ) {
                        setSupportedFabricNumber(countedNumber);
                        setCurrentDesignOwner(designOwner);
                        /*--------------*/
                        const action_modifyDefaultProduct = modifyDefaultProducts(
                            {
                                designID: designID,
                                fabricNumber: countedNumber,
                                designOwner: designOwner,
                            }
                        );
                        dispatch(action_modifyDefaultProduct);
                    }
                }
            } catch (error) {
                console.log("error.message :>> ", error.message);
            }
        }
        /*--------------*/
        if (!fabricNumber || !designOwner) {
            _modifyDefaultProduct();
        }
    }, []);

    if (!props.design) return <Fragment />;
    return (
        <Link
            to={{
                pathname: "/selection",
                search: `?id=${productID}`,
            }}
        >
            <li className="c-design-item">
                <div className="c-design-item__image">
                    <img src={image} alt={name} />
                </div>
                <span className="c-design-item__designed-by">Thiết kế bởi</span>
                <span className="c-design-item__designer-name">
                    {currentDesignOwner}
                </span>
                <div className="c-design-item__fabric-number">
                    <span>{supportedFabricNumber} Mẫu Vải</span>
                </div>
            </li>
        </Link>
    );
}

export default DesignItem;
