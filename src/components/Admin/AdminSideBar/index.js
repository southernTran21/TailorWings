import React from 'react';
import Logo from './Logo';
import Menu from "./Menu";
import Account from "./Account";
import './AdminSideBar.scss'

function AdminSidebar() {
    return (
        <div className='admin-sidebar d-flex flex-column align-items-center'>
            <Logo />
            <Menu /> 
            <Account />
        </div>
    );
}

export default AdminSidebar;