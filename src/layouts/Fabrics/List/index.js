import React from 'react';
import PropTypes from 'prop-types';
import Fabrics from 'components/Pages/Fabrics';

ListContainer.propTypes = {
    
};

function ListContainer(props) {
    return (
        <section className='l-fabrics__list'>
            <Fabrics/>
        </section>
    );
}

export default ListContainer;