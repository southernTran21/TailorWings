import React, { Component } from "react";
import classNames from "classnames";

const SIZE = ["XS", "S", "M", "L", "XL", "XXL"];

export default class SizeSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStatus: new Array(6).fill(false)
        };
    }
    componentDidMount() {
        const { size } = this.props.currentSelectedProduct;
        let { activeStatus } = this.state;
        if (size != null) {
            let currentActiveIndex = SIZE.indexOf(size);
            if (currentActiveIndex != null) {
                activeStatus[currentActiveIndex] = true;
                this.setState({
                    activeStatus
                });
            }
        }
    }
    onSizeSelected = (index, size) => {
        if (index != null && index > -1) {
            let { activeStatus } = this.state;
            activeStatus.fill(false);
            activeStatus[index] = true;
            this.props.onSizeUpdated(index, size);
            this.setState({
                activeStatus
            });
        }
    };
    render() {
        const { activeStatus } = this.state;
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
