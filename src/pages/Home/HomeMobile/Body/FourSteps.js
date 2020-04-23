import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
import Step1 from "../../../../assets/imageHomePage/step 1.svg";
import Step2 from "../../../../assets/imageHomePage/step 2.svg";
import Step3 from "../../../../assets/imageHomePage/step 3.svg";
import Step4 from "../../../../assets/imageHomePage/step 4.svg";

class FourSteps extends Component {
    render() {
        return (
            <LazyLoad
                height={'fit-content'}
                offset={0}
                throttle={250}
            >
            <div className="content__bodyPage d-flex flex-column justify-content-around">
                <div className="title d-flex flex-column">
                    <span>Đặt may giao tận nhà chỉ với 4 bước đơn giản</span>
                </div>
                <div className="fourStep-wraper d-flex flex-row justify-content-between align-items-center">
                    <div className="fourStep-content">
                        <div className="image">
                            <img src={Step1} />
                        </div>
                        <div className="title">
                            <span>Chọn mẫu</span>
                        </div>
                    </div>
                    <div className="fourStep-content">
                        <div className="image">
                            <img src={Step2} />
                        </div>
                        <div className="title">
                            <span>Chọn vải</span>
                        </div>
                    </div>
                    <div className="fourStep-content">
                        <div className="image">
                            <img src={Step3} />
                        </div>
                        <div className="title">
                            <span>Chọn size</span>
                        </div>
                    </div>
                    <div className="fourStep-content">
                        <div className="image">
                            <img src={Step4} />
                        </div>
                        <div className="title">
                            <span>Đặt hàng</span>
                        </div>
                    </div>
                </div>
                <div className='numberStep d-flex flex-lg-row justify-content-center align-items-center'>
                    <div className='number'>1</div>
                    <hr />
                    <div className='number'>2</div>
                    <hr />
                    <div className='number'>3</div>
                    <hr />
                    <div className='number'>4</div>
                </div>
            </div>
            </LazyLoad>
        );
    }
}

export default FourSteps;
