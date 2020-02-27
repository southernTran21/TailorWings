import React, { Component } from 'react';
import './Sidebar.scss'
import { getAllDataTest, listAllImage, getAllData } from '../../services/Fundamental'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
} from 'react-router-dom'
import DesignAdjustment from './DesignPage/DesignAdjustment';
import Design from './DesignPage/Design';
import Fabrics from './FabricsPage/Fabrics';
import FabricsAdjustment from './FabricsPage/FabricsAdjustment';
import Products from './Product/Products';
import ProductAdjustment from './Product/ProductAdjustment';
import Category from './Category/Category';
import CategoryAdjustment from './Category/CategoryAdjustment';
import Customer from './Customer/Customer';
import Customerdetail from './Customer/CustomerDetail';
import Order from './Order/Order';
import store from '../../stores/myStore'

export const DESIGN_TITLE = ['Add A Design', 'Edit A Design']
export const FABRIC_TITLE = ['Add A Fabric', 'Edit A Fabric']
export const PRODUCT_TITLE = ['Add A Product', 'Edit A Product']
export const CATEGORY_TITLE = ['Add A Category', 'Edit A Category']

const _store = store;

const MenuLink = ({ label, to, activeWhenExact }) => {
    return (
        <Route path={to} exact={activeWhenExact} children={({ math }) => {
            var active = math ? 'active' : '';
            return (
                <li className={active}>
                    <Link to={to}> {label} </Link>
                </li>
            )
        }} />
    )
}


