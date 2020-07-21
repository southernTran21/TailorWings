import React from 'react';
import PropTypes from 'prop-types';
import Banner from 'components/Banner';

BannerContainer.propTypes = {
    
};

function BannerContainer(props) {
    return (
        <section className='home-banner'>
            <Banner/>
        </section>
    );
}

export default BannerContainer;