import React, { Component } from "react";
import "./SizeSelection.scss";
import classNames from "classnames";
import { getCurrentDate } from "services/CommonFunction";
import { trackingIncrement } from "services/Fundamental";

const SIZE = ["XS", "S", "M", "L", "XL", "XXL"];

export default class Selection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: "",
            activeStatus: new Array(6).fill(false),
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.size !== prevState.size && nextProps.size != null) {
            /* ------------- */
            let activeStatus = [...prevState.activeStatus];
            let currentActiveIndex = SIZE.indexOf(nextProps.size);
            /* ------------- */
            if (currentActiveIndex > -1) {
                /* ------------- */
                activeStatus.fill(false);
                activeStatus[currentActiveIndex] = true;
                /* ------------- */
                return {
                    activeStatus,
                    size: nextProps.size,
                };
            } else {
                return null;
            }
            /* ------------- */
        } else {
            return null;
        }
    }

    onSizeSelected = (index, size) => {
        if (index != null && index > -1) {
            let { activeStatus } = this.state;
            activeStatus.fill(false);
            activeStatus[index] = true;
            this.handleTracking(size);
            this.props.onSizeUpdated(size);
            this.setState({
                activeStatus,
            });
        }
    };

    /*********************************
     *  Description: to update tracking counter
     *
     *
     *  Call by:
     */
    handleTracking = (size) => {
        let date = getCurrentDate();
        if (!size) return;
        trackingIncrement("tracking", date, "sizes", size);
    };
    /************_END_****************/

    render() {
        const { activeStatus } = this.state;
        return (
            <div className="sizeSelection d-flex">
                {SIZE.map((size, index) => {
                    return (
                        <div key={index} className="col-2 text-center">
                            <div
                                id={index}
                                onClick={() => this.onSizeSelected(index, size)}
                                className={classNames("titleSize", {
                                    actived: activeStatus[index],
                                })}
                            >
                                <a id={index} name={size}>
                                    {size}
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
