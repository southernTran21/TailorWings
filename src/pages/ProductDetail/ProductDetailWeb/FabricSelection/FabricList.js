import React, { Component } from 'react'

const tmp = new Array(20).fill('1');

export default class FabricList extends Component {
    render() {
        return (
            <div className='fabricList'>
                {tmp.map( index => {
                    return(
                        <div className='col-4' key={index}>
                            <div className='image'></div>
                        </div>
                    );
                })}
            </div>
        )
    }
}
