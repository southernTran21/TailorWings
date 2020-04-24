import React, { Component } from "react";
import classNames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default class FabricList extends Component {
    render() {
        const { fabricList, aciveFabricIndex } = this.props;
        return (
            <div id="fabricList-wrapper">
                <div id="fabricList-content">
                    {fabricList.map((fabric, index) => {
                        const isHighLight = aciveFabricIndex === index;
                        return (
                            <div
                                className="col-4"
                                key={index}
                                onClick={() =>
                                    this.props.onFabricChanged(index, fabric.id)
                                }
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
