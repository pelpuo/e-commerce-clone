import React from 'react';
import catBannerBg from './../images/banner-02.jpg';

export function CatBanner(){
    return(
        <div className= "col-md-4">
            <div className = "CatBanner" style={{backgroundImage:`url(${catBannerBg})`}}>
                <div className="BannerTxt">
                    <h5>Men</h5>
                    <p>Spring 2018</p>
                    {/* <h5>Shop Now</h5> */}
                </div>
            </div>
        </div>
    )
}