/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Category.scss';
import { Icon } from 'antd';
import { Link } from 'react-router-dom'
import Search from 'antd/lib/input/Search';
import { setDocument } from '../../../services/Fundamental'
import { removePunctuation } from '../../../services/CommonFunction';

export class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderCategories: []
        }
    }

    componentDidMount() {
        const { categories } = this.props;
        this.setState({
            renderCategories: categories
        })
    }

    visibilityChangeHandling = (e, prevStatus) => {
        const { renderCategories } = this.state;
        let index = e.target.name;
        let changedCategories = renderCategories;
        changedCategories[index].visibility = !prevStatus;
        setDocument('categories', changedCategories[index], changedCategories[index].id)
            .then((success) => {
                if (success) {
                    this.setState({
                        renderCategories: changedCategories
                    })
                }
            })
    }

    searchFilter = (e) => {
        let searchInput = removePunctuation(e.target.value.toLowerCase()) || "";
        let { renderCategories } = this.state;
        const { categories } = this.props;
        renderCategories = categories.filter((category) => {
            let name = category.name.toLowerCase();
            name = removePunctuation(name);
            return name.search( searchInput ) !== -1;
        })
        if ( renderCategories.length === 0 ) {
            renderCategories = categories.filter((category) => {
                let id = category.id.toLowerCase();
                return id.search( searchInput ) !== -1;
            })
        }
        this.setState({
            renderCategories
        })
    }

    render() {
        const { products } = this.props;
        const { renderCategories } = this.state;
        return (
            <div className="pageCategory">
                <div className="headerPageCategory d-flex flex-row justify-content-between align-items-center">
                    <h2 className="d-flex justify-content-start" style={{ margin: 0 }}>{`Category (${renderCategories.length})`}</h2>
                    <Link to="/admin/category-add">
                        <div className="buttonAddCategory d-flex justify-content-end">
                            <p>Add Category</p>
                        </div>
                    </Link>
                </div>
                <div className="showCategory">
                    <div className="inputSearch d-flex flex-row align-items-center">
                        <Icon type="search" />
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.searchFilter} />
                    </div>
                    <div className="tableProduct">
                        <div className="headerTable d-flex">
                            <div className="col-2"></div>
                            <div className="col-3">Category Name</div>
                            <div className="col-2 text-center">NoProduct</div>
                            <div className="col-2 text-center">Discount</div>
                            <div className="col-3 text-center">Visibility</div>
                        </div>
                        {/* content categories */}
                        {renderCategories.map((category, index) => {
                            let allRelatedProduct = products.filter((product) => {
                                return product.catID === category.id
                            })
                            if (category != null) {
                                return (
                                    <div key={index} className="contentTable d-flex flex-row align-items-center">
                                        <div className="col-2 d-flex flex-row justify-content-center">
                                            <div className="imgProduct">
                                                <Link to={{
                                                    pathname: "/admin/category-edit",
                                                    search: `?id=${category.id}`
                                                }}>
                                                    <img src={category.image} alt={category.id} style={{ width: "100%", height: "auto" }} />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <Link to={{
                                                pathname: "/admin/category-edit",
                                                search: `?id=${category.id}`,
                                            }} >
                                                <p>{category.name}</p>
                                            </Link>

                                        </div>
                                        <div className="col-2 text-center">{allRelatedProduct.length}</div>
                                        <div className="col-2 text-center">{category.discount}%</div>
                                        <div className="col-3 text-center">
                                            <a
                                                name={index}
                                                className={category.visibility ? "far fa-eye" : "far fa-eye-slash"}
                                                onClick={(e) => this.visibilityChangeHandling(e, category.visibility)}
                                            />
                                        </div>
                                    </div>
                                )
                            }
                        })
                        }
                    </div>
                </div>
            </div >
        );
    }
}

export default Category;
