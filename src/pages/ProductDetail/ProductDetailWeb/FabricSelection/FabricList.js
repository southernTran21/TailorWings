import React, { Component } from "react";
import classNames from 'classnames'

export default class FabricList extends Component {
    render() {
        const { fabricList, aciveFabricIndex } = this.props;
        return (
            <div id="fabricList-wrapper">
                <div id="fabricList-content">
                    {fabricList.map((fabric,index) => {
                        const isHighLight = aciveFabricIndex === index;
                        return (
                            <div className="col-4" key={index} onClick={() => this.props.onFabricChanged(index, fabric.id)}>
                                <div className={classNames("image",{ highlight: isHighLight})}>
                                    <img className={classNames({ highlight: isHighLight})} src={fabric.image[0]} alt={fabric.name} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
