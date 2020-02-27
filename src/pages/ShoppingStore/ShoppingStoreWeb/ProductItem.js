import './ShoppingStore.css';
import { getDocument } from '../../../services/Fundamental'
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import classNames from 'classnames';
export const imgRef = React.createRef();

class ProductItem extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            selectedProducts: [],
            isWishListChosen: false,
        }
    }

    handleScreenResize = () => {
        setTimeout(() => {
            if (imgRef.current != null) {
                let imgWidth = imgRef.current.getBoundingClientRect().width;
                let imgHeight = imgWidth * 1.25;
                if (this._isMounted) {
                    this.setState({ imgWidth, imgHeight });
                }
            }
        }, 500)
    }

    addToCart = (selectedProduct) => {
        selectedProduct.quantity = 1;
        const { id, name, patternRender, price, renderURL, quantity } = selectedProduct;
        let addedProduct = { id, name, patternRender, price, renderURL, size: "S" };
        this.props.onAddProductToCart(addedProduct, quantity);
    }

    wishListBtnHanling = () => {
        this.setState({
            isWishListChosen: !this.state.isWishListChosen
        })
    }

    render() {
        const { name, price, image, designID, fabricID } = this.props;
        let renderImage = image || [];
        let modifiedPrice = ""
        if ( price != null ) {
            modifiedPrice = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        }
        return (
            <div className="col-sm-4 col-md-4 col-6 tailor-img" style={{ width: "50%" }}>
                <Link to={`/product-detail?id=${designID}&pattern=${fabricID}`}>
                    <img ref={imgRef} src={renderImage[0]} alt={designID} style={{ width: "100%", height: "auto" }} />
                </Link>
                <div className="card-footer d-flex align-items-center justify-content-between">
                    <div>
                        <p className="align-self-center mb-0">{name}</p>
                        <p className="text-blue font-italic mb-0">
                            <span className="mr-1">{modifiedPrice}</span>
                            VND
                        </p>
                    </div>
                    <div className=" d-flex align-items-center flex-column ">
                        <button className="wish-btn" onClick={this.wishListBtnHanling}>
                            <i
                                className={classNames(
                                    { "far fa-heart": !this.state.isWishListChosen },
                                    { "fas fa-heart": this.state.isWishListChosen })}
                            />
                        </button>
                    </div>
                </div> 

            </div>
        )
    }
}

export default ProductItem;
