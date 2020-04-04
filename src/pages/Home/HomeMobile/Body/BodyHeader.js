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
                <div className='textHeader'>
                    <span>Tự do kết hợp VẢI & THIẾT KẾ</span>
                </div>
                <Link
                    to={{
                        pathname: '/shopping-store',
                        search: '?cat=all&search'
                    }}
                    onClick={this.updatePixel}
                >
                    <button
                        className='buttonHeder'
                        style={{
                            position: 'absolute',
                            bottom: '14.99vw',
                        }}
                    >
                        TRẢI NGHIỆM NGAY
                    </button>
                </Link>
            </div>
        );
    }
}

export default BodyHeader;
