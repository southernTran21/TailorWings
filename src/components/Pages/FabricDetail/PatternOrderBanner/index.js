import React, { Fragment } from "react";
import PropTypes from "prop-types";
import loader from "assets/Image/image-loader.gif";
import ReactImageAppear from "react-image-appear";
import { modifyPrice } from "services/CommonFunctions";
import arrowRightIcon from "assets/Icon/arrow-right-not-circle-icon.svg";
import arrowRightRedIcon from "assets/Icon/arrow-right-not-circle-red-icon.svg";


PatternOrderBanner.propTypes = {
    image: PropTypes.string,
    price: PropTypes.number,
    fabricTypeName: PropTypes.string,
};

PatternOrderBanner.defaultProps = {
    image: "",
    price: 0,
    fabricTypeName: "",
};

function PatternOrderBanner(props) {
    /*--------------*/
    const innerWidth = window.innerWidth;
    /*--------------*/
    const { image, price, fabricTypeName } = props;
    /*--------------*/
    if (!(price > 0)) return <Fragment />;
    /*--------------*/
    let modifiedPrice = modifyPrice(price);
    /*--------------*/
    return (
        <div className="c-fabric-detial-pattern-order-bannner">
            <div className="c-fabric-detial-pattern-order-bannner__text-wrapper">
                <div className="c-fabric-detial-pattern-order-bannner__text">
                    <span className="c-fabric-detial-pattern-order-bannner__title">
                        Bạn muốn mua vải?
                    </span>
                    <span className="c-fabric-detial-pattern-order-bannner__content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis justo orci, posuere ut lacus nec, finibus tincidunt
                        orci.
                    </span>
                </div>
            </div>
            <div className="c-fabric-detial-pattern-order-bannner__info-wrapper">
                <div className="c-fabric-detial-pattern-order-bannner__image">
                    <ReactImageAppear
                        src={image}
                        animationDuration="1s"
                        loader={loader}
                        loaderStyle={{ backgroundColor: "transparent" }}
                        placeholderStyle={{
                            backgroundColor: "transparent",
                        }}
                    />
                </div>
                <div className="c-fabric-detial-pattern-order-bannner__info">
                    {fabricTypeName === "Tất cả" ? (
                        <Fragment />
                    ) : (
                        <span className="c-fabric-detial-pattern-order-bannner__fabric-type">
                            {fabricTypeName}
                        </span>
                    )}
                    <div className="c-fabric-detial-pattern-order-bannner__price">
                        <span>{modifiedPrice}đ / </span>
                        <span>1 mét</span>
                    </div>
                    <button className="c-fabric-detial-pattern-order-bannner__button">
                        <span>Đặt mua vải này</span>
                        <div className="c-fabric-detial-pattern-order-bannner__icon">
                            <img src={innerWidth > 768 ? arrowRightIcon: arrowRightRedIcon} alt="icon" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PatternOrderBanner;
