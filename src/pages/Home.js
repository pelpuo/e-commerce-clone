import React from 'react'
import {MyCarousel} from './../components/MyCarousel';
import {BannerContainer} from './../components/BannerContainer';
import {ProductHeader} from './../components/ProductHeader';
import {ProductList} from './../components/ProductList';
import Footer from './../components/Footer';

export default function Home() {
    return (
        <div className="Home">
            <MyCarousel/>
            <div className="container">
                <BannerContainer/>
                <ProductHeader/>
                <ProductList/>
            </div>
            <Footer/>
        </div>
    )
}
