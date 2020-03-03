import React, { Component } from 'react';
import CheckOutModal from './CheckOutModal';

class Summary extends Component {
    render() {
        const { subtotalPrice, totalProductsOnCart } = this.props;
        let subtotalPriceModified = subtotalPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + "đ";
        return (
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="Summary">
                    <div className="titleSummary">
                        <a>Thông Tin Thanh Toán</a>
                    </div>
                    <div className="infoSummary">
                        <div className="d-flex justify-content-between">
                            <a>Tạm Tính:</a>
                            <a>{subtotalPriceModified}</a>
                        </div>
                        <div className="d-flex justify-content-between">
                            <a>Giao Hàng:</a>
                            <a>Miễn Phí</a>
                        </div>
                        <div className="d-flex justify-content-between Total">
                            <a>Tổng: </a>
                            <a>{subtotalPriceModified}</a>
                        </div>
                        <div className="buttonCheckOut">
                            <CheckOutModal subtotalPrice={subtotalPrice} totalProductsOnCart={totalProductsOnCart} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;