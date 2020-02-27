import React, { Component } from 'react'
import './ShoppingStore.css'
import FilterItems from './FilterItems';

export default class FilterTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSizeFiltered: [],
        }
        this._filterHandling = this._filterHandling.bind(this);
        this._sortHandling = this._sortHandling.bind(this);
    }
    _filterHandling = (event) => {
        // const { filterHandling } = this.props;
        // let currentSizeFiltered = this.state.currentSizeFiltered;
        // let nextFilter = new Set(currentSizeFiltered);
        // let targetValue = event.target.value;
        // let targetChecked = event.target.checked;
        // if (targetChecked) {
        //     nextFilter.add(targetValue);
        // } else {
        //     if (nextFilter.has(targetValue)) {
        //         nextFilter.delete(targetValue);
        //     }
        // }
        // currentSizeFiltered = [...nextFilter];
        // this.setState({ currentSizeFiltered })
        // filterHandling(currentSizeFiltered);
    }

    _sortHandling = (sortType) => {
        this.props.priceSortHandling(sortType)
    }

    render() {
        return (
            <div className="col-md-3 col-sm-6 col-xs-6">
                <FilterItems
                    categoriesInfo={this.props.categoriesInfo}
                    sortHandling={this._sortHandling}
                />
            </div>
        )
    }
}
