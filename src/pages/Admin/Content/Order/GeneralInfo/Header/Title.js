import React from 'react';
import { useSelector } from 'react-redux';

function Title() {
    const orderList = useSelector(state => state.adminOrderReducer.orderList) || [];

    return (
        <div className='admin-order-general__header__title'>
            <span>{`Orders (${orderList.length} items)`}</span>
        </div>
    );
}

export default Title;