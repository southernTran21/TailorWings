import './App.scss';
import { Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import { getAllData, getWithCondition } from '../services/Fundamental';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import MediaButton from '../components/MediaButton/MediaButton';
import ShoppingStore from '../pages/ShoppingStore/index';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';
import Home from '../pages/Home/Index';
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Admin from '../pages/Admin/Admin';
import { ProtectedRoute } from './ProtectedRoute';
import Media from 'react-media';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

export const history = createBrowserHistory();

const initGA = () => {
  console.log('initGA');
  ReactGA.initialize('UA-159143322-1')
}

const logPageViewGA = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname + window.location.search)
}

const initPixel = () => {
  const options = {
    autoConfig: true, 	// set pixel's autoConfig
    debug: false, 		// enable logs
  };
  ReactPixel.init('506451380072555', null, options);
}

const logPageViewPixel = () => {
  ReactPixel.pageView(window.location.pathname + window.location.search);
}


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibilityProducts: [],
      categoriesInfo: [],
      designsInfo: [],
      fabricsInfo: [],
      topIntervalId: 0,
      scrollStepInPx: 50,
      delayInMs: 10,
      localStorageUpdated: false
    };
    // this._scrollToTop = this._scrollToTop.bind(this);
    // this._scrollStep = this._scrollStep.bind(this);
  }

  componentDidMount() {
    initGA();
    logPageViewGA();
    initPixel();
    logPageViewPixel();
    this.getCategories();
    this.getVisibilityProducts();
    this.getDesigns();
    this.getFabrics();
  }

  getCategories = () => {
    getWithCondition("categories", "visibility", true)
      .then((categoriesInfo) => {
        if (categoriesInfo != null) {
          this.setState({
            categoriesInfo
          })
        }
      })
  }

  getVisibilityProducts = () => {
    getWithCondition("products", "visibility", true)
      .then((products) => {
        if (products != null) {
          let visibilityProducts = products.filter(product => product.visibility === true);
          this.setState({
            visibilityProducts
          })
        }
      })
  }

  getDesigns = () => {
    getAllData("designs")
      .then((designsInfo) => {
        if (designsInfo != null) {
          this.setState({
            designsInfo
          })
        }
      })
  }

  getFabrics = () => {
    getAllData("fabrics")
      .then((fabricsInfo) => {
        if (fabricsInfo != null) {
          this.setState({
            fabricsInfo
          })
        }
      })
  }


  // _scrollToTop = () => {
  //   let topIntervalId = setInterval(this._scrollStep, this.state.delayInMs);
  //   this.setState({ topIntervalId });
  // }

  // _scrollStep = () => {
  //   if (window.pageYOffset === 0) {
  //     clearInterval(this.state.topIntervalId);
  //   }
  //   window.scroll(0, window.pageYOffset - this.state.scrollStepInPx)
  // }

  render() {
    const {
      visibilityProducts,
      designsInfo,
      categoriesInfo,
      fabricsInfo
    } = this.state;
    return (
      <React.Fragment>
        <Router history={history}>
          <Media queries={{ small: { maxWidth: 1024 } }}>
            {matches =>
              matches.small ?
                (
                  null
                ) :
                (
                  <React.Fragment>
                    <NavBar
                      history={history}
                    // sideBarOpen={this.sideBarOpen}
                    />
                    <MediaButton
                      history={history}
                    />
                  </React.Fragment>
                )
            }
          </Media>
          <Switch>
            <Route path="/" exact component={() =>
              <Home
                history={history}
                visibilityProducts={visibilityProducts}
              />
            } />
            <Route path="/shopping-store" exact component={() =>
              <ShoppingStore
                history={history}
                visibilityProducts={visibilityProducts}
                designsInfo={designsInfo}
                categoriesInfo={categoriesInfo}
                localStorageUpdatedHandling={this._localStorageUpdatedHandling}
              />
            } />
            <Route path="/product-detail" exact component={() =>
              <ProductDetail
                history={history}
                visibilityProducts={visibilityProducts}
                designsInfo={designsInfo}
                fabricsInfo={fabricsInfo}
                localStorageUpdatedHandling={this._localStorageUpdatedHandling}
              />
            } />
            <Route path="/shopping-cart" exact component={() => <ShoppingCart />} />
            <ProtectedRoute path="/admin" component={(props) => <Admin {...props} />} />
            {/* <ProtectedRoute exact path="/admin" render={(props) => <Admin {...props} />} /> */}
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
          <Media queries={{ small: { maxWidth: 1024 } }}>
            {matches =>
              matches.small ?
                (
                  null
                ) :
                (
                  <React.Fragment>
                    <Footer history={history} />
                  </React.Fragment>
                )
            }
          </Media>
        </Router>
      </React.Fragment>
    )
  }
}
