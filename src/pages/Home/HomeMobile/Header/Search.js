import React, { Component } from "react";
import { Input, Icon, Button } from "antd";
import classNames from "classnames";

export default class Search extends Component {
    render() {
        console.log("this.props.isSearchOpen", this.props.isSearchOpen);

        let { isSearchOpen } = this.props;

        const changeClassNames = classNames(
            "d-flex flex-row align-content-center",
            {
                "search-wraper": !isSearchOpen,
                searchOpen: isSearchOpen
            }
        );

        return (
            <div className={changeClassNames}>
                <div className="borderSearch d-flex flex-row justify-content-between align-items-center">
                    <Icon type="search" />
                    <Input placeholder="Search" />
                    <Button className='buttonSearch'><Icon type="check" /></Button>
                </div>
            </div>
        );
    }
}
