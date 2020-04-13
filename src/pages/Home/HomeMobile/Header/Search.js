import React, { Component } from "react";
import { Input, Icon, Button } from "antd";
import classNames from "classnames";
import { Link } from 'react-router-dom'
import { removePunctuation } from '../../../../services/CommonFunction'
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }

    onSearchInputChange = (e) => {
        let { searchValue } = this.state;
        let value = e.target.value;
        searchValue = value;
        this.props.onSearchSuggestionUpdate(searchValue);
        this.setState({
            searchValue
        })
    }

    render() {
        const { searchValue } = this.state;
        let { isSearchOpen } = this.props;
        const changeClassNames = classNames(
            "d-flex flex-row align-content-center",
            {
                "search-wraper": !isSearchOpen,
                searchOpen: isSearchOpen
            }
        );
        let modifiedSearchValue = '';
        if (searchValue !== '') {
            modifiedSearchValue = removePunctuation(searchValue);
            modifiedSearchValue = modifiedSearchValue.replace(/ /g, '-')
        }
        return (
            <div className={changeClassNames}>
                <div className="borderSearch d-flex flex-row justify-content-between align-items-center">
                    <Icon type="search" />
                    <Input
                        placeholder="Tìm kiếm"
                        value={this.state.searchValue}
                        onChange={e => this.onSearchInputChange(e)}
                        onPressEnter={() => this.props.history.push(`/shopping-store?cat=all&search=${modifiedSearchValue}`)}
                    />
                </div>
            </div>
        );
    }
}