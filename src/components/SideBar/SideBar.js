import React, { Component } from 'react'
import './SideBar.css'
import classNames from 'classnames';
import { Link } from 'react-router-dom'
import './SideBar.scss'
import { getWithCondition } from '../../services/Fundamental';
import auth from '../../app/auth';
import LoginForm from './LoginModal'

import {Icon} from 'antd'

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropFlags: [true, false, false, false, false],
            show: true,
            categories: []
        }
        this._dropHandler = this._dropHandler.bind(this);
    }

    componentDidMount() {
        getWithCondition("categories", "visibility", true)
            .then((categories) => {
                if (categories != null) {
                    this.setState({
                        categories
                    })
                }
            })
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.show !== prevState.show) {
            if (nextProps.show === false) {
                let dropFlags = [true, false, false, false, false];
                return {
                    dropFlags: dropFlags,
                    show: nextProps.show
                };
            }
        }
        return null;
    }

    _dropHandler = (event) => {
        let id = event.target.id;
        let isDrop = [false, false, false, false, false];
        isDrop[id] = !this.state.dropFlags[id];
        this.setState({ dropFlags: isDrop });
    }

    onClickHandling = () => {
        this.props.changeSideBarState();
    }

    render() {
        const { dropFlags, categories } = this.state;
        let drawerClasses = 'side-drawer';
        if (this.props.show) {
            drawerClasses = 'side-drawer open'
        }
        return (
            <nav className={drawerClasses}>
                <div className='sidebar-wraper'>
                    <div className='selectionCategory d-flex flex-column'>
                        <Link><span>Hàng mới</span></Link>
                        <Link><span>Đầm Ôm</span></Link>
                        <Link><span>Đầm Suông</span></Link>
                        <Link><span>Đầm Xòe</span></Link>
                        <Link><span>Bộ Sưu Tập</span></Link>
                    </div>
                    <hr/>
                    <div className='selectionEndSidebar d-flex flex-column'>
                        <Link><span>Về Tailor Wings</span></Link>
                        <Link><span>Trợ Giúp</span></Link>
                        <Link><span>Tài Khoan</span></Link>
                        <Link><span style={{textDecoration:'underline'}}>Bạn Là Thợ May</span></Link>
                    </div>
                </div>
            </nav>
        )
    }
}