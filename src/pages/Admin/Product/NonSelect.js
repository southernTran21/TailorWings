import React, { Component } from 'react';
import { Icon, Cascader } from 'antd';
import './NonSelect.scss'
import classNames from 'classnames'
import { removePunctuation } from '../../../services/CommonFunction';

export class NonSelect extends Component {
    state = {
        optionsCategories: [
            {
                value: 'allProducts',
                label: 'All Products',
            },
        ],
        optionsCollections: [
            {
                value: 'allProducts',
                label: 'All Products',
            },
        ]
    }

    componentDidMount() {
        const { categories, collections } = this.props;
        let { optionsCategories, optionsCollections } = this.state;
        categories.forEach((category) => {
            if (category != null) {
                if (category.visibility === true) {
                    let option = {
                        value: category.id,
                        label: category.name
                    }
                    optionsCategories.push(option);
                }
            }
        })
        collections.forEach((collection) => {
            if (collection != null) {
                if (collection.visibility === true) {
                    let option = {
                        value: collection.id,
                        label: collection.name
                    }
                    optionsCollections.push(option);
                }
            }
        })
        this.setState({
            optionsCategories,
            optionsCollections
        })
    }

    onCategoryChange = (e) => {
        if (e.length > 0) {
            this.props.onCategoryFilter(e[0]);
        }
    }

    onCollectionChange = (e) => {
        if (e.length > 0) {
            this.props.onCollectionFilter(e[0]);
        }
    }

    searchFilter = (e) => {
        const { renderProducts } = this.props;
        let searchInput = removePunctuation(e.target.value.toLowerCase()) || "";
        let filteredProducts = [];
        filteredProducts = renderProducts.filter((product) => {
            let name = product.name.toLowerCase();
            name = removePunctuation(name);
            return name.search(searchInput) !== -1;
        })
        if (filteredProducts.length === 0) {
            filteredProducts = renderProducts.filter((product) => {
                let id = product.productID.toLowerCase();
                return id.search(searchInput) !== -1;
            })
        }
        this.props.onSearching(filteredProducts);
    }

    render() {
        // const optionsCategories = [
        //     {
        //         value: 'allProducts',
        //         label: 'All Products',
        //     },
        // ];
        // const optionsFilter = [
        //     {
        //         value: 'all',
        //         label: 'All',
        //     },
        // ];
        const { isOpen } = this.props;
        const { optionsCategories, optionsCollections } = this.state;
        return (
            <div className={classNames({ "headerShowProduct d-flex flex-row justify-content-between align-items-center": isOpen, close: !isOpen })}>
                <div className="inputSearch d-flex flex-row align-items-center">
                    <Icon type="search" />
                    <input onChange={this.searchFilter} className="form-control" type="text" placeholder="Search" aria-label="Search" />
                </div>
                <div className="inputCollection d-flex flex-row align-items-center">
                    <p className="d-flex flex-row align-items-center">Category</p>
                    <Cascader
                        options={optionsCategories}
                        placeholder=""
                        defaultValue={['allProducts']}
                        onChange={this.onCategoryChange}
                    />
                </div>
                <div className="inputFilter d-flex flex-row align-items-center">
                    <p className="d-flex flex-row align-items-center">Filter</p>
                    <Cascader
                        options={optionsCollections}
                        placeholder=""
                        defaultValue={['allProducts']}
                        onChange={this.onCollectionChange}
                    />
                </div>
            </div>
        );
    }
}

export default NonSelect;
