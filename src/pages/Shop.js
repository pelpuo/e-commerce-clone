import React from 'react'
import {ProductHeader} from './../components/ProductHeader'
import {ProductList} from './../components/ProductList'
import Footer from './../components/Footer'

export default function Shop() {
    return (
        <div className="Shop">
            <div className="container">
                <ProductHeader/>
                <ProductList/>
            </div>
            <Footer/>
        </div>
    )
}
