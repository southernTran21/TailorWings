import React, { Component } from 'react';
import { Icon } from 'antd';

class AboutTailorWings extends Component {
    render() {
        return (
            <div className='weYour-wraper d-flex flex-column justify-content-around'>
                <div className='title__weyour d-flex flex-column justify-content-center align-items-center'>
                    <span className='title1'>We Tailor Your Wings</span>
                    <span className='text-center title2'>
                        Tự do lựa chọn để thể hiện phong cách của chính
                                bạn.{' '}
                        <span className='font-weight-bold'>
                            Tất cả có trên cùng một ứng dụng.
                                </span>
                    </span>
                </div>
                <div className='image-wraper'>
                    <div className='title d-flex flex-row justify-content-center align-items-center'>
                        Xem thêm <Icon type='arrow-right' />
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutTailorWings;