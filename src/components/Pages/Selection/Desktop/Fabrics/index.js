import React from 'react';
import PropTypes from 'prop-types';

FabricDesktop.propTypes = {
    
};

function FabricDesktop(props) {
    const array = new Array(20).fill('0');
    return (
        <div className='c-fabric-desktop'>
            {array.map((result, index) => {
                return (
                    <div className="c-fabric-desktop-item" key={index}>
                        <img src="" alt=""/>
                    </div>
                )
            }
            )}
        </div>
    );
}

export default FabricDesktop;