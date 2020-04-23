/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Icon, Popconfirm, message } from 'antd';
import './Fabrics.scss';
import { Link } from 'react-router-dom'
import { deleteDocument, deleteImage } from '../../../services/Fundamental'
import { removePunctuation } from '../../../services/CommonFunction';

let deleteLoading = false;

export class Fabrics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderFabrics: []
        }
    }

    componentDidMount() {
        const { fabrics } = this.props;
        this.setState({
            renderFabrics: fabrics
        })
    }

    deleteHanding = (id, urls) => {
        const { products } = this.props;
        deleteLoading = true;
        let relatedProducts = products.filter((product) => {
            return product.fabricID === id;
        })
        if (relatedProducts.length === 0 && products != null) {
            if (id != null) {
                deleteDocument('fabrics', id)
                    .then(() => {
                        if (urls.length > 0) {
                            let imagePath = urls.map((url) => {
                                let path = url.match(/\o\/(.*)\?\b/)[1];
                                path = this.decode_utf8(path);
                                return path;
                            })
                            Promise.all([deleteImage(imagePath[0]), deleteImage(imagePath[1])])
                                .then(() => {
                                    deleteLoading = false;
                                })
                                .catch(() => {
                                    deleteLoading = false;
                                })
                        }
                    })
                    .catch(() => {
                        deleteLoading = false;
                    })
            }
        } else {
            message.warning(`Hiện có ${relatedProducts.length} sản phẩm liên quan. Vui lòng xóa tất cả sản phẩm liên quan!`);
        }
    }

    searchFilter = (e) => {
        let searchInput = removePunctuation(e.target.value.toLowerCase()) || "";
        let { renderFabrics } = this.state;
        const { fabrics } = this.props;
        renderFabrics = fabrics.filter((fabric) => {
            let name = fabric.name.toLowerCase();
            name = removePunctuation(name);
            return name.search( searchInput ) !== -1;
        })
        if ( renderFabrics.length === 0 ) {
            renderFabrics = fabrics.filter((fabric) => {
                let id = fabric.id.toLowerCase();
                return id.search( searchInput ) !== -1;
            })
        }
        this.setState({
            renderFabrics
        })
    }

    decode_utf8 = (s) => {
        return decodeURIComponent(s);
    }

    render() {
        const { renderFabrics } = this.state;
        return (
            <div className="pageFabrics">
                <div className="headerPageFabrics d-flex flex-row justify-content-between align-items-center">
                    <h2 className="d-flex justify-content-start" style={{ margin: 0 }}>{`Fabrics (${renderFabrics.length})`}</h2>
                    <Link to="/admin/fabric-add">
                        <div className="buttonAddFabrics d-flex justify-content-end">
                            <p>Add A Fabric</p>
                        </div>
                    </Link>
                </div>
                <div className="showFabrics">
                    <div className="inputSearch d-flex flex-row align-items-center">
                        <Icon type="search" />
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.searchFilter} />
                    </div>
                    <div className="tableProduct">
                        <div className="headerTable d-flex">
                            <div className="column1"></div>
                            <div className="column2">Fabric Name</div>
                            <div className="column3 text-center">Fabric ID</div>
                            <div className="column4 text-center">Quantity</div>
                            <div className="column5 text-center">Price</div>
                            <div className="column6 text-center">Supplier</div>
                            <div className="column7 text-center"></div>
                        </div>

                        {renderFabrics.map((fabric, index) => {
                            let modifiedPrice = fabric.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
                            return (
                                <div key={index} className="contentTable d-flex flex-row align-items-center">
                                    <div id='fabric-image' className="column1 d-flex justify-content-center">
                                        <div className="imgProduct">
                                            <Link to={{
                                                pathname: "/admin/fabric-edit",
                                                search: `?id=${fabric.id}`
                                            }}>
                                                <img src={fabric.image[0]} alt={fabric.id} style={{ width: "100%", height: "auto" }} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div id='fabric-name' className="column2">
                                        <Link to={{
                                            pathname: "/admin/fabric-edit",
                                            search: `?id=${fabric.id}`
                                        }}
                                        >
                                            <p>{fabric.name}</p>
                                        </Link>
                                    </div>
                                    <div id='fabric-id' className="column3">
                                        <Link to={{
                                            pathname: "/admin/fabric-edit",
                                            search: `?id=${fabric.id}`
                                        }}
                                        >
                                            <p className="text-center">{fabric.id}</p>
                                        </Link>
                                    </div>
                                    <div id='fabric-quantity' className="column4 text-center">
                                        <p className="text-center" >{fabric.quantity}</p>
                                    </div>
                                    <div id='fabric-price' className="column5">
                                        <p className="text-center">{modifiedPrice}</p>
                                    </div>
                                    <div id='fabric-supplier' className="column6">
                                        <p className="text-center" >{fabric.supplier}</p>
                                    </div>
                                    {/* <div className="column7 d-flex justify-content-center" style={{ height: '100%' }}><a><i className="far fa-trash-alt"></i></a></div> */}
                                    <div id='fabric-delete-icon' className="column7 d-flex justify-content-center" style={{ height: '100%' }}>
                                        <Popconfirm
                                            title="Are you sure delete this fabric?"
                                            onConfirm={() => this.deleteHanding(fabric.id, fabric.image)}
                                            icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                                            okText="Yes"
                                            cancelText="No"
                                        >
                                            <a className="far fa-trash-alt" aria-hidden={false}></a>
                                        </Popconfirm>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div >
        );
    }
}

export default Fabrics;
