import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactImageAppear from "react-image-appear";
import loader from "assets/Image/image-loader.gif";

FabricItem.propTypes = {
    fabric: PropTypes.object,
};

FabricItem.defaultProps = {
    fabric: null,
};

function FabricItem(props) {
    if (!props.fabric) return <Fragment />;
    const { image, name, typeName, id } = props.fabric;
    return (
        <Link
            to={{
                pathname: "/fabric-detail",
                search: `?id=${id}`,
            }}
        >
            <div className="c-fabric-item">
                <div className="c-fabric-item__image">
                    <ReactImageAppear
                        src={image[0]}
                        animationDuration="1s"
                        loader={loader}
                        loaderStyle={{ backgroundColor: "transparent" }}
                        placeholderStyle={{
                            backgroundColor: "transparent",
                        }}
                    />
                </div>
                <div className="c-fabric-item__name">
                    <p>{name}</p>
                </div>
                <div className="c-fabric-item__tag">
                    <span>{typeName}</span>
                </div>
            </div>
        </Link>
    );
}

export default FabricItem;
