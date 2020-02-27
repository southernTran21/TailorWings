import React, { Component } from 'react'
import './SideBar.css'
import classNames from 'classnames';
import { Link } from 'react-router-dom'
import './SlideBar.scss'
import { getWithCondition } from '../../services/Fundamental';
import auth from '../../app/auth';
import LoginForm from './LoginModal'

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
                <div id="sidebar">
                    <ul className="list-unstyled components">
                        <li className=" nav-item active">
                            <a id={0} href="#homeSubmenu" data-toggle="collapse" onClick={this._dropHandler} className="dropdown-toggle nav-link active">Danh mục</a>
                            <ul className={classNames('collapse list-unstyled', { show: dropFlags[0] })} id="homeSubmenu">
                                {categories.map((category, index) => {
                                    if (category != null) {
                                        return (
                                            <li key={index} className="nav-item">
                                                <Link
                                                    className="nav-link text-capitalize"
                                                    to={{
                                                        pathname: "/shopping-store",
                                                        search: `?cat=${category.id}`
                                                    }}
                                                    onClick={this.props.changeSideBarState}
                                                >
                                                    <i className="fas fa-chevron-right"></i>
                                                    {category.name}
                                                </Link>
                                            </li >
                                        )
                                    }
                                })}
                            </ul>
                        </li>
                        <li className=" nav-item active" >
                            <a id={1} href="#about" data-toggle="collapse" onClick={this._dropHandler} className="dropdown-toggle nav-link active">Về Tailor Wings</a>
                            <ul className={classNames('collapse list-unstyled', { show: dropFlags[1] })} id="about">
                                <li className="nav-item"><a className="nav-link text-capitalize" ><i className="fas fa-chevron-right"></i>Câu chuyện Tailor Wings</a></li >
                                <li className="nav-item"><a className="nav-link text-capitalize" ><i className="fas fa-chevron-right"></i>Cộng đồng nhà thiết kế và thợ may</a></li >
                                <li className="nav-item"><a className="nav-link text-capitalize" ><i className="fas fa-chevron-right"></i>Liên Hệ</a></li >
                            </ul>
                        </li>

                        <li className=" nav-item active" >
                            <a id={2} href="#help" data-toggle="collapse" onClick={this._dropHandler} className="dropdown-toggle nav-link active">Trợ Giúp</a>
                            <ul className={classNames('collapse list-unstyled', { show: dropFlags[2] })} id="help">
                                <li className="nav-item"><a className="nav-link text-capitalize" ><i className="fas fa-chevron-right" />Cách chọn size</a></li >
                                <li className="nav-item"><a className="nav-link text-capitalize" ><i className="fas fa-chevron-right"></i>Cách đặt may</a></li >
                                <li className="nav-item"><a className="nav-link text-capitalize" ><i className="fas fa-chevron-right"></i>Hỗ trợ chỉnh sửa</a></li >
                                <li className="nav-item"><a className="nav-link text-capitalize" ><i className="fas fa-chevron-right"></i>Hỗ trợ đổi trả</a></li >
                            </ul>
                        </li>

                        <li className=" nav-item active" >
                            <a id={3} href="#user" data-toggle="collapse" onClick={this._dropHandler} className="dropdown-toggle nav-link active">Tài khoản</a>
                            <ul className={classNames('collapse list-unstyled', { show: dropFlags[3] })} id="user">
                                <li className="nav-item"><a className="nav-link text-capitalize" ><i className="fas fa-chevron-right" />Yêu thích</a></li >
                                <li className="nav-item"><a className="nav-link text-capitalize" ><i className="fas fa-chevron-right"></i>Lịch sử đơn hàng</a></li >
                                <li className="nav-item"><a className="nav-link text-capitalize" ><i className="fas fa-chevron-right"></i>Thông tin tài khoản</a></li >
                            </ul>
                        </li>

                        <li className=" nav-item active" >
                            <a id={4} href="#question" data-toggle="collapse" onClick={this._dropHandler} className="dropdown-toggle nav-link active">Bạn là thợ may ?</a>
                            <ul className={classNames('collapse list-unstyled', { show: dropFlags[4] })} id="question">
                                <li className="nav-item"><a className="nav-link text-capitalize"><i className="fas fa-chevron-right" />Trở thành đối tác</a></li >
                            </ul>
                        </li>

                        <li className=" nav-item active" >
                            <LoginForm onClickHandling={this.onClickHandling} history={this.props.history} />
                        </li>

                    </ul>

                </div>
            </nav>
        )
    }
}