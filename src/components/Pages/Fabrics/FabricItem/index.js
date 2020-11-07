import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactImageAppear from "react-image-appear";
import loader from "assets/Image/image-loader.gif";

FabricItem.propTypes = {
    pattern: PropTypes.object,
};

FabricItem.defaultProps = {
    pattern: null,
};

function FabricItem(props) {
    if (!props.pattern) return <Fragment />;
    const { image, name, id } = props.pattern;
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
                        src={typeof image === "object" ? image.normal : ""}
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
                {/* <div className="c-fabric-item__tag">
                    <span>{typeName}</span>
                </div> */}
            </div>
        </Link>
    );
}

export default FabricItem;
