import React, { Component } from "react";

export default class SizeImage extends Component {
    render() {
        return (
            <div className="imageBodySize">
                <img src={this.props.imageSize} alt={this.props.size} />
            </div>
        );
    }
}
