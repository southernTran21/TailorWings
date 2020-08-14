import React from 'react';
import PropTypes from 'prop-types';
import Products from 'components/Pages/Cart/Products';

ProductsContainer.propTypes = {
    
};

function ProductsContainer(props) {
    return (
        <section className='l-cart__products'>
            <Products/>
        </section>
    );
}

export default ProductsContainer;