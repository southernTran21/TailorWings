import React, { Component } from "react";
import IconLineChart from "../../../assets/iconImage/line-chart.svg";
import { removePunctuation } from "../../../services/CommonFunction";
import { Link } from 'react-router-dom'

const defaultSuggestion = [
    'Đầm suông Lucasta',
    'Đầm xòe Kelsey',
    'X005',
    'Đầm xòe Dilys',
    'Đầm ôm Donna'
]

export default class SearchSuggest extends Component {
    suggestionContent = () => {
        const { suggestedSearch } = this.props;
        let content = '';
        if (suggestedSearch.length > 0) {
            content = suggestedSearch.map((suggestion, index) => {
                let name = suggestion;
                let url = suggestion.toLowerCase();
                url = removePunctuation(url);
                url = url.replace(/ /g, "-");
                return (
                    <Link
                        key={index}
                        style={{
                            border: 'none',
                            textDecoration: 'none',
                            width: 'fit-content',
                            height: 'fit-content'
                        }}
                        to={{
                            pathname: '/shopping-store',
                            search: `?cat=all&search=${url}`
                        }}
                        onClick={() => this.props.searchOpen()}
                    >
                        <span>{name}</span>
                    </Link>
                )
            })
        } else {
            content = defaultSuggestion.map((suggestion, index) => {
                let name = suggestion;
                let url = suggestion.toLowerCase();
                url = removePunctuation(url);
                url = url.replace(/ /g, "-");
                return (
                    <Link
                        key={index}
                        style={{
                            border: 'none',
                            textDecoration: 'none',
                            width: 'fit-content',
                            height: 'fit-content'
                        }}
                        to={{
                            pathname: '/shopping-store',
                            search: `?cat=all&search=${url}`
                        }}
                        onClick={() => this.props.searchOpen()}
                    >
                        <span>{name}</span>
                    </Link>
                )
            })
        }
        return content;
    }

    render() {
        return (
            <div className="seachSuggest-wraper">
                <div className="contentHeader d-flex flex-column justify-content-around">
                    <span>
                        <img src={IconLineChart} />
                        Đặt may nhiều
                    </span>
                    { this.suggestionContent() }
                    {/* <span>Đầm Suông Lucasta</span>
                    <span>Đầm Ôm Dona</span>
                    <span>Đầm Xòe Dilys</span>
                    <span>Đầm Suông Lucasta</span>
                    <span>Đầm Ôm Dona</span> */}
                </div>
                <div className="topListProduct">
                    <div className="title">
                        <span>Sản Phẩm Ưa Chuộng</span>
                    </div>
                </div>
            </div>
        );
    }
}
