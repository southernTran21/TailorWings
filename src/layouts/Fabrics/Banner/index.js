import React from 'react';
import PropTypes from 'prop-types';
import Banner from 'components/Banner';

BannerContainer.propTypes = {
    
};

function BannerContainer(props) {
    return (
        <section className='l-fabrics__banner'>
            <Banner/>
        </section>
    );
}

export default BannerContainer;