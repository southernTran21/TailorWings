import React, { Component } from "react";
import imagePassion from '../../../../assets/imageHomePage/imagePassion.svg';

export default class Passion extends Component {
    render() {
        return (
            <div className="passion d-flex fontMontserrat">
                <div className="title d-flex flex-column">
                    <span>
                        Passion <br></br> Led Us Here
                    </span>
                    <span>
                        Quần áo bạn mặc là do<br/> bàn tay của người thợ may<br/> tạo ra.
                        Hãy cùng Tailor<br/> Wings chắp cho những đôi<br/> cánh chưa từng
                        được bay<br/> lên - những người thợ may<br/> tận tụy.
                    </span>
                </div>
                <div className="image">
                    <img src={imagePassion} alt=""/>
                </div>
            </div>
        );
    }
}
