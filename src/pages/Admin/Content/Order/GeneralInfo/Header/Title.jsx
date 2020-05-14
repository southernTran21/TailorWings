import React from 'react';
import { useSelector } from 'react-redux';

function Title() {
    const orderList = useSelector(state => state.adminOrderReducer.orderList);
    return (
        <div>
            Title
        </div>
    );
}

export default Title;