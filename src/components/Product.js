import React from 'react'
import img from "./../images/product-03.jpg" 

export function Product(){
    return(
        <div className = "Product col-md-3">
            <img className="ProductImg" src={img} alt="noImg"/>
            <div className = "prodDetails">
                <div className="row">
                    <div class="col-sm-10">
                        <span id="itemName">Lorem Ipsum</span>
                    </div>
                    <div class="col-sm-2">
                        <span id="wishList" className="fas fa-search">🤍</span>
                    </div>
                </div>

                <span id="price">$0.00</span>
            </div>
        </div>
    )
}