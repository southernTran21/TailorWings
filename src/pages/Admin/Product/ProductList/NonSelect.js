import React, { Component } from "react";
import { Icon, Cascader, Input } from "antd";
import "./NonSelect.scss";
import classNames from "classnames";
import { removePunctuation } from "../../../../services/CommonFunction";

export class NonSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            optionsCategories: [
                {
                    value: "allProducts",
                    label: "All Products",
                },
            ],
            optionsCollections: [
                {
                    value: "allProducts",
                    label: "All Products",
                },
            ],
            searchValue: "",
        };
    }

    componentDidMount() {
        const { categories, collections } = this.props;
        let { optionsCategories, optionsCollections } = this.state;
        categories.forEach((category) => {
            if (category != null) {
                if (category.visibility === true) {
                    let option = {
                        value: category.id,
                        label: category.name,
                    };
                    optionsCategories.push(option);
                }
            }
        });
        collections.forEach((collection) => {
            if (collection != null) {
                if (collection.visibility === true) {
                    let option = {
                        value: collection.id,
                        label: collection.name,
                    };
                    optionsCollections.push(option);
                }
            }
        });
        this.setState({
            optionsCategories,
            optionsCollections,
        });
    }

    onCategoryChange = (e) => {
        if (e.length > 0) {
            this.props.onCategoryFilter(e[0]);
        }
    };

    onCollectionChange = (e) => {
        if (e.length > 0) {
            this.props.onCollectionFilter(e[0]);
        }
    };

    onSearchChange = (e) => {
        if (e.target.value != null) {
            this.setState({
                searchValue: e.target.value,
            });
        }
    };

    searchFilter = () => {
        const { initialProducts } = this.props;
        const { searchValue } = this.state;
        let searchInput = removePunctuation(searchValue.toLowerCase()).replace(/\s+/g, '') || "";
        let filteredProducts = [];
        console.log('searchInput :', searchInput);
        filteredProducts = initialProducts.filter((product) => {
            let name = removePunctuation(product.name.toLowerCase()).replace(/\s+/g, '');
            console.log('name :', name);
            return name.search(searchInput) !== -1;
        });
        if (filteredProducts.length === 0) {
            filteredProducts = initialProducts.filter((product) => {
                let id = removePunctuation(product.productID.toLowerCase()).replace(/\s+/g, '');
                console.log('id :', id);
                return id.search(searchInput) !== -1;
            });
        }
        this.props.onSearching(filteredProducts);
    };

    render() {
        const { isOpen } = this.props;
        const {
            optionsCategories,
            optionsCollections,
            searchValue,
        } = this.state;
        return (
            <div
                className={classNames({
                    "headerShowProduct d-flex flex-row justify-content-between align-items-center": isOpen,
                    close: !isOpen,
                })}
            >
                <div className="inputSearch d-flex flex-row align-items-center">
                    <Icon type="search" />
                    <Input
                        onChange={this.onSearchChange}
                        className="form-control"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchValue}
                        onPressEnter={this.searchFilter}
                    />
                </div>
                <div className="inputCollection d-flex flex-row align-items-center">
                    <p className="d-flex flex-row align-items-center">
                        Category
                    </p>
                    <Cascader
                        options={optionsCategories}
                        placeholder=""
                        defaultValue={["allProducts"]}
                        onChange={this.onCategoryChange}
                    />
                </div>
                <div className="inputFilter d-flex flex-row align-items-center">
                    <p className="d-flex flex-row align-items-center">Filter</p>
                    <Cascader
                        options={optionsCollections}
                        placeholder=""
                        defaultValue={["allProducts"]}
                        onChange={this.onCollectionChange}
                    />
                </div>
            </div>
        );
    }
}

export default NonSelect;
