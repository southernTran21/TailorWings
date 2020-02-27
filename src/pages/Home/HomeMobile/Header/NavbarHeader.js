import React, { Component } from 'react';
import { Icon } from 'antd';
import SideBar from '../../../../components/SideBar/SideBar'
import Backdrop from '../../../../components/SideBar/Backdrop'

class NavbarHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSideBarOpen: false
        }
    }
    

    sideBarOpen = () => {
        const { isSideBarOpen } = this.props;
		this.setState({
            isSideBarOpen: !isSideBarOpen
        })
	}

	backdropClickHandler = () => {
		this.setState({ isSideBarOpen: false })
    }
    
    render() {
        const {isSideBarOpen} = this.state;
        let backdrop;
		if (this.state.isSideBarOpen) {
			backdrop = <Backdrop click={this.backdropClickHandler} />
		}
        return (
            <div className='navbarHeader d-flex flex-row align-items-center justify-content-between'>
                <div className='hamburgerMenu' onClick={this.sideBarOpen}>
                    <Icon type='menu' />
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