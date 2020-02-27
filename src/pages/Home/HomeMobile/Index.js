import React, { Component } from 'react';
import './home.scss';

// import component
import NavbarHeader from './Header/NavbarHeader';
import Body from './Body';
import Footer from './Footer';

export default class HomeMobile extends Component {
    render() {
        return (
            <div className='pageHomeMobile'>
                <NavbarHeader
                    history={this.props.history}
                />
                <Body
                    visibilityProducts={this.props.visibilityProducts}
                />
                <Footer />
            </div>
        );
    }
}
