import React, { Component } from 'react';
import { Icon } from 'antd';
import classNames from 'classnames';
// import component
import SideBar from '../../../../components/SideBar/SideBar'
import Backdrop from '../../../../components/SideBar/Backdrop'
import Search from './Search';
import logoTW from '../../../../assets/imageHomePage/Logo Header.svg'

class NavbarHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSideBarOpen: false
        }
    }


    sideBarOpen = () => {
        let { isSideBarOpen } = this.state;
        isSideBarOpen = !isSideBarOpen;
        this.props.sideBarChange(isSideBarOpen);
        this.setState({
            isSideBarOpen
        })
    }

    backdropClickHandler = () => {
        this.setState({ isSideBarOpen: false })
    }

    sideBarIconChange = () => {
        const { isSideBarOpen } = this.state;
        if (isSideBarOpen) {
            return (
                <Icon type="close" onClick={this.sideBarOpen} />
            )
        } else {
            return (
                <Icon type='menu' onClick={this.sideBarOpen} />
            )
        }
    }

    searchChangeIcon = () => {
        const { isSearchOpen } = this.props;
        if (isSearchOpen) {
            return (
                <Icon type='close' onClick={this.props.searchOpen} style={{ fontSize: '18px' }} />
            )
        } else {
            return (
                <Icon type='search' onClick={this.props.searchOpen} />
            )
        }
    }

    render() {
        const { isSideBarOpen } = this.state;
        const { isSearchOpen } = this.props;
        return (
            <div className={classNames('navbarHeader d-flex flex-row align-items-center justify-content-between', { navbarHeaderFixed: !isSearchOpen })}>
                <div className='iconMenu' >
                    {this.sideBarIconChange()}
                </div>
                <div className='titleHeader'><img src={logoTW} alt=""/></div>
                <div className='iconSearch d-flex flex-row justify-content-center align-content-center'>
                    {this.searchChangeIcon()}
                </div>
                <SideBar show={isSideBarOpen} changeSideBarState={this.sideBarOpen} history={this.props.history} />
                <Search
                    isSearchOpen={isSearchOpen}
                    history={this.props.history}
                    onSearchSuggestionUpdate={this.props.onSearchSuggestionUpdate}
                />
            </div>
        );
    }
}

export default NavbarHeader;