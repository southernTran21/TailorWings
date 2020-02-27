import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Breadcum extends Component {
    render() {
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item text-uppercase"><Link to="/">Trang chủ</Link></li>
                        <li className="breadcrumb-item text-uppercase"><Link to="/shopping-store?cat=all">Sản Phẩm</Link></li>
                        <li className="breadcrumb-item text-uppercase active" aria-current="page">{this.props.designName}</li>
                    </ol>
                </nav>
            </div>
        );
    }
}

export default Breadcum;