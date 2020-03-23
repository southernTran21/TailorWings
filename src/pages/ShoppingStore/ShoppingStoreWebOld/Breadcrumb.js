import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Breadcrumb extends Component {
    render() {
        const { categoryName } = this.props;
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item text-uppercase"><Link to="/">Trang chủ</Link></li>
                        <li className="breadcrumb-item text-uppercase"><Link to="/shopping-store?cat=all">Sản Phẩm</Link></li>
                        <li className="breadcrumb-item text-uppercase active" aria-current="page">{categoryName}</li>
                    </ol>
                </nav>
            </div>
        )
    }
}
