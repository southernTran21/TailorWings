import React, { Component } from 'react';
import './home.scss';
import classNames from 'classnames';
// import component
import NavbarHeader from './Header/NavbarHeader';
import Body from './Body';
import Footer from './Footer';

export default class HomeMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSideBarOpen: false
        }
    }

    sideBarChange = (isOpen) => {
        if ( isOpen != null ) {
            this.setState({
                isSideBarOpen: isOpen
            })
        }  
    }

    render() {
        return (
            <div className={classNames('pageHomeMobile', { pageFix: this.state.isSideBarOpen })}>
                <NavbarHeader
                    history={this.props.history}
                    sideBarChange={this.sideBarChange}
                />
                <Body
                    visibilityProducts={this.props.visibilityProducts}
                />
                <Footer />
            </div>
        );
    }
}
