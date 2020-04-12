import React, { Component } from "react";

import imagePassion from "../../../../assets/imageHomePage/imagePassion.svg";

class Passion extends Component {
    render() {
        return (
            <div className="passion">
                <div className="titleHeader d-flex flex-column justify-content-center align-items-center">
                    <span>Passion Led Us Here</span>
                    <span>
                        Quần áo bạn mặc là do bàn tay của người thợ may tạo ra.
                        Tailor Wings mong muốn đem giá trị về đúng người đã tạo
                        ra nó. Hãy cùng Tailor Wings chắp cho những đôi cánh
                        chưa từng được bay lên - những người thợ may tận tụy.
                    </span>
                </div>
                <div className="video">
                    <img src={imagePassion} />
                </div>
                <hr />
            </div>
        );
    }
}

export default Passion;
