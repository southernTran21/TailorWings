import classNames from "classnames";
import React, { Component } from "react";
import { getCurrentDate } from "services/CommonFunction";
import { trackingIncrement } from "services/Fundamental";

const SIZE = ["XS", "S", "M", "L", "XL", "XXL"];

export default class SizeSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStatus: new Array(6).fill(false),
        };
    }

    componentDidMount() {
        const { size } = this.props;
        let { activeStatus } = this.state;
        if (size != null) {
            let currentActiveIndex = SIZE.indexOf(size);
            if (currentActiveIndex != null) {
                activeStatus[currentActiveIndex] = true;

                this.setState({
                    activeStatus,
                });
            }
        }
    }

    onSizeSelected = (index, size) => {
        if (index != null && index > -1) {
            let { activeStatus } = this.state;
            activeStatus.fill(false);
            activeStatus[index] = true;
            this.handleTracking(size);
            this.props.onSizeUpdated(index, size);
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
        let { activeStatus } = this.state;
        const { size } = this.props;
        if (size != null) {
            let currentActiveIndex = SIZE.indexOf(size);
            if (currentActiveIndex != null) {
                activeStatus[currentActiveIndex] = true;
            }
        }
        return (
            <div className="selectionSize d-flex justify-content-between">
                {SIZE.map((size, index) => {
                    return (
                        <div
                            className={classNames(
                                "selection d-flex justify-content-center align-items-center",
                                { actived: activeStatus[index] }
                            )}
                            key={index}
                            onClick={() => this.onSizeSelected(index, size)}
                        >
                            <span>{size}</span>
                        </div>
                    );
                })}
            </div>
        );
    }
}
