import React from "react";
import PropTypes from "prop-types";
import Title from './Title';
import Search from './Search';

Header.propTypes = {};

function Header(props) {
    return (
        <div className='admin-order-general__header d-flex justify-content-between align-items-center'>
            <Title/>
            <Search />
        </div>
    );
}

export default Header;
