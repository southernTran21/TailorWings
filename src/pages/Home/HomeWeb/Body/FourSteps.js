import React, { Component } from "react";
import { Link } from 'react-router-dom'
import stepOne from "../../.../../../../assets/imageHomePage/step 1.svg";
import stepTwo from "../../.../../../../assets/imageHomePage/step 2.svg";
import stepThree from "../../.../../../../assets/imageHomePage/step 3.svg";
import stepFour from "../../.../../../../assets/imageHomePage/step 4.svg";

export default class FourSteps extends Component {
    render() {
        return (
            <div className="fourStep_wrapper d-flex flex-column align-items-center fontMontserrat">
                <div className="titleHeader">
                    <span>Đặt may giao tận nhà chỉ với 4 bước đơn giản.</span>
                </div>
                <div className="fourStep d-flex flex-row justify-content-lg-between">
                    <div className="step1 d-flex flex-column align-items-center">
                        <div className="image d-flex flex-column justify-content-center">
                            <img src={stepOne} alt="" />
                        </div>
                        <div className="title">
                            <span>Chọn mẫu</span>
                        </div>
                    </div>
                    <div className="step2  d-flex flex-column align-items-center">
                        <div className="image d-flex flex-column justify-content-center">
                            <img src={stepTwo} alt="" />
                        </div>
                        <div className="title">
                            <span>Chọn vải</span>
                        </div>
                    </div>
                    <div className="step3 d-flex flex-column align-items-center">
                        <div className="image d-flex flex-column justify-content-center">
                            <img src={stepThree} alt="" />
                        </div>
                        <div className="title">
                            <span>Chọn size</span>
                        </div>
                    </div>
                    <div className="step4 d-flex flex-column align-items-center">
                        <div className="image d-flex flex-column justify-content-center">
                            <img src={stepFour} alt="" />
                        </div>
                        <div className="title">
                            <span>Đặt may</span>
                        </div>
                    </div>
                </div>
                <div className="numberStep d-flex justify-content-between align-items-center">
                    <div className="number">1</div>
                    <hr />
                    <div className="number">2</div>
                    <hr />
                    <div className="number">3</div>
                    <hr />
                    <div className="number">4</div>
                </div>
                <Link
                    to={{
                        pathname: "/shopping-store",
                        search: "?cat=all&search"
                    }}
                    style={{
                        width: "fit-content",
                        height: "fit-content",
                        textDecoration: "none",
                        border: "none"
                    }}
                >
                    <div className="button d-flex flex-row justify-content-center align-items-center">
                        <span>ĐẶT MAY NGAY</span>
                    </div>
                </Link>
            </div>
        );
    }
}
