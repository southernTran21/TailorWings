import React from 'react';
import PropTypes from 'prop-types';

Summary.propTypes = {
    
};

function Summary(props) {
    return (
        <div className='c-summary'>
            <div className="c-summary__amount">
                <p className='c-summary__amount--text1'>Tạm Tính</p>
                <p className='c-summary__amount--text2'>620.000 k</p>
            </div>
            <div className="c-summary__discount">
                <p className='c-summary__discount--text1'>Giảm giá</p>
                <p className='c-summary__discount--text2'>- 90.000 k</p>
            </div>
        </div>
    );
}

export default Summary;