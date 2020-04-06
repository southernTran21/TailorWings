import React, { Component } from "react";

import iconIG from "../../.../../../../assets/imageHomePage/instagram.svg";
import IG1 from '../../../../assets/imageHomePage/IG1.jpg';
import IG2 from '../../../../assets/imageHomePage/IG2.jpg';
import IG3 from '../../../../assets/imageHomePage/IG3.jpg';
import IG4 from '../../../../assets/imageHomePage/IG4.jpg'

export default class Instagram extends Component {
    render() {
        return (
            <div className="instagram fontMontserrat">
                <div className="title d-flex flex-row align-items-center justify-content-center">
                    <img src={iconIG} alt="instagram" />
                    <span>Instagram</span>
                </div>
                <div className="crouselImage d-flex justify-content-between">
                    <div className="image">
                        <img src={IG1} alt=""/>
                    </div>
                    <div className="image">
                        <img src={IG2} alt=""/>
                    </div>
                    <div className="image">
                        <img src={IG3} alt=""/>
                    </div>
                    <div className="image">
                        <img src={IG4} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}
