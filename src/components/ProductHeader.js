import React from 'react'

export function ProductHeader(){
    return(
        <div className="ProductHeader">
            <h2>Product Overview</h2>
            <div className="ProductHeaderOptions row">
                <ProductMenu/>
                <SearchAndFilter/>
            </div>
        </div>
    )
}

export function ProductMenu(){
    return(
        <ul className="ProductMenu row">
            <li>All Products</li>
            <li>Women</li>
            <li>Men</li>
            <li>Bag</li>
            <li>Shoes</li>
            <li>Watches</li>
        </ul>
    )
}


export function SearchAndFilter(){
    return(
        <div className="SearchAndFilter row">
            <div className = "SAFOption Filter">
                <span>Filter</span>
            </div>
            <div className = "SAFOption Search">
                <span>Search</span>
            </div>
        </div>
    )
}
