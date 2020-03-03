import React, { Component } from 'react';

import Image from '../../../../assets/imageHomePage/HM Studio 2020.png';

class Passion extends Component {
    render() {
        return (
            <div className='passion'>
                <div className='titleHeader d-flex flex-column justify-content-center align-items-center'>
                    <span>Passion Led Us Here</span>
                    <span>
                        Ngoài đam mê với áo quần, Tailor Wings mong muốn được
                        đem giá trị về đúng người đã tạo ra nó. Quần áo bạn mặc
                        là do bàn tay của người thợ may tạo ra, vì bạn trông
                        thật tuyệt vời trong những bộ cánh ấy, nên họ hoàn toàn
                        xứng đáng nhận được giá trị tương ứng. Hãy cùng Tailor
                        Wings chắp cho những đôi cánh chưa từng được bay lên -
                        những người thợ may tận tụy.
                    </span>
                </div>
                <div className='video'>
                    <img src={Image} />
                </div>
                <hr />
            </div>
        );
    }
}

export default Passion;