export class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designs: [],
            fabrics: [],
            products: [],
            categories: [],
            orders: [],
            customers: [],
            listDesignImage: []
        }
    }

    componentDidMount() {
        this._isMounted = true;
        const databaseReducer = (_state, action) => {
            switch (action.collection) {
                case 'designs':
                    this.setState({
                        designs: action.data
                    })
                    break;
                case 'fabrics':
                    this.setState({
                        fabrics: action.data
                    })
                    break;
                case 'products':
                    this.setState({
                        products: action.data
                    })
                    break;
                case 'categories':
                    this.setState({
                        categories: action.data
                    })
                    break;
                case 'orders':
                    this.setState({
                        orders: action.data
                    })
                    break;
                case 'customers':
                    this.setState({
                        customers: action.data
                    })
                    break;
                default:
                    break;
            }
            return null;
        }

        // listAllImage('image/designs')
        // .then((result) => {
        //     let listDesignImage = result.items.map(( image ) => {
        //         return image.name;
        //     })
        //     this.setState({
        //         listDesignImage
        //     })
        // })
        // var counter = 1;

        var promiseDesign = new Promise((_resolve, _reject) => {
            getAllDataTest('designs', (collectionData) => {
                if (collectionData != null && this._isMounted === true) {
                    _resolve(collectionData);
                } else {
                    _reject('designs');
                }
            })
        });

        var promiseFabric = new Promise((_resolve, _reject) => {
            getAllDataTest('fabrics', (collectionData) => {
                if (collectionData != null && this._isMounted === true) {
                    _resolve(collectionData);
                } else {
                    _reject('fabrics');
                }
            })
        });

        var promiseProduct = new Promise((_resolve, _reject) => {
            getAllDataTest('products', (collectionData) => {
                if (collectionData != null && this._isMounted === true) {
                    _resolve(collectionData);
                } else {
                    _reject('products');
                }
            })
        });

        var promiseCategory = new Promise((_resolve, _reject) => {
            getAllDataTest('categories', (collectionData) => {
                if (collectionData != null && this._isMounted === true) {
                    _resolve(collectionData);
                } else {
                    _reject('categories');
                }
            })
        });

        var promiseOrder = new Promise((_resolve, _reject) => {
            getAllDataTest('orders', (collectionData) => {
                if (collectionData != null && this._isMounted === true) {
                    _resolve(collectionData);
                } else {
                    _reject('orders');
                }
            })
        });

        var promiseCustomer = new Promise((_resolve, _reject) => {
            getAllDataTest('customers', (collectionData) => {
                if (collectionData != null && this._isMounted === true) {
                    _resolve(collectionData);
                } else {
                    _reject('customers');
                }
            })
        });

        Promise.all([promiseDesign, promiseFabric, promiseProduct, promiseCategory, promiseOrder, promiseCustomer]).then(dataList => {
            this.setState({
                designs: dataList[0],
                fabrics: dataList[1],
                products: dataList[2],
                categories: dataList[3],
                orders: dataList[4],
                customers: dataList[5]
            });
        }).catch(ex => {
            // console.log(ex);
        })
        _store.reducerManager.add('sidebarListenData', databaseReducer);
    }

    componentWillUnmount() {
        this._isMounted = false;
        _store.reducerManager.remove('sidebarListenData');
    }



    render() {
        const { designs, fabrics, products, categories, orders, customers } = this.state;
        return (
            <Router>
                <div className="row" style={{ margin: 0 }}>
                    {/* this is menu */}
                    <div className="sideBar col-2">
                        <ul className="menuSideBar">
                            <MenuLink label="Products" to="/admin/products" />
                            <MenuLink label="Categories" to="/admin/categories" />
                            <MenuLink label="Fabrics" to="/admin/fabrics" />
                            <MenuLink label="Designs" to="/admin/designs" />
                            <MenuLink label="Recommends" to="/admin/recommends" />
                            <MenuLink label="Customers" to="/admin/customers" />
                            <MenuLink label="Orders" to="/admin/orders" />
                        </ul>
                    </div>
                    {/* this is content */}
                    <div className="col-10 design">
                        <Switch>
                            {/* designs */}
                            <Route
                                path="/admin/designs"
                                exact
                                component={() =>
                                    <Design
                                        designs={designs}
                                        products={products}
                                    />
                                }
                            />
                            <Route
                                path="/admin/design-add"
                                exact
                                component={() =>
                                    <DesignAdjustment
                                        history={this.props.history}
                                        designs={designs}
                                        title={DESIGN_TITLE[0]}
                                    />
                                }
                            />
                            <Route
                                path="/admin/design-edit"
                                exact
                                component={() =>
                                    <DesignAdjustment
                                        history={this.props.history}
                                        designs={designs}
                                        title={DESIGN_TITLE[1]}
                                    />
                                }
                            />
                            {/* end */}

                            {/* fabrics */}
                            <Route
                                path="/admin/fabrics"
                                exact
                                component={() =>
                                    <Fabrics
                                        fabrics={fabrics}
                                        products={products}
                                    />
                                }
                            />
                            <Route
                                path="/admin/fabric-add"
                                exact
                                component={() =>
                                    <FabricsAdjustment
                                        history={this.props.history}
                                        fabrics={fabrics}
                                        title={FABRIC_TITLE[0]}
                                    />
                                }
                            />
                            <Route
                                path="/admin/fabric-edit"
                                exact
                                component={() =>
                                    <FabricsAdjustment
                                        history={this.props.history}
                                        fabrics={fabrics}
                                        title={FABRIC_TITLE[1]}
                                    />
                                }
                            />
                            {/* end */}

                            {/* products */}
                            <Route
                                path="/admin/products"
                                exact
                                component={() =>
                                    <Products
                                        products={products}
                                        designs={designs}
                                        fabrics={fabrics}
                                        categories={categories}
                                    />
                                }
                            />
                            <Route
                                path="/admin/product-add"
                                exact
                                component={() =>
                                    <ProductAdjustment
                                        history={this.props.history}
                                        title={PRODUCT_TITLE[0]}
                                        products={products}
                                        designs={designs}
                                        fabrics={fabrics}
                                        categories={categories}
                                    />
                                }
                            />
                            <Route
                                path="/admin/product-edit"
                                exact
                                component={() =>
                                    <ProductAdjustment
                                        history={this.props.history}
                                        title={PRODUCT_TITLE[1]}
                                        products={products}
                                        designs={designs}
                                        fabrics={fabrics}
                                        categories={categories}
                                    />
                                }
                            />
                            {/* end */}

                            {/* Category */}
                            <Route
                                path="/admin/categories"
                                exact component={() =>
                                    <Category
                                        categories={categories}
                                        products={products}
                                    />
                                }
                            />
                            <Route
                                path="/admin/category-add"
                                exact component={() =>
                                    <CategoryAdjustment
                                        history={this.props.history}
                                        categories={categories}
                                        title={CATEGORY_TITLE[0]}
                                    />
                                }
                            />
                            <Route
                                path="/admin/category-edit"
                                exact component={() =>
                                    <CategoryAdjustment
                                        history={this.props.history}
                                        categories={categories}
                                        title={CATEGORY_TITLE[1]}
                                    />
                                }
                            />
                            {/* end */}
                            {/* Customers */}
                            <Route
                                path="/admin/customers"
                                exact component={() =>
                                    <Customer
                                        customers={customers}
                                        orders={orders}
                                    />}
                            />
                            <Route
                                path="/admin/customer-detail"
                                exact component={() =>
                                    <Customerdetail
                                        customers={customers}
                                        orders={orders}
                                    />}
                            />
                            {/* end */}
                            {/* Orders */}
                            <Route
                                path="/admin/orders"
                                exact component={() =>
                                    <Order
                                        orders={orders}
                                        customers={customers}
                                    />
                                }
                            />
                            {/* end */}
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Sidebar;
