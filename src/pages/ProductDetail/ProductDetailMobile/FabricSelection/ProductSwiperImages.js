import React, { Component } from "react";
import classNames from "classnames";

class ProductSwiperImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
        };
    }

    render() {
        const { name, id, src } = this.props;
        const { isLoaded } = this.state;
        return (
            <div className="image-wraper">
                <img
                    className={classNames({ unvisible: !isLoaded })}
                    name={name}
                    id={id}
                    src={src}
                    onLoad={() => this.setState({ isLoaded: true })}
                />
                <div className={classNames("lds-heart", { unvisible: isLoaded })}>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default ProductSwiperImages;
