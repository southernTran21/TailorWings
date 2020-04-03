import React, { Component } from "react";

export default class SizeImage extends Component {
    render() {
        console.log('this.props.imageSize', this.props.imageSize)
        return (
            <div className="imageBodySize">
                <img src={this.props.imageSize} alt={this.props.size} />
            </div>
        );
    }
}
