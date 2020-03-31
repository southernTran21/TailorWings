import React, { Component } from "react";

export default class Steps extends Component {
    render() {
        const { selectionStep } = this.props;
        let highLight = ['','']
        if ( selectionStep === 'fabricSelection' ) {
            highLight[0] = 'highlight'
        } else {
            highLight[1] = 'highlight'
        }
        return (
            <div className="steps d-flex justify-content-center align-items-center">
                <span>Chọn mẫu</span>
                <span>></span>
                <span className={highLight[0]}>Chọn vải</span>
                <span>></span>
                <span className={highLight[1]}>Chọn size</span>
                <span>></span>
                <span>Đặt hàng</span>
            </div>
        );
    }
}
