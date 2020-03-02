import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Categories extends Component {
    render() {
        const { visibilityProducts } = this.props;
        let totalDamSuong = 0;
        let totalDamOm = 0;
        let totalDamXoe = 0;
        if (visibilityProducts) {
            totalDamSuong = visibilityProducts.filter((product) => {
                return product.catID === 'damsuong';
            }).length;
            totalDamOm = visibilityProducts.filter((product) => {
                return product.catID === 'damom';
            }).length;
            totalDamXoe = visibilityProducts.filter((product) => {
                return product.catID === 'damxoe';
            }).length;
        }
        return (
            <div className='listProduct d-flex flex-column justify-content-between'>
                <div className='title__listProduct d-flex flex-row justify-content-center'>
                    Danh Mục Sản Phẩm
                        </div>
                <div className='categoryProduct d-flex flex-row justify-content-between'>
                    <Link
                        style={{ height: 'fit-content', width: 'fit-content' }}
                        to={{
                            pathname: "/shopping-store",
                            search: `?cat=damsuong&search=`
                        }}
                    >
                        <div className='contentProduct d-flex flex-column justify-content-center align-items-center'>
                            <span>Đầm Suông</span>
                            <span>{`+${totalDamSuong} thiết kế`}</span>

                        </div>
                    </Link>
                    <Link
                        style={{ height: 'fit-content', width: 'fit-content' }}
                        to={{
                            pathname: "/shopping-store",
                            search: `?cat=damom&search=`
                        }}
                    >
                        <div className='contentProduct d-flex flex-column justify-content-center align-items-center'>
                            <span>Đầm Ôm</span>
                            <span>{`+${totalDamOm} thiết kế`}</span>
                        </div>
                    </Link>
                    <Link
                        style={{ height: 'fit-content', width: 'fit-content' }}
                        to={{
                            pathname: "/shopping-store",
                            search: `?cat=damxoe&search=`
                        }}
                    >
                        <div className='contentProduct d-flex flex-column justify-content-center align-items-center'>
                            <span>Đầm Xoè</span>
                            <span>{`+${totalDamXoe} thiết kế`}</span>
                        </div>
                    </Link>
                </div>
                <hr />
            </div>
        );
    }
}

export default Categories;