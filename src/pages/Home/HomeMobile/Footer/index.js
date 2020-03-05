import React, { Component } from 'react';
import FitMenu from './FitMenu';
import FooterPage from './Footer';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <FooterPage />
                {/* <FitMenu /> */}
            </React.Fragment>
        );
    }
}

export default Footer;
