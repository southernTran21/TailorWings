import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { getWithCondition } from '../../../services/Fundamental'

class RecommendedItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgURL: "",
            name: "",
            price: ""
        }
    }

    componentDidMount() {
        this._ismounted = true;
        const { recommendedProduct } = this.props;
        if (recommendedProduct != null) {
            let modifiedID = recommendedProduct.id.concat(recommendedProduct.patternDefault);
            getWithCondition("product-images", "id", modifiedID)
                .then((image) => {
                    if (this._ismounted === true && image[0].imgPath != null) {
                        this.setState({
                            imgURL: image[0].imgPath[0],
                        })
                    }
                })
        }
        if (this._ismounted) {
            this.setState({
                name: recommendedProduct.name,
                price: recommendedProduct.price
            })
        }
    }

    componentWillUnmount() {
        this._ismounted = false;
    }


    render() {
        const { imgURL, name, price } = this.state;
        return (
            <div className="col-sm-4 col-md-4 col-6 portfolio-item">
                <Link className="portfolio-link" to="/shopping-store?cat=DO">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                            <i className="fas fa-plus fa-3x" />
                        </div>
                    </div>
                    <img className="img-fluid" style={{ height: "auto" }} src={imgURL} alt="" />
                </Link>
                <div className="portfolio-caption">
                    <h4>{name}</h4>
                    <p className="text-muted">{price}</p>
                </div>
            </div>
        );
    }
}

export default RecommendedItems;