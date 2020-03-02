import React, { Component } from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'
import './SideBar.scss'
import LoginForm from './LoginModal'

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    onClickHandling = () => {
        this.props.changeSideBarState();
    }

    render() {
        let drawerClasses = 'side-drawer';
        if (this.props.show) {
            drawerClasses = 'side-drawer open'
        }
        return (
            <nav className={drawerClasses}>
                <div className='sidebar-wraper'>
                    <div className='selectionCategory d-flex flex-column'>
                        <Link
                            to={{
                                pathname: "/shopping-store",
                                search: "?cat=all&search="
                            }}
                        >
                            <span>Hàng mới</span>
                        </Link>
                        <Link
                            to={{
                                pathname: "/shopping-store",
                                search: "?cat=damom&search="
                            }}
                        >
                            <span>Đầm Ôm</span>
                        </Link>
                        <Link
                            to={{
                                pathname: "/shopping-store",
                                search: "?cat=damsuong&search="
                            }}
                        >
                            <span>Đầm Suông</span>
                        </Link>
                        <Link
                            to={{
                                pathname: "/shopping-store",
                                search: "?cat=damxoe&search="
                            }}
                        >
                            <span>Đầm Xòe</span>
                        </Link>
                        <Link
                            to={{
                                pathname: "/shopping-store",
                                search: "?cat=all&search="
                            }}
                        >
                            <span>Bộ Sưu Tập</span>
                        </Link>
                    </div>
                    <hr />
                    <div className='selectionEndSidebar d-flex flex-column'>
                        <Link to="/"><span>Về Tailor Wings</span></Link>
                        <Link to="/"><span>Trợ Giúp</span></Link>
                        <Link to="/"><span>Tài Khoản</span></Link>
                        <Link to="/"><span style={{ textDecoration: 'underline' }}>Bạn Là Thợ May</span></Link>
                        <LoginForm onClickHandling={this.onClickHandling} history={this.props.history} />
                    </div>
                </div>
            </nav>
        )
    }
}