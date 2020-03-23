import React, { Component } from 'react'
import './ShoppingStore.scss'
import NavBarWeb from '../../../components/NavBar/NavBarWeb/index'
import Categories from './Categories'
import Filter from './Filter'
import ProductList from './Content'

export default class ShoppingStoreWeb extends Component {
    render() {
        return (
            <div className='shoppingStore_wrapper'>
                <NavBarWeb/>
                <Categories/>
                <div className='filterContent d-flex justify-content-between'>
                    <Filter/>
                    <ProductList/>
                </div>
            </div>
        )
    }
}
