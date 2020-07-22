import Banner from 'components/Banner';
import React from 'react';

BannerContainer.propTypes = {
    
};

function BannerContainer(props) {
    return (
        <section className='l-home__banner'>
            <Banner/>
        </section>
    );
}

export default BannerContainer;