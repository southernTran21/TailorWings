import React, { Component } from 'react';
import classNames from 'classnames'

const SIZE_CHART = [
    {
        name: 'XS',
        ngangVai: 31.5,
        vongNach: 40,
        vongNguc: 79,
        Eo: 62,
        Mong: 84
    },
    {
        name: 'S',
        ngangVai: 33,
        vongNach: 41.5,
        vongNguc: 83,
        Eo: 66,
        Mong: 88
    },
    {
        name: 'M',
        ngangVai: 34.5,
        vongNach: 43,
        vongNguc: 87,
        Eo: 70,
        Mong: 92
    },
    {
        name: 'L',
        ngangVai: 36,
        vongNach: 46,
        vongNguc: 93,
        Eo: 76,
        Mong: 98
    },
    {
        name: 'XL',
        ngangVai: 37.5,
        vongNach: 48,
        vongNguc: 99,
        Eo: 82,
        Mong: 104
    },
    {
        name: 'XXL',
        ngangVai: 39,
        vongNach: 50,
        vongNguc: 105,
        Eo: 88,
        Mong: 110
    },
]

class Infomation extends Component {

    tabChangedHandling = (e) => {
        this.props.informationStatusHandling(e.target.name)
    }

    render() {
        const { status } = this.props;
        return (
            <div className="infor-table mt-3">
                <ul className="nav nav-tabs row" role="tablist">
                    <li className="nav-item col-4 text-center">
                        <a
                            className={classNames("nav-link", { active: status[0] })}
                            name="designDescription"
                            style={{ padding: 0 }}
                            onClick={(e) => this.tabChangedHandling(e)}
                        >
                            Mô tả thiết kế
                        </a>
                    </li>
                    <li className="nav-item col-4 text-center">
                        <a
                            className={classNames("nav-link", { active: status[1] })}
                            name="fabricDescription"
                            style={{ padding: 0 }}
                            onClick={(e) => this.tabChangedHandling(e)}
                        >
                            Mô tả vải
                        </a>
                    </li>
                    <li className="nav-item col-4 text-center">
                        <a
                            className={classNames("nav-link", { active: status[2] })}
                            name="sizeDescription"
                            style={{ padding: 0 }}
                            onClick={(e) => this.tabChangedHandling(e)}
                        >
                            Thông số size
                        </a>
                    </li>
                </ul>
                <div className="tab-content mt-3 ">
                    <div className={classNames("tab-pane fade", { 'active show': status[0] })} >
                        <div className="container">
                            <a>{this.props.designInfo.description}</a>
                        </div>
                    </div>
                    <div className={classNames("tab-pane fade", { 'active show': status[1] })} >
                        <div className="container">
                            <p>Đang trong quá trình phát triển!</p>
                        </div>
                    </div>
                    <div className={classNames("tab-pane fade", { 'active show': status[2] })} >
                        <div className="container">
                            <table className="table table-striped  text-center">
                                <thead>
                                    <tr>
                                        <th>Size</th>
                                        <th>Nách</th>
                                        <th>Ngực</th>
                                        <th>Eo</th>
                                        <th>Mông</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {SIZE_CHART.map((size, index) => {
                                        let { name, vongNach, vongNguc, Eo, Mong } = size;
                                        return (
                                            <tr key={index}>
                                                <td>{name}</td>
                                                <td>{vongNach}</td>
                                                <td>{vongNguc}</td>
                                                <td>{Eo}</td>
                                                <td>{Mong}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Infomation;