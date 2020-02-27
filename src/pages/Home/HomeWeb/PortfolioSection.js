import React, { Component } from 'react';
// import princessDress from '../../assets/theme/template/img/portfolio/princess-dress.jpg';
// import tentDress from '../../assets/theme/template/img/portfolio/tent-dress.jpg';
// import sheathDress from '../../assets/theme/template/img/portfolio/sheath-dress.jpg';
// import dropWaistDress from '../../assets/theme/template/img/portfolio/drop-waist-dress.jpg';
// import shirtWaistDress from '../../assets/theme/template/img/portfolio/shirtwaist-dress.jpg';
// import alineDress from '../../assets/theme/template/img/portfolio/aline-dress.jpg';
import { getWithCondition } from '../../../services/Fundamental'
import RecommendedItems from './RecommendedItems';

export default class PortfolioSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recommendedProducts: [],
            recommendImgID: [],
            isGot: false
        }
    }

    componentDidMount() {
        this._ismounted = true;
        getWithCondition("products", "recommended", true)
            .then((products) => {
                let recommendedProducts = products || [];
                let recommendImgID = [];
                recommendedProducts.forEach((product) => {
                    let modifiedID = product.id.concat(product.patternDefault) || "";
                    if (modifiedID !== "") {
                        recommendImgID.push(modifiedID);
                    }
                })
                if ( this._ismounted ) {
                    this.setState({
                        recommendedProducts,
                        recommendImgID,
                        isGot: true
                    })
                }
            })
        
    }

    componentWillUnmount() {
        this._ismounted = false;
    }
    

    render() {
        const { recommendImgID, recommendedProducts } = this.state;
        return (
            <section className="bg-light page-section" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">We Tailor Your Wings</h2>
                            <h3 className="section-subheading text-muted">“The joy of dressing is an art” – John Galliano</h3>
                        </div>
                    </div>
                    <div className="row">
                        { recommendedProducts.map((product, index) => {
                            if (product != null) {
                                return <RecommendedItems recommendedProduct={product} key={index} />
                            }
                        })}
                        {/* <div className="col-sm-4 col-md-4 col-6 portfolio-item">
                            <Link className="portfolio-link" to="/shopping-store?cat=DO">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fas fa-plus fa-3x" />
                                    </div>
                                </div>
                                <img className="img-fluid" src={princessDress} alt="" />
                            </Link>
                            <div className="portfolio-caption">
                                <h4>Đầm Ôm</h4>
                                <p className="text-muted">English Name</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-6 portfolio-item">
                            <Link className="portfolio-link" to="/shopping-store?cat=DX">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fas fa-plus fa-3x" />
                                    </div>
                                </div>
                                <img className="img-fluid" src={tentDress} alt="" />
                            </Link>
                            <div className="portfolio-caption">
                                <h4>Đầm xòe</h4>
                                <p className="text-muted">English Name</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-6 portfolio-item">
                            <Link className="portfolio-link" to="/shopping-store?cat=DS">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fas fa-plus fa-3x" />
                                    </div>
                                </div>
                                <img className="img-fluid" src={sheathDress} alt="" />
                            </Link>
                            <div className="portfolio-caption">
                                <h4>Đầm Suông</h4>
                                <p className="text-muted">English Name</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-6 portfolio-item">
                            <Link className="portfolio-link" to="/shopping-store?cat=DCS">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fas fa-plus fa-3x" />
                                    </div>
                                </div>
                                <img className="img-fluid" src={dropWaistDress} alt="" />
                            </Link>
                            <div className="portfolio-caption">
                                <h4>Đầm Công Sở</h4>
                                <p className="text-muted">English Name</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-6 portfolio-item">
                            <Link className="portfolio-link" to="/shopping-store?cat=DDP">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fas fa-plus fa-3x" />
                                    </div>
                                </div>
                                <img className="img-fluid" src={shirtWaistDress} alt="" />
                            </Link>
                            <div className="portfolio-caption">
                                <h4>Đầm dạo phố</h4>
                                <p className="text-muted">English Name</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-6 portfolio-item">
                            <Link className="portfolio-link" to="/shopping-store?cat=DDT">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fas fa-plus fa-3x" />
                                    </div>
                                </div>
                                <img className="img-fluid " src={alineDress} alt="" />
                            </Link>
                            <div className="portfolio-caption">
                                <h4>Đầm Dự Tiệc</h4>
                                <p className="text-muted">English Name</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        )
    }
}
