import React, { Component } from 'react';
import './Confirm.scss';
import { Link } from 'react-router-dom'
import { Icon, Badge } from 'antd';

export default class NavBar extends Component {
    render() {
        const { totalProductsOnCart } = this.props;
        return (
            <div className='navbarHeader d-flex flex-row align-items-center justify-content-between'>
                <div
                    className='backButton'
                    onClick={() => this.props.onContentChange('size')}
                >
                    <a>
                        <Icon type='left' />
                    </a>
                </div>
                <div className='titleHeader d-flex justify-content-center'>Xác nhận</div>
                <Link
                    to={'/shopping-cart'}
                    style={{ color: 'rgb(38, 153, 251)' }}
                >
                    <div className='iconShoppingCart'>
                        <Icon type='shopping-cart' />
                        <Badge count={totalProductsOnCart}>
                            <a className='head-example' />
                        </Badge>
                    </div>
                </Link>
            </div>
        );
    }
}
