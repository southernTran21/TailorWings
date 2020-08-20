import React from 'react';

Banner.propTypes = {
    
};

function Banner(props) {
    return (
        <div className='c-banner'>
            <img src="https://picsum.photos/200/300" alt="image" className="c-banner__image"/>
        </div>
    );
}

export default Banner;