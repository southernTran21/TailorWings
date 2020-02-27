import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';

class BodyHeader extends Component {
    
    updatePixel = () => {
        ReactPixel.trackCustom("ShoppingStoreAccessWay", "BuyNow");
        console.log("updated to Pixel")
    }

    render() {
        return (
            <div className='header__bodyPage'>
                <Link
                    to="/shopping-store?cat=all"
                    onClick={this.updatePixel}
                >
                    <button
                        type="button"
                        className="btn btn-warning"
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