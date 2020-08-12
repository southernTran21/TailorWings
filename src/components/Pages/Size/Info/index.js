import React from 'react';
import PropTypes from 'prop-types';
import PriceTag from 'components/PriceTag';

SizeInfo.propTypes = {
    
};

function SizeInfo(props) {
    return (
        <div className="c-size-info">
            <div className="c-size-info--left">
                <span className="c-size-info__name">

                </span>
                <PriceTag price="240.000"/>
            </div>
            <div className="c-size-info--right">

            </div>
        </div>
    );
}

export default SizeInfo;