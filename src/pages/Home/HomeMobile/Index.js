import React, { Component } from 'react';
import './home.scss';
import classNames from 'classnames';
import { removePunctuation } from "../../../services/CommonFunction";
// import component
import NavbarHeader from './Header/NavbarHeader';
import Body from './Body';
import Footer from './Footer';
import SearchSuggest from './SearchSuggest';

export default class HomeMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSideBarOpen: false,
            isSearchOpen: false,
            suggestedSearch: [],
            bestSellerInfo: []
        }
    }

    componentDidMount() {
        const { bestSellerList, visibilityProducts } = this.props;
        let { bestSellerInfo } = this.state;
        visibilityProducts.forEach((product) => {
            if ( bestSellerList.includes(product.designID) && product.default === true ) {
                bestSellerInfo.push(product);
            }
        })
        bestSellerInfo.forEach((info) => {
            let totalSupportedFabric = visibilityProducts.filter((product) => product.designID === info.designID).length;
            info.totalSupportedFabric = totalSupportedFabric;
        })
        this.setState({
            bestSellerInfo
        })
    }
    

    searchOpen = () => {
        let { isSearchOpen } = this.state;
        isSearchOpen = !isSearchOpen;
        this.setState({
            isSearchOpen
        })
    }

    sideBarChange = (isOpen) => {
        if (isOpen != null) {
            this.setState({
                isSideBarOpen: isOpen
            })
        }
    }

    onSearchSuggestionUpdate = (searchInput) => {
        let { visibilityProducts } = this.props;
        let { suggestedSearch } = this.state;
        visibilityProducts = visibilityProducts.concat(visibilityProducts);
        visibilityProducts = visibilityProducts.concat(visibilityProducts);
        visibilityProducts = visibilityProducts.concat(visibilityProducts);
        visibilityProducts = visibilityProducts.filter(product => {
            let name = product.name.toLowerCase();
            name = removePunctuation(name);
            searchInput = searchInput.toLowerCase();
            searchInput = removePunctuation(searchInput);
            return name.search(searchInput) !== -1;
        });
        if (searchInput !== '') {
            suggestedSearch = visibilityProducts.map((product) => {
                return product.name;
            })
        } else {
            suggestedSearch = []
        }
        this.setState({
            suggestedSearch
        })
    }

    onBodyContentChange = () => {
        const { isSearchOpen, suggestedSearch, bestSellerInfo } = this.state;
        if (isSearchOpen) {
            return (
                <div>
                    <SearchSuggest
                        suggestedSearch={suggestedSearch}
                        searchOpen={this.searchOpen}
                        bestSellerInfo={bestSellerInfo}
                    />
                </div>
            )
        } else {
            return (
                <React.Fragment>
                    <Body
                        visibilityProducts={this.props.visibilityProducts}
                    />
                    <Footer />
                </React.Fragment>
            )
        }
    }

    render() {
        const { isSearchOpen } = this.state;
        return (
            <div className={classNames('pageHomeMobile', { pageFix: this.state.isSideBarOpen })}>
                <NavbarHeader
                    history={this.props.history}
                    isSearchOpen={isSearchOpen}
                    sideBarChange={this.sideBarChange}
                    searchOpen={this.searchOpen}
                    onSearchSuggestionUpdate={this.onSearchSuggestionUpdate}
                />
                { this.onBodyContentChange() }
            </div>
        );
    }
}
