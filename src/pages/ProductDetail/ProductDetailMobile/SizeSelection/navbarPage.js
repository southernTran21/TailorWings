import React, { Component } from 'react';
import './SizeSelection.scss';
import { Link } from 'react-router-dom'
import { Icon, Badge } from 'antd';

export default class Navbar extends Component {
    render() {
        return (
            <div className='navbarHeader d-flex flex-row align-items-center justify-content-between'>
                <div
                    className='backButton'
                    onClick={() => this.props.onContentChange('fabric')}
                >
                    <a>
                        <Icon type='left' />
                    </a>
                </div>
                <div className='titleHeader'>Chọn size</div>
                <Link
                    to={'/shopping-cart'}
                    style={{ color: 'rgb(38, 153, 251)' }}
                >
                    <div className='iconShoppingCart'>
                        <Icon type='shopping-cart' />
                        <Badge count={this.props.totalProductsOnCart}>
                            <a className='head-example' />
                        </Badge>
                    </div>
                </Link>
            </div>
        );
    }
}
