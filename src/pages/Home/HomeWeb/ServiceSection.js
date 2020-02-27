import React, { Component } from 'react'
import step1 from '../../../assets/theme/template/img/service/chonVai.jpg';
import step2 from '../../../assets/theme/template/img/service/chonSize.jpg';
import step3 from '../../../assets/theme/template/img/service/chonThietKe.jpg';
import step4 from '../../../assets/theme/template/img/service/datHang.jpg';

export default class ServiceSection extends Component {
    render() {
        return (
            <section className=" bg-light" id="services">
                <div className="container d-flex flex-wrap justify-content-between flex-row">
                    <div className=" service-item flex-grow-1 text-center"  >
                        <img className="rounded-circle " width="100%" height="auto" src={step1} alt="" />
                        <h4 className="subheading">Chọn Vải</h4>
                    </div>
                    <div className=" service-item flex-grow-1 text-center">
                        <img className="rounded-circle " width="100%" height="auto" src={step2} alt="" />
                        <h4 className="subheading">Chọn Size</h4>
                    </div>
                    <div className=" service-item flex-grow-1 text-center">
                        <img className="rounded-circle" width="100%" height="auto" src={step3} alt="" />
                        <h4 className="subheading">Chọn Thiết Kế</h4>
                    </div>
                    <div className=" service-item flex-grow-1 text-center">
                        <img className="rounded-circle" width="100%" height="auto" src={step4} alt="" />
                        <h4 className="subheading"> Đặt Hàng</h4>
                    </div>
                </div>
            </section>
        )
    }
}
