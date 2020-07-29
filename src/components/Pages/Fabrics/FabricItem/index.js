import React from 'react';
import PropTypes from 'prop-types';

FabricItem.propTypes = {
    
};

function FabricItem(props) {
    return (
        <div className='c-fabric-item'>
            <div className="c-fabric-item__image">
                <img src="" alt="fabric"/>
            </div>
            <div className="c-fabric-item__name">
                <p>Vải Lụa Pháp Vàng Nghệ</p>
            </div>
            <div className="c-fabric-item__tag">
                <span>Lụa</span>
            </div>
        </div>
    );
}

export default FabricItem;