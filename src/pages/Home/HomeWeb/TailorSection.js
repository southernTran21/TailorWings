import React, { Component } from 'react'
import tailor from '../../../assets/theme/template/img/team/5.jpeg';


export default class TailorSection extends Component {
    render() {
        return (
            <section className="bg-light page-section" id="tailor">
                <div className="container tailor-container   ">
                    <div className="tailor-items flex-grow-1 text-center pr-5"  >
                        <div className=" tailor-heading text-uppercase" >WE GIVE TAILOR THE WINGS</div>
                        <div>
                            <p>Trở thành đối tác của Tailor Wings để làm chủ cuộc sống của mình tốt hơn </p>

                            <p>  * Bạn là một thợ may có tay nghề cao nhưng không thể tiếp cận được với khách hàng của mình ?
                                 * Bạn đã tạo ra những bộ quần áo thật đẹp nhưng đa số không biết bạn là ai  ?
                                 * Bạn tràn đầy nhiệt huyết với nghề may nhưng không biết cách nào để mở rộng ? ...
                            </p>
                            <button className="btn btn-outline-orange text-uppercase">
                                Đăng ký ngay
                            </button>

                        </div>
                    </div>
                    <div className="  flex-grow-1  ">
                        <img className="card-img-right" src={tailor} width="100%" height="auto" alt="tailor" />
                    </div>
                </div>
            </section>
        )
    }
}
