import React, { Component } from 'react';
import { Icon } from 'antd';
import SideBar from '../../../../components/SideBar/SideBar'
import Backdrop from '../../../../components/SideBar/Backdrop'
import classNames from 'classnames';

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
        if ( isSideBarOpen ) {
            return (
                <Icon type="close" onClick={this.sideBarOpen} />
            )
        } else {
            return (
                <Icon type='menu' onClick={this.sideBarOpen} />
            )
        }
    }
    
    
    render() {
        const {isSideBarOpen} = this.state;
        let backdrop;
		if (this.state.isSideBarOpen) {
			backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        const changeClassname = classNames(
            ' navbarHeader d-flex flex-row align-items-center justify-content-between',
            // navbarHeader: true,
            // 'd-flex': true,
            // 'flex-row': true,
            // 'align-items-center': true,
            // 'justify-content-between': true,
            // {menuFix: this.state.isSideBarOpen}
        )
        return (
            <div className={changeClassname}>
                <div className='iconMenu' >
                    { this.sideBarIconChange() }
                </div>
                <div className='titleHeader'>TAILOR WINGS</div>
                <div className='iconSearch'>
                    <Icon type='search' />
                </div>
                <SideBar show={isSideBarOpen} changeSideBarState={this.sideBarOpen} history={this.props.history} />
                {backdrop}
            </div>
        );
    }
}

export default NavbarHeader;