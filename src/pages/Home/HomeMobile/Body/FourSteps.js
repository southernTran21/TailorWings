import React, { Component } from 'react';

class FourSteps extends Component {
    render() {
        return (
            <div className='content__bodyPage d-flex flex-column justify-content-around'>
                <div className='title d-flex flex-column'>
                    <span>Đặt may giao tận nhà chỉ với 4 bước đơn giản</span>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean in nisl in ex varius luctus.
                    </span>
                </div>
                <div className='fourStep-wraper d-flex flex-row justify-content-between'>
                    <div className='fourStep-content'>
                        <div className='image'></div>
                        <div className='title'>
                            <span>Chọn mẫu</span>
                        </div>
                    </div>
                    <div className='fourStep-content'>
                        <div className='image'></div>
                        <div className='title'>
                            <span>Chọn vải</span>
                        </div>
                    </div>
                    <div className='fourStep-content'>
                        <div className='image'></div>
                        <div className='title'>
                            <span>Chọn size</span>
                        </div>
                    </div>
                    <div className='fourStep-content'>
                        <div className='image'></div>
                        <div className='title'>
                            <span>Đặt hàng</span>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default FourSteps;
