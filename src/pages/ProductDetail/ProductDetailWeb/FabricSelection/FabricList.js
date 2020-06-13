import React, { Component } from "react";
import classNames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { getCurrentDate } from "services/CommonFunction";
import { trackingIncrement } from "services/Fundamental";

export default class FabricList extends Component {
    /*********************************
     *  Description: to update tracking counter
     *
     *
     *  Call by:
     */
    handleTracking = (fabricID, designID) => {
        let date = getCurrentDate();
        if (!fabricID || !designID) return;
        trackingIncrement("tracking", date, "products", designID + fabricID);
        trackingIncrement("tracking", date, "fabrics", fabricID);
    };
    /************_END_****************/

    render() {
        const { fabricList, aciveFabricIndex, designID } = this.props;
        return (
            <div id="fabricList-wrapper">
                <div id="fabricList-content">
                    {fabricList.map((fabric, index) => {
                        const isHighLight = aciveFabricIndex === index;
                        return (
                            <div
                                className="col-4"
                                key={index}
                                onClick={() => {
                                    this.handleTracking(fabric.id, designID);
                                    this.props.onFabricChanged(
                                        index,
                                        fabric.id
                                    );
                                }}
                            >
                                <div
                                    className={classNames("image", {
                                        highlight: isHighLight,
                                    })}
                                >
                                    <LazyLoadImage
                                        alt={fabric.name}
                                        effect="blur"
                                        src={fabric.image[0]}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
