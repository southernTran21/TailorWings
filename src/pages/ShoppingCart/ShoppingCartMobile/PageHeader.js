import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

export default class PageHeader extends Component {
    render() {
        return (
            <div className='navbarHeader d-flex flex-row justify-content-between align-items-center'>
                <Link
                    to={{
                        pathname: '/shopping-store',
                        search: '?cat=all&search='
                    }}
                    style={{
                        border: 'none',
                        textDecoration: 'none',
                        width: 'fit-content',
                        height: 'fit-content'
                    }}
                >
                    <div className='iconBack '>
                        <Icon type='left' />
                    </div>
                </Link>
                <div className='titleHeader'>
                    <span>Giỏ hàng</span>
                </div>
                <div className='divClone'></div>
            </div>
        )
    }
}
