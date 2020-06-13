import React, { Component } from "react";
import "./Filter.scss";
import { Checkbox } from "antd";
import { getCurrentDate } from "services/CommonFunction";
import { trackingIncrement } from "services/Fundamental";

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedState: new Array(3).fill(false),
            filerList: [],
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.isEmptyFilter) {
            let { checkedState } = state;
            checkedState.fill(false);
            return {
                checkedState,
            };
        } else {
            return null;
        }
    }

    /*********************************
     *  Description: to update tracking counter
     *
     *
     *  Call by:
     */
    handleTracking = (collectionID) => {
        let date = getCurrentDate();
        if (!collectionID) return;
        trackingIncrement("tracking", date, "collections", collectionID);
    };
    /************_END_****************/

    onFilter = (e) => {
        let { checkedState, filerList } = this.state;
        const { id, name, checked } = e.target;
        if (checked) {
            filerList.push(name);
            this.handleTracking(name);
        } else {
            filerList.splice(filerList.indexOf(name), 1);
        }
        this.props.onCollectionFiltering(filerList);
        checkedState[id] = checked;
        this.setState({
            checkedState,
            filerList,
        });
    };

    render() {
        const { collectionsInfo } = this.props;
        let { checkedState } = this.state;
        let totalProductInCollection = new Array(3).fill(0);
        let damdutiec = collectionsInfo.filter(
            (collection) => collection.id === "damdutiec"
        )[0];
        let damdaopho = collectionsInfo.filter(
            (collection) => collection.id === "damdaopho"
        )[0];
        let damcongso = collectionsInfo.filter(
            (collection) => collection.id === "damcongso"
        )[0];
        if (collectionsInfo.length > 0) {
            totalProductInCollection[0] = damdutiec.products.length;
            totalProductInCollection[1] = damdaopho.products.length;
            totalProductInCollection[2] = damcongso.products.length;
        }
        return (
            <div className="filter_wrapper">
                <div className="collection">
                    <span>BỘ SƯU TẬP</span>
                    <div className="subTitle d-flex flex-column">
                        <Checkbox
                            id={0}
                            name="damdutiec"
                            onChange={this.onFilter}
                            checked={checkedState[0]}
                        >{`Đầm Dự Tiệc (${totalProductInCollection[0]})`}</Checkbox>
                        <Checkbox
                            id={1}
                            name="damdaopho"
                            onChange={this.onFilter}
                            checked={checkedState[1]}
                        >{`Đầm Dạo Phố (${totalProductInCollection[1]})`}</Checkbox>
                        <Checkbox
                            id={2}
                            name="damcongso"
                            onChange={this.onFilter}
                            checked={checkedState[2]}
                        >{`Đầm Công Sở (${totalProductInCollection[2]})`}</Checkbox>
                    </div>
                </div>
                {/* <div className="viewPriority">
                    <span>ƯU TIÊN XEM</span>
                    <div className="subTitle d-flex flex-column">
                        <Checkbox>Hàng Mới</Checkbox>
                        <Checkbox>Bán Chạy</Checkbox>
                        <Checkbox>Giảm Giá Nhiều</Checkbox>
                    </div>
                </div> */}
            </div>
        );
    }
}
