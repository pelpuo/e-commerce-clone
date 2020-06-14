import React from 'react'
import {CatBanner} from './CatBanner';

export function BannerContainer(){
    return(
        <div className = "BannerContainer row">
            <CatBanner/>
            <CatBanner/>
            <CatBanner/>
        </div>
    )
}