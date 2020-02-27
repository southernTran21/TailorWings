/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './CategoryAdjustment.scss';
import { Checkbox, Button, Upload, Icon, Modal, message } from 'antd';
import { uploadImage, setDocument } from '../../../services/Fundamental'

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

let isLoading = false;

export class CategoryAdjustment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [],
            inputDisble: false,
            isImageChanged: false,
            isUpdate: false,
            categoryId: '',
            currentCategory: {
                image: '',
                discount: 0,
                id: '',
                name: '',
                visibility: false
            }
        }
    }

    componentDidMount() {
        this._isMounted = true;
        const { categories } = this.props;
        let { categoryId } = this.state;
        if (window.location.pathname === '/admin/category-edit' && categories.length > 0) {
            let currentCategoryID = window.location.hasOwnProperty('search') ? window.location.search.match(/id=(.*)\b/)[1] : categoryId;
            let currentCategory = {
                ...categories.find((category) => {
                    return category.id === currentCategoryID;
                })
            }
            if (currentCategory != null) {
                let fileList = [];
                if (currentCategory.image !== '') {
                    let fileName = currentCategory.image.match(/\o\/(.*)\?\b/)[1];
                    fileName = this.decode_utf8(fileName);
                    fileName = fileName.split('/')[2];
                    fileList = [{
                        uid: '-1',
                        name: fileName,
                        status: 'done',
                        url: currentCategory.image,
                        old: true
                    }]
                }
                if (this._isMounted) {
                    this.setState({
                        inputDisble: true,
                        categoryId: currentCategoryID,
                        currentCategory,
                        previewImage: currentCategory.image,
                        fileList
                    })
                }
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

    onTextChange = (e) => {
        let { currentCategory } = this.state;
        let value = e.target.value;
        let id = e.target.id;
        if (id === 'discount') {
            value = Number(value);
        }
        currentCategory[id] = value;
        this.setState({
            currentCategory,
            isUpdate: true
        })
    };

    onVisibilityChange = (e) => {
        let { currentCategory } = this.state;
        let isCheck = e.target.checked;
        currentCategory.visibility = isCheck;
        this.setState({
            currentCategory,
            isUpdate: true
        })
    }

    onSaveHandling = () => {
        const { isUpdate } = this.state;
        isLoading = true;
        this.setState({
            isLoading: true
        })
        if (isUpdate) {
            switch (window.location.pathname) {
                case '/admin/category-add':
                    this.addHandling();
                    break;
                case '/admin/category-edit':
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
        let { currentCategory, fileList, isImageChanged } = this.state;
        const { categories } = this.props;
        if (currentCategory.id !== '' && categories.find((fabric) => fabric.id === currentCategory.id) == null) {
            if (fileList.length === 1) {
                if (isImageChanged) {
                    uploadImage('image/categories/', fileList[0].originFileObj)
                        .then((downloadURL) => {
                            if (downloadURL != null) {
                                currentCategory.image = downloadURL;
                                setDocument("categories", currentCategory, currentCategory.id)
                                    .then((success) => {
                                        isLoading = false;
                                        if (success) {
                                            window.history.back();
                                        }
                                    })
                                    .catch(() => isLoading = false)
                            }
                            else {
                                message.error('Link hình ảnh lỗi!');
                                isLoading = false;
                            }
                        })
                } else {
                    setDocument("categories", currentCategory, currentCategory.id)
                        .then((success) => {
                            isLoading = false;
                            if (success) {
                                window.history.back();
                            }
                        })
                        .catch(() => isLoading = false)
                }
            } else if (fileList.length === 0) {
                setDocument("categories", currentCategory, currentCategory.id)
                    .then((success) => {
                        isLoading = false;
                        if (success) {
                            window.history.back();
                        }
                    })
                    .catch(() => isLoading = false)
            } else {
                message.error('Có hơn 1 hình ảnh đang được chọn!');
                isLoading = false;
            }
        } else {
            message.error('FabricID không được trống hoặc trùng với các mẫu hiện tại!');
            isLoading = false;
        }
    }

    updateHandling = () => {
        isLoading = true;
        let { currentCategory, fileList, isImageChanged } = this.state;
        if (fileList.length === 1) {
            if (isImageChanged) {
                uploadImage('image/categories/', fileList[0].originFileObj)
                    .then((downloadURL) => {
                        if (downloadURL != null) {
                            currentCategory.image = downloadURL;
                            setDocument("categories", currentCategory, currentCategory.id)
                                .then((success) => {
                                    isLoading = false;
                                    if (success) {
                                        window.history.back();
                                    }
                                })
                        }
                        else {
                            message.error('Link hình ảnh lỗi!');
                            isLoading = false;
                        }
                    })
            } else {
                setDocument("categories", currentCategory, currentCategory.id)
                    .then(() => {
                        isLoading = false;
                        window.history.back();
                    })
                    .catch(() => isLoading = false)
            }
        } else if (fileList.length === 0) {
            setDocument("categories", currentCategory, currentCategory.id)
                .then(() => {
                    isLoading = false;
                    window.history.back();
                })
                .catch(() => isLoading = false)
        } else {
            message.error('Vui lòng chọn 1 hình ảnh!');
            isLoading = false;
        }
    }

    render() {
        const { previewVisible, previewImage, fileList, currentCategory } = this.state;
        const { title } = this.props;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className="pageCategoryAdjustment">
                <div className="headerPageCategory d-flex flex-row justify-content-between align-items-center">
                    <h2 className="d-flex justify-content-start" style={{ margin: 0 }}>{title}</h2>
                    <Button
                        className="buttonAddCategory d-flex align-items-center"
                        loading={isLoading}
                        onClick={this.onSaveHandling}
                    >
                        Save
                    </Button>
                </div>

                <div className="categoryAdjustment">
                    <div className="inputContentHeader d-flex flex-row justify-content-between align-items-center">
                        <div className="clearfix d-flex justify-content-start">
                            <Upload
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={this.handlePreview}
                                onChange={this.handleImageChange}
                            >
                                {fileList.length >= 1 ? null : uploadButton}
                            </Upload>
                            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                            </Modal>
                        </div>
                        <div className="inputNameCollection d-flex justify-content-end">
                            <p className="d-flex flex-row align-items-center">Collection Name</p>
                            <div className="inputName d-flex flex-row align-items-center">
                                <input
                                    id="name"
                                    className="form-control"
                                    type="text"
                                    value={currentCategory.name}
                                    placeholder="Tên bộ sưu tập"
                                    onChange={this.onTextChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="contentBody d-flex">
                        <div className="col-6">
                            <div className="inputIDCollection d-flex">
                                <p className="d-flex flex-row align-items-center">Collection ID</p>
                                <div className="inputID d-flex flex-row align-items-center">
                                    <input
                                        id="id"
                                        disabled={this.state.inputDisble}
                                        className="form-control"
                                        value={currentCategory.id}
                                        type="text"
                                        placeholder="Mã bộ sưu tập"
                                        onChange={this.onTextChange}
                                    />
                                </div>
                            </div>
                            <div className="inputDiscount d-flex">
                                <p className="d-flex flex-row align-items-center">Discount</p>
                                <div className="input d-flex flex-row align-items-center">
                                    <input
                                        id="discount"
                                        className="form-control"
                                        value={currentCategory.discount}
                                        type="text"
                                        placeholder="% giảm giá"
                                        onChange={this.onTextChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="checkVisibility d-flex flex-row align-items-center">
                                <p className="d-flex flex-row align-items-center">Set Visibility</p>
                                <Checkbox onChange={this.onVisibilityChange} checked={currentCategory.visibility} ></Checkbox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryAdjustment;
