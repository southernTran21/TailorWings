import React from 'react';
import Logo from './Logo';
import Menu from "./Menu";
import Account from "./Account";

function AdminSidebar() {
    return (
        <div className='admin-sidebar'>
            <Logo />
            <Menu /> 
            <Account />
        </div>
    );
}

export default AdminSidebar;