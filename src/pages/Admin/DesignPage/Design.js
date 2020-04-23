import React, { Component } from "react";
import "./Design.scss";
import { Icon, Popconfirm, message } from "antd";
import { Link } from "react-router-dom";
import { deleteDocument, deleteImage, setDocument } from "../../../services/Fundamental";
import { removePunctuation } from "../../../services/CommonFunction";
import classNames from 'classnames'

let deleteLoading = false;

export class Design extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderDesigns: [],
            bestSeller: [],
            bestSellerStatus: []
        };
    }

    componentDidMount() {
        const { designs, topList } = this.props;
        let { bestSellerStatus } = this.state;
        let bestSeller = topList[0] || { designs: [] };
        bestSellerStatus = new Array(designs.length).fill(false);
        designs.forEach((design, index) => {
            let currentDesignID = design.id;
            let isBestSellerContain = bestSeller.designs.includes(currentDesignID);
            bestSellerStatus[index] = isBestSellerContain;
        })
        this.setState({
            renderDesigns: designs,
            bestSeller,
            bestSellerStatus
        });
    }

    deleteHanding = (id, url) => {
        const { products } = this.props;
        deleteLoading = true;
        let relatedProducts = products.filter(product => {
            return product.designID === id;
        });
        if (relatedProducts.length === 0) {
            if (id != null && url !== "") {
                deleteDocument("designs", id)
                    .then(() => {
                        let imagePath = url.match(/\o\/(.*)\?\b/)[1];
                        imagePath = this.decode_utf8(imagePath);
                        deleteImage(imagePath)
                            .then(() => {
                                deleteLoading = false;
                            })
                            .catch(() => {
                                deleteLoading = false;
                            });
                    })
                    .catch(() => {
                        deleteLoading = false;
                    });
            } else {
                deleteDocument("designs", id)
                    .then(() => {
                        deleteLoading = false;
                    })
                    .catch(() => {
                        deleteLoading = false;
                    });
            }
        } else {
            message.warning(
                `Hiện có ${relatedProducts.length} sản phẩm liên quan. Vui lòng xóa tất cả sản phẩm liên quan!`
            );
        }
    };

    searchFilter = e => {
        let searchInput = removePunctuation(e.target.value.toLowerCase()) || "";
        let { renderDesigns } = this.state;
        const { designs } = this.props;
        renderDesigns = designs.filter(design => {
            let name = design.name.toLowerCase();
            name = removePunctuation(name);
            return name.search(searchInput) !== -1;
        });
        if (renderDesigns.length === 0) {
            renderDesigns = designs.filter(design => {
                let id = design.id.toLowerCase();
                return id.search(searchInput) !== -1;
            });
        }
        this.setState({
            renderDesigns
        });
    };

    decode_utf8 = s => {
        return decodeURIComponent(s);
    };

    onBestSellerClick = (index) => {
        let { designs, topList } = this.props;
        let { bestSellerStatus, bestSeller } = this.state;
        if (!bestSellerStatus[index]) {
            bestSeller.designs.push(designs[index].id);
            bestSellerStatus[index] = true;
        } else {
            let indexOfRemovedDesign = bestSeller.designs.indexOf(designs[index].id)
            bestSeller.designs.splice(indexOfRemovedDesign, 1);
            bestSellerStatus[index] = false;
        }
        // topList.forEach((element) => {
        //     if (element.id === 'bestseller') {
        //         element.designs = [...bestSeller.designs]
        //     }
        // })
        setDocument('topList', bestSeller, 'bestseller')
            .then(() => {
                this.setState({
                    bestSellerStatus
                })
            })
    }

    render() {
        const { renderDesigns, bestSellerStatus } = this.state;
        // console.log('bestSellerStatus', bestSellerStatus)
        return (
            <div className="pageDesign">
                <div className="headerPageDesign d-flex flex-row justify-content-between align-items-center">
                    <h2
                        className="d-flex justify-content-start"
                        style={{ margin: 0 }}
                    >{`Designs (${renderDesigns.length})`}</h2>
                    <Link to="/admin/design-add">
                        <div className="buttonAddDesign d-flex justify-content-end">
                            <p>Add A Design</p>
                        </div>
                    </Link>
                </div>
                <div className="showDesign">
                    <div className="inputSearch d-flex flex-row align-items-center">
                        <Icon type="search" />
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={this.searchFilter}
                        />
                    </div>
                    <div className="tableProduct">
                        <div className="headerTable d-flex">
                            <div className="column1"></div>
                            <div className="column2">Design Name</div>
                            <div className="column8"></div>
                            <div className="column3 text-center">Design ID</div>
                            <div className="column4 text-center">
                                Complexity
                            </div>
                            <div className="column5 text-center">Price</div>
                            <div className="column6 text-center">Type</div>
                            <div className="column7"></div>
                        </div>

                        {renderDesigns.map((design, index) => {
                            if (design != null) {
                                let fabricType = design.fabricType
                                    .toString()
                                    .replace(/,/g, " ");
                                let modifiedPrice = design.price
                                    .toString()
                                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
                                return (
                                    <div
                                        key={index}
                                        className="contentTable d-flex flex-row align-items-center"
                                    >
                                        <div
                                            id="design-image"
                                            className="column1 d-flex justify-content-center"
                                        >
                                            <div className="imgProduct">
                                                <Link
                                                    to={{
                                                        pathname:
                                                            "/admin/design-edit",
                                                        search: `?id=${design.id}`
                                                    }}
                                                >
                                                    <img
                                                        src={design.image}
                                                        alt={design.id}
                                                        style={{
                                                            width: "100%",
                                                            height: "auto"
                                                        }}
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                        <div
                                            id="design-name"
                                            className="column2"
                                        >
                                            <Link
                                                to={{
                                                    pathname:
                                                        "/admin/design-edit",
                                                    search: `?id=${design.id}`
                                                }}
                                            >
                                                <p>{design.name}</p>
                                            </Link>
                                        </div>
                                        <div className="column8">
                                            <i
                                                className={classNames("fas fa-award", { active: bestSellerStatus[index] })}
                                                onClick={() => this.onBestSellerClick(index)}
                                            />
                                        </div>
                                        <div id="design-id" className="column3">
                                            <Link
                                                to={{
                                                    pathname:
                                                        "/admin/design-edit",
                                                    search: `?id=${design.id}`
                                                }}
                                                style={{ width: "100%" }}
                                            >
                                                <p
                                                    className="text-center"
                                                    style={{ width: "100%" }}
                                                >
                                                    {design.id}
                                                </p>
                                            </Link>
                                        </div>
                                        <div
                                            id="design-complexity"
                                            className="column4 text-center"
                                        >
                                            <p className="text-center">
                                                {design.complexity}
                                            </p>
                                        </div>
                                        <div
                                            id="design-price"
                                            className="column5 text-center"
                                        >
                                            <p className="text-center">
                                                {modifiedPrice}
                                            </p>
                                        </div>
                                        <div
                                            id="design-fabricType"
                                            className="column6 text-center"
                                        >
                                            <p className="text-center">
                                                {fabricType}
                                            </p>
                                        </div>
                                        <div
                                            id="design-delete-icon"
                                            className="column7 d-flex justify-content-center"
                                            style={{ height: "100%" }}
                                        >
                                            <Popconfirm
                                                title="Are you sure delete this design?"
                                                onConfirm={() =>
                                                    this.deleteHanding(
                                                        design.id,
                                                        design.image
                                                    )
                                                }
                                                icon={
                                                    <Icon
                                                        type="question-circle-o"
                                                        style={{ color: "red" }}
                                                    />
                                                }
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                                <a className="far fa-trash-alt" aria-hidden={false} ></a>
                                            </Popconfirm>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Design;
