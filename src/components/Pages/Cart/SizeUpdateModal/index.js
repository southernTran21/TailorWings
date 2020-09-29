import React from 'react';
import PropTypes from 'prop-types';
import SizeOptions from 'components/Pages/Size/Options';

SizeUpdateModal.propTypes = {
    isVisible: PropTypes.bool,
};

SizeUpdateModal.defaultProps = {
    isVisible: false
}

function SizeUpdateModal(props) {
    return (
        <div className="c-cart-size-update-modal">
            <div className="c-cart-size-update-modal__content">
                <SizeOptions />
            </div>
        </div>
    );
}

export default SizeUpdateModal;