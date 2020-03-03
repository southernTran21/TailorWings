import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';

// import image Home Page
import Image1 from '../../../../assets/imageHomePage/hero img.jpg';

class BodyHeader extends Component {
    updatePixel = () => {
        ReactPixel.trackCustom('ShoppingStoreAccessWay', 'BuyNow');
        console.log('updated to Pixel');
    };

    render() {
        return (
            <div className='header__bodyPage'>
                <img src={Image1} />
                <Link
                    to={{
                        pathname: '/shopping-store',
                        search: '?cat=all&search'
                    }}
                    onClick={this.updatePixel}
                >
                    <button
                        type='button'
                        className='btn btn-warning'
                        style={{
                            position: 'absolute',
                            bottom: '100px',
                            zIndex: 5,
                            left: '37vw'
                        }}
                    >
                        Mua ngay
                    </button>
                </Link>
            </div>
        );
    }
}

export default BodyHeader;
