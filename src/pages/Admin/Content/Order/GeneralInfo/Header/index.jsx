import React from "react";
import PropTypes from "prop-types";
import Title from './Title';
import Search from './Search';

Header.propTypes = {};

function Header(props) {
    return (
        <div className='admin-order-general__header'>
            <Title />
            <Search />
        </div>
    );
}

export default Header;
