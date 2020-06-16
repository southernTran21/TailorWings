import classNames from "classnames";
import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { history } from "services/CommonParameter";
import { removePunctuation } from "../../../services/CommonFunction";
import Body from "./Body";
import Footer from "./Footer";
// import component
import NavbarHeader from "./Header/NavbarHeader";
import "./home.scss";
import SearchSuggest from "./SearchSuggest";

function HomeMobile() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [suggestedSearch, setSuggestedSearch] = useState([]);

    const designs = useSelector((state) => state.homeReducer.designs);
    const bestSellers = useSelector((state) => state.homeReducer.bestSellers);
    const categories = useSelector((state) => state.homeReducer.categories);
    const collections = useSelector((state) => state.homeReducer.collections);

    function searchOpen() {
        setIsSearchOpen(!isSearchOpen);
    }

    function sideBarChange(isOpen) {
        setIsSideBarOpen(isOpen);
    }

    function onSearchSuggestionUpdate(searchInput) {
        if (!searchInput) return;
        let newSuggestion = designs.filter((design) => {
            let name = design.name.toLowerCase();
            name = removePunctuation(name);
            searchInput = searchInput.toLowerCase();
            searchInput = removePunctuation(searchInput);
            return name.search(searchInput) !== -1;
        });
        setSuggestedSearch(newSuggestion);
    }

    function onBodyContentChange() {
        if (isSearchOpen) {
            return (
                <Fragment>
                    <SearchSuggest
                        suggestedSearch={suggestedSearch}
                        searchOpen={searchOpen}
                        bestSellers={bestSellers}
                    />
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <Body
                        bestSellers={bestSellers}
                        categories={categories}
                        collections={collections}
                    />
                    <Footer />
                </Fragment>
            );
        }
    }

    return (
        <div
            className={classNames("pageHomeMobile", {
                pageFix: isSideBarOpen,
            })}
        >
            <NavbarHeader
                history={history}
                isSearchOpen={isSearchOpen}
                sideBarChange={sideBarChange}
                searchOpen={searchOpen}
                onSearchSuggestionUpdate={onSearchSuggestionUpdate}
            />
            {onBodyContentChange()}
        </div>
    );
}

export default HomeMobile;

// export default class HomeMobile extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isSideBarOpen: false,
//             isSearchOpen: false,
//         };
//     }

//     searchOpen = () => {
//         let { isSearchOpen } = this.state;
//         isSearchOpen = !isSearchOpen;
//         this.setState({
//             isSearchOpen,
//         });
//     };

//     sideBarChange = (isOpen) => {
//         if (isOpen != null) {
//             this.setState({
//                 isSideBarOpen: isOpen,
//             });
//         }
//     };

//     onSearchSuggestionUpdate = (searchInput) => {
//         let { visibilityProducts } = this.props;
//         let { suggestedSearch } = this.state;
//         visibilityProducts = visibilityProducts.filter((product) => {
//             if (product.default) {
//                 let name = product.name.toLowerCase();
//                 name = removePunctuation(name);
//                 searchInput = searchInput.toLowerCase();
//                 searchInput = removePunctuation(searchInput);
//                 return name.search(searchInput) !== -1;
//             }
//         });
//         if (searchInput !== "") {
//             suggestedSearch = visibilityProducts.map((product) => {
//                 return product.name;
//             });
//         } else {
//             suggestedSearch = [];
//         }
//         this.setState({
//             suggestedSearch,
//         });
//     };

//     onBodyContentChange = () => {
//         let { isSearchOpen, suggestedSearch, bestSellerInfo } = this.state;
//         const { bestSellerList, visibilityProducts } = this.props;
//         if (bestSellerList.length > 0 && visibilityProducts.length > 0) {
//             visibilityProducts.forEach((product) => {
//                 if (
//                     bestSellerList.includes(product.designID) &&
//                     product.default === true
//                 ) {
//                     bestSellerInfo.push(product);
//                 }
//             });
//             bestSellerInfo.forEach((info) => {
//                 let totalSupportedFabric = visibilityProducts.filter(
//                     (product) => product.designID === info.designID
//                 ).length;
//                 info.totalSupportedFabric = totalSupportedFabric;
//             });
//         }
//         if (isSearchOpen) {
//             return (
//                 <div>
//                     <SearchSuggest
//                         suggestedSearch={suggestedSearch}
//                         searchOpen={this.searchOpen}
//                         bestSellerInfo={bestSellerInfo}
//                     />
//                 </div>
//             );
//         } else {
//             return (
//                 <Fragment>
//                     <Body
//                         visibilityProducts={this.props.visibilityProducts}
//                         bestSellerInfo={bestSellerInfo}
//                         collectionsInfo={this.props.collectionsInfo}
//                     />
//                     <Footer />
//                 </Fragment>
//             );
//         }
//     };

//     render() {
//         let { isSearchOpen } = this.state;
//         return (
//             <div
//                 className={classNames("pageHomeMobile", {
//                     pageFix: this.state.isSideBarOpen,
//                 })}
//             >
//                 <NavbarHeader
//                     history={this.props.history}
//                     isSearchOpen={isSearchOpen}
//                     sideBarChange={this.sideBarChange}
//                     searchOpen={this.searchOpen}
//                     onSearchSuggestionUpdate={this.onSearchSuggestionUpdate}
//                 />
//                 {this.onBodyContentChange()}
//             </div>
//         );
//     }
// }
