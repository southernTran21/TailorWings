import React, { Component } from 'react';
import './DesignAdjustment.scss'
import { Checkbox, Input, Upload, Icon, Modal, message, Button, Cascader } from 'antd';
import { uploadImage, setDocument } from '../../../services/Fundamental'

const { TextArea } = Input;
let isLoading = false;

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

const valueCasederComplexity = [
    {
        value: '1',
        label: '1 - Simple',
    },
    {
        value: '2',
        label: '2 - Normal',
    },
    {
        value: '3',
        label: '3 - Hard',
    },
];
export class DesignAdjustment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputDisble: false,
            isUpdate: false,
            isImageChanged: false,
            previewVisible: false,
            previewImage: '',
            fileList: [],
            designID: '',
            currentDesign: {
                complexity: '',
                description: '',
                fabricType: [],
                id: '',
                image: '',
                length: 0,
                name: '',
                price: 0
            },
            fabricTypeStatus: {
                M: false,
                R: false,
                T: false,
                C: false
            },
            currentCompexity: []
        };
    }

    componentDidMount() {
        this._isMounted = true;
        const { designs } = this.props;
        let { fabricTypeStatus, designID, currentCompexity } = this.state;
        if (window.location.pathname === '/admin/design-edit' && designs.length > 0) {
            let currentDesignID = window.location.hasOwnProperty('search') ? window.location.search.match(/id=(.*)\b/)[1] : designID;
            let currentDesign = {...designs.find((design) => {
                return design.id === currentDesignID;
            })}
            if (currentDesign != null) {
                currentDesign.fabricType.forEach((type) => {
                    fabricTypeStatus[type] = true;
                })
                currentCompexity.push(currentDesign.complexity);
                if (this._isMounted) {
                    this.setState({
                        currentCompexity,
                        inputDisble: true,
                        designID: currentDesignID,
                        currentDesign,
                        fabricTypeStatus,
                        previewImage: currentDesign.image,
                        fileList: [{
                            uid: '-1',
                            name: 'image.png',
                            status: 'done',
                            url: currentDesign.image,
                            old: true
                        }]
                    })
                }
            }
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }


    onFabricTypeChange = (e) => {
        let { fabricTypeStatus, currentDesign } = this.state;
        fabricTypeStatus[e.target.id] = e.target.checked ? true : false;
        if (fabricTypeStatus[e.target.id]) {
            currentDesign.fabricType.push(e.target.id);
        } else {
            currentDesign.fabricType.splice(currentDesign.fabricType.indexOf(e.target.id), 1);
        }
        this.setState({
            fabricTypeStatus,
            currentDesign,
            isUpdate: true
        })
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
        let { currentDesign } = this.state;
        let value = e.target.value;
        let id = e.target.id;
        if (id === 'price' || id === 'length') {
            value = Number(value);
        }
        currentDesign[id] = value;
        this.setState({
            currentDesign,
            isUpdate: true
        })
    };

    onComplexityChange = (value) => {
        let { currentDesign } = this.state;
        currentDesign.complexity = value[0];
        this.setState({
            currentDesign,
            isUpdate: true
        })
    }

    onSaveHandling = () => {
        let { isUpdate } = this.state;
        isLoading = true;
        this.setState({
            isLoading: true
        })
        if (isUpdate) {
            switch (window.location.pathname) {
                case '/admin/design-add':
                    this.addHandling();
                    break;
                case '/admin/design-edit':
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
        let { currentDesign, fileList, isImageChanged } = this.state;
        const { designs } = this.props;
        if (currentDesign.id !== '' && designs.find((design) => design.id === currentDesign.id) == null) {
            if (fileList.length === 1) {
                if (isImageChanged) {
                    uploadImage('image/designs/', fileList[0].originFileObj)
                        .then((downloadURL) => {
                            if (downloadURL != null) {
                                currentDesign.image = downloadURL;
                                setDocument("designs", currentDesign, currentDesign.id)
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
                    setDocument("designs", currentDesign, currentDesign.id)
                        .then(() => {
                            isLoading = false;
                            window.history.back();
                        })
                        .catch(() => isLoading = false)
                }
            } else if (fileList.length === 0) {
                setDocument("designs", currentDesign, currentDesign.id)
                    .then(() => {
                        isLoading = false;
                        window.history.back();
                    })
                    .catch(() => isLoading = false)
            } else {
                message.error('Có hơn một hình ảnh được chọn!');
                isLoading = false;
            }
        } else {
            message.error('FabricID không được trống hoặc trùng với các mẫu hiện tại!');
            isLoading = false;
        }
    }

    updateHandling = () => {
        isLoading = true;
        let { currentDesign, fileList, isImageChanged } = this.state;
        if (fileList.length === 1) {
            if (isImageChanged) {
                uploadImage('image/designs/', fileList[0].originFileObj)
                    .then((downloadURL) => {
                        if (downloadURL != null) {
                            currentDesign.image = downloadURL;
                            setDocument("designs", currentDesign, currentDesign.id)
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
                setDocument("designs", currentDesign, currentDesign.id)
                    .then(() => {
                        isLoading = false;
                        window.history.back();
                    })
                    .catch(() => isLoading = false)
            }
        } else if (fileList.length === 0) {
            setDocument("designs", currentDesign, currentDesign.id)
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
        const { currentDesign, fabricTypeStatus } = this.state;
        const { previewVisible, previewImage, fileList } = this.state;
        const { title } = this.props;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className="pageDesignAdjustment">
                <div className="headerPageDesign d-flex flex-row justify-content-between align-items-center">
                    <h2 className="d-flex justify-content-start" style={{ margin: 0 }}>{title}</h2>
                    <Button
                        className="buttonAddDesign d-flex align-items-center"
                        loading={isLoading}
                        onClick={this.onSaveHandling}
                    >
                        Save
                    </Button>
                </div>

                <div className="designAdjustment">
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
                        <div className="inputNameDesign d-flex justify-content-end">
                            <p className="d-flex flex-row align-items-center">Design Name</p>
                            <div className="inputName d-flex flex-row align-items-center">
                                <input
                                    id='name'
                                    defaultValue={currentDesign.name}
                                    value={currentDesign.name}
                                    className="form-control"
                                    type="text"
                                    placeholder="Tên mẫu thiết kế"
                                    onChange={this.onTextChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="inputContentBody d-flex">
                        <div className="col-5">
                            <div className="inputDesignID d-flex">
                                <p className="d-flex flex-row align-items-center">Design ID</p>
                                <div className="inputID d-flex flex-row align-items-center">
                                    <input
                                        disabled={this.state.inputDisble}
                                        id='id'
                                        defaultValue={currentDesign.id}
                                        value={currentDesign.id}
                                        className="form-control"
                                        type="text"
                                        placeholder="Mã thiết kế"
                                        onChange={this.onTextChange}
                                    />
                                </div>
                            </div>

                            <div className="inputComplexity d-flex">
                                <p className="d-flex flex-row align-items-center">Complexity</p>
                                <Cascader
                                    options={valueCasederComplexity}
                                    onChange={this.onComplexityChange}
                                    placeholder="Độ khó thiết kế"
                                    defaultValue={this.state.currentCompexity}
                                />
                            </div>

                            <div className="checkboxFabric">
                                <p>Fabric Types</p>
                                <div className="checkbox d-flex flex-column">
                                    <Checkbox id='M' checked={fabricTypeStatus.M} onChange={(e) => this.onFabricTypeChange(e)}>Mềm</Checkbox>
                                    <Checkbox id='R' checked={fabricTypeStatus.R} onChange={(e) => this.onFabricTypeChange(e)}>Rủ</Checkbox>
                                    <Checkbox id='T' checked={fabricTypeStatus.T} onChange={(e) => this.onFabricTypeChange(e)}>Trung bình</Checkbox>
                                    <Checkbox id='C' checked={fabricTypeStatus.C} onChange={(e) => this.onFabricTypeChange(e)}>Cứng</Checkbox>
                                </div>
                            </div>
                        </div>

                        <div className="col-7">
                            <div className="inputPrice d-flex">
                                <p className="d-flex flex-row align-items-center">Price</p>
                                <div className="d-flex flex-row align-items-center">
                                    <input
                                        id='price'
                                        defaultValue={currentDesign.price}
                                        value={currentDesign.price}
                                        className="form-control"
                                        type="text"
                                        placeholder="Giá mẫu thiết kế"
                                        onChange={this.onTextChange}
                                    />
                                </div>
                            </div>
                            <div className="inputLengthFabric d-flex">
                                <p className="d-flex flex-row align-items-center">Fabric Length</p>
                                <div className="d-flex flex-row align-items-center">
                                    <input
                                        id='length'
                                        defaultValue={currentDesign.length}
                                        value={currentDesign.length}
                                        className="form-control"
                                        type="text"
                                        placeholder="Lượng vải sử dụng(cm) "
                                        onChange={this.onTextChange}
                                    />
                                </div>
                            </div>
                            <div className="inputDescription">
                                <TextArea
                                    id='description'
                                    defaultValue={currentDesign.description}
                                    value={currentDesign.description}
                                    onChange={this.onTextChange}
                                    placeholder="Description"
                                    autoSize={{ minRows: 10, maxRows: 10 }}
                                />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default DesignAdjustment;
