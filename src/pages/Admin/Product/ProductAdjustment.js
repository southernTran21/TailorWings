/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Checkbox, message, Cascader, Upload, Icon, Modal, Button } from 'antd';
import './ProductAdjustment.scss';
import { uploadImage, setDocument } from '../../../services/Fundamental'

const categoryIDMapping = {
    B: 'damom',
    S: 'damsuong',
    X: 'damxoe'
}
let isLoading = false;

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export class ProductAdjustment extends Component {
    state = {
        isEditPage: false,
        previewVisible: false,
        previewImage: '',
        productID: '',
        fileList: [],
        inputDisble: false,
        isImageChanged: false,
        isUpdate: false,
        currentProduct: {
            catID: '',
            default: false,
            designID: '',
            discount: 0,
            fabricID: '',
            image: [],
            price: 0,
            productID: '',
            visibility: false
        },
        designList: [],
        fabricList: [],
        currentDesignImage: {
            image: ''
        },
        currentFabricImage: {
            image: []
        }
    };

    componentDidMount() {
        this._isMounted = true;
        const { products, designs, fabrics, categories } = this.props;
        let { productID } = this.state;
        if (window.location.pathname === '/admin/product-edit' && products.length > 0) {
            let currentProductID = window.location.hasOwnProperty('search') ? window.location.search.match(/id=(.*)\b/)[1] : productID;
            let currentProduct = {...products.find((product) => {
                return product.productID === currentProductID;
            })}
            if (currentProduct != null) {
                let fileList = currentProduct.image.map((url, index) => {
                    if (url != null && url !== '') {
                        let imageName = url.match(/\o\/(.*)\?\b/)[1];
                        imageName = this.decode_utf8(imageName);
                        imageName = imageName.split('/')[2];
                        return {
                            uid: index,
                            name: imageName,
                            status: 'done',
                            url: url,
                            old: true
                        }
                    } else {
                        return {};
                    }
                })
                let designList = designs.map((design) => {
                    if (design != null) {
                        return {
                            value: design.id,
                            label: design.id
                        }
                    } else {
                        return {};
                    }
                })
                let fabricList = fabrics.map((fabric) => {
                    if (fabric != null) {
                        return {
                            value: fabric.id,
                            label: fabric.id
                        }
                    } else {
                        return {};
                    }
                })
                let currentDesignImage = designs.find(design => design.id === currentProduct.designID) || this.state.currentDesignImage;
                let currentFabricImage = fabrics.find(fabric => fabric.id === currentProduct.fabricID) || this.state.currentFabricImage;
                if (this._isMounted) {
                    this.setState({
                        isEditPage: true,
                        currentProduct,
                        fileList,
                        designList,
                        fabricList,
                        currentDesignImage,
                        currentFabricImage,
                        productID: currentProductID,
                        previewImage: currentProduct.image,
                    })
                }
            }
        } else if (products != null) {
            let designList = designs.map((design) => {
                if (design != null) {
                    return {
                        value: design.id,
                        label: design.id
                    }
                } else {
                    return {};
                }
            })
            let fabricList = fabrics.map((fabric) => {
                if (fabric != null) {
                    return {
                        value: fabric.id,
                        label: fabric.id
                    }
                } else {
                    return {};
                }
            })
            if (this._isMounted) {
                this.setState({
                    designList,
                    fabricList
                })
            }
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    decode_utf8 = (s) => {
        return decodeURIComponent(s);
    }

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleImageChange = ({ fileList }) => {
        fileList.forEach((file) => {
            if (!file.hasOwnProperty('old')) {
                file.old = false;
            }
        })
        this.setState({
            fileList,
            isImageChanged: true,
            isUpdate: true
        })
    };

    onDiscountChange = (e) => {
        let { currentProduct } = this.state;
        currentProduct.discount = e.target.value;
        this.setState({
            currentProduct,
            isUpdate: true
        })
    }

    onVisibilityChange = (e) => {
        let { currentProduct } = this.state;
        currentProduct.visibility = e.target.checked ? true : false;
        this.setState({
            currentProduct,
            isUpdate: true
        })
    }

    onDefaultChange = (e) => {
        let { currentProduct } = this.state;
        currentProduct.default = e.target.checked ? true : false;
        this.setState({
            currentProduct,
            isUpdate: true
        })
    }

    onDesignChange = (value) => {
        const { designs, categories } = this.props;
        let { currentProduct, currentDesignImage } = this.state;
        let firstCharacter = value[0].split('')[0];
        let relatedCategoryID = categoryIDMapping[firstCharacter];
        currentProduct.catID = relatedCategoryID;
        currentProduct.designID = value != null ? value[0] : currentProduct.designID;
        currentProduct.productID = currentProduct.designID.concat(currentProduct.fabricID);
        currentDesignImage = designs.find(design => design.id === currentProduct.designID) || this.state.currentDesignImage;
        this.setState({
            currentProduct,
            currentDesignImage,
            isUpdate: true
        })
    }

    onFabricChange = (value) => {
        const { fabrics } = this.props;
        let { currentProduct, currentFabricImage } = this.state;
        currentProduct.fabricID = value != null ? value[0] : currentProduct.fabricID;
        currentProduct.productID = currentProduct.designID.concat(currentProduct.fabricID);
        currentFabricImage = fabrics.find(fabric => fabric.id === currentProduct.fabricID) || this.state.currentFabricImage;
        this.setState({
            currentProduct,
            currentFabricImage,
            isUpdate: true
        })
    }

    onSaveHandling = () => {
        isLoading = true;
        this.setState({
            isLoading: true
        })
        let { isUpdate } = this.state;
        if (isUpdate) {
            switch (window.location.pathname) {
                case '/admin/product-add':
                    this.addHandling();
                    break;
                case '/admin/product-edit':
                    this.updateHandling();
                    break;
                default:
                    break;
            }
        } else {
            message.warning('Vui lòng thay đổi nội dung!');
            isLoading = false;
        }
    }

    addHandling = () => {
        isLoading = true;
        let { currentProduct, fileList, isImageChanged } = this.state;
        const { products } = this.props;
        if (currentProduct.designID !== '' && currentProduct.fabricID !== '' && products.find((product) => product.productID === currentProduct.productID) == null) {
            if (fileList.length === 3) {
                if (isImageChanged) {
                    Promise.all([
                        uploadImage('image/products/', fileList[0].originFileObj),
                        uploadImage('image/products/', fileList[1].originFileObj),
                        uploadImage('image/products/', fileList[2].originFileObj)
                    ])
                        .then((downloadURLList) => {
                            currentProduct.image = downloadURLList;
                            setDocument("products", currentProduct, currentProduct.productID)
                                .then(() => {
                                    isLoading = false;
                                    window.history.back();
                                })
                        })
                        .catch(() => isLoading = false)
                } else {
                    setDocument("products", currentProduct, currentProduct.productID)
                        .then(() => {
                            isLoading = false;
                            window.history.back();
                        })
                        .catch(() => isLoading = false)
                }
            } else if (fileList.length === 0) {
                setDocument("products", currentProduct, currentProduct.productID)
                    .then(() => {
                        isLoading = false;
                        window.history.back();
                    })
                    .catch(() => isLoading = false)
            } else {
                message.error('Vui lòng chọn 3 hình ảnh!');
                isLoading = false;
            }
        } else {
            message.error('ProductID không được trống hoặc trùng với các mẫu hiện tại!');
            isLoading = false;
        }
    }

    updateHandling = () => {
        isLoading = true;
        let { currentProduct, fileList, isImageChanged } = this.state;
        if (fileList.length === 3) {
            if (isImageChanged) {
                Promise.all([
                    uploadImage('image/products/', fileList[0].originFileObj),
                    uploadImage('image/products/', fileList[1].originFileObj),
                    uploadImage('image/products/', fileList[2].originFileObj)
                ])
                    .then((downloadURLList) => {
                        currentProduct.image = downloadURLList;
                        setDocument("products", currentProduct, currentProduct.productID)
                            .then(() => {
                                isLoading = false;
                                window.history.back();
                            })
                    })
                    .catch(() => isLoading = false)
            } else {
                setDocument("products", currentProduct, currentProduct.productID)
                    .then(() => {
                        isLoading = false;
                        window.history.back();
                    })
                    .catch(() => isLoading = false)
            }
        } else if (fileList.length === 0) {
            setDocument("products", currentProduct, currentProduct.productID)
                .then(() => {
                    isLoading = false;
                    window.history.back();
                })
                .catch(() => isLoading = false)
        } else {
            message.error('Vui lòng chọn 3 hình ảnh!');
            isLoading = false;
        }
    }

    render() {
        const { title } = this.props;
        const {
            isEditPage,
            previewVisible,
            previewImage,
            fileList,
            designList,
            fabricList,
            currentProduct,
            currentDesignImage,
            currentFabricImage
        } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        let currentDesignID = currentProduct.designID !== '' ? [currentProduct.designID] : [];
        let currentFabricID = currentProduct.fabricID !== '' ? [currentProduct.fabricID] : [];
        return (
            <div className="pageProductAdjustment">
                <div className="headerPageProduct d-flex flex-row justify-content-between align-items-center">
                    <h2 className="d-flex justify-content-start" style={{ margin: 0 }}>{title}</h2>
                    <Button
                        className="buttonAddProduct d-flex align-items-center"
                        loading={isLoading}
                        onClick={this.onSaveHandling}
                    >
                        Save
                    </Button>
                </div>
                <div className="productAdjustment">
                    <div className="inputContentHeader d-flex flex-row justify-content-between align-items-center">
                        <div className="clearfix d-flex justify-content-start">
                            <Upload
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={this.handlePreview}
                                onChange={this.handleImageChange}
                            >
                                {fileList.length >= 3 ? null : uploadButton}
                            </Upload>
                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                        </div>
                    </div>
                    <div className="inputContentBody d-flex">
                        <div className="col-6">
                            <div className="inputDesignID d-flex flex-row align-items-center">
                                <p className="d-flex flex-row align-items-center">Design ID</p>
                                <Cascader disabled={isEditPage} onChange={this.onDesignChange} value={currentDesignID} options={designList} placeholder="Mã Thiết Kế" />
                            </div>
                            <div className="imgProduct">
                                <img src={currentDesignImage.image} alt={currentProduct.designID} style={{ width: "100%", height: "auto" }} />
                            </div>
                            <div className="inputFabricsID d-flex flex-row align-items-center">
                                <p className="d-flex flex-row align-items-center">Fabrics ID</p>
                                <Cascader disabled={isEditPage} onChange={this.onFabricChange} value={currentFabricID} options={fabricList} placeholder="Mã Vãi" />
                            </div>
                            <div className="imgProduct">
                                <img src={currentFabricImage.image[0]} alt={currentProduct.fabricID} style={{ width: "100%", height: "auto" }} />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="inputCategoryID d-flex flex-row align-items-center">
                                <p className="d-flex flex-row align-items-center">Category</p>
                                <input
                                    id='category'
                                    disabled={true}
                                    className="form-control"
                                    type="text"
                                    placeholder="Category ID ( from DesignID )"
                                    value={currentProduct.catID}
                                />
                            </div>
                            <div className="inputDiscount d-flex flex-row align-items-center">
                                <p className="d-flex flex-row align-items-center">Discount</p>
                                <input
                                    id='discount'
                                    className="form-control"
                                    type="text"
                                    placeholder="Số tiền giảm"
                                    value={currentProduct.discount}
                                    onChange={this.onDiscountChange}
                                />
                            </div>
                            <div className="checkVisibility d-flex flex-row align-items-center">
                                <p className="d-flex flex-row align-items-center">Set Visibility</p>
                                <Checkbox onChange={this.onVisibilityChange} checked={currentProduct.visibility} />
                            </div>
                            <div className="checkDefault d-flex flex-row align-items-center">
                                <p className="d-flex flex-row align-items-center">Set Default</p>
                                <Checkbox onChange={this.onDefaultChange} checked={currentProduct.default} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductAdjustment;
