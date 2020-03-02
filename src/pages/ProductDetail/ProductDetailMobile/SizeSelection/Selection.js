import React, { Component } from 'react';
import './SizeSelection.scss';
import classNames from 'classnames';

const SIZE = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default class Selection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStatus: new Array(6).fill(false)
        }
    }
    componentDidMount() {
        const { size } = this.props.currentSelectedProduct;
        let { activeStatus } = this.state;
        if (size != null) {
            let currentActiveIndex = SIZE.indexOf(size)
            if (currentActiveIndex != null) {
                activeStatus[currentActiveIndex] = true;
                this.setState({
                    activeStatus
                })
            }
        }
    }
    onSizeSelected = (e) => {
        console.log('e.target.name', e.target.name)
        if (e.target.name != null) {
            let { activeStatus } = this.state;
            activeStatus.fill(false);
            activeStatus[e.target.id] = true;
            this.props.onSizeUpdated(e.target.name);
            this.setState({
                activeStatus
            })
        }
    }
    render() {
        const { activeStatus } = this.state;
        return (
            <div className='sizeSelection d-flex'>
                {SIZE.map((size, index) => {
                    return (
                        <div key={index} className='col-2 text-center'>
                            <div className={classNames('tilteSize', { actived: activeStatus[index] })}>
                                <a id={index} name={size} onClick={(e) => this.onSizeSelected(e)} >{size}</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}
