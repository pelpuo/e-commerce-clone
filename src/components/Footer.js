import React from 'react'

export default function Footer() {
    return (
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h6 class="text text-default">CATEGORIES</h6>
                        <ul className="FooterUL">
                            <li><a href=".Footer">Women</a></li>
                            <li><a href=".Footer">Men</a></li>
                            <li><a href=".Footer">Shoes</a></li>
                            <li><a href=".Footer">Watches</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6 class="text text-default">HELP</h6>
                        <ul className="FooterUL">
                            <li><a href=".Footer">Track Order</a></li>
                            <li><a href=".Footer">Returns</a></li>
                            <li><a href=".Footer">Shipping</a></li>
                            <li><a href=".Footer">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6 class="text text-default">GET IN TOUCH</h6>
                        <p id="FooterGetInTouch">Any questions? Let us know in store at 8th floor,
                             379 Hudson St, New York, NY 10018 or call us on 
                             (+1) 96 716 6879</p>
                    </div>
                    <div className="col-md-3">
                        <h6 class="text text-default">NEWSLETTER</h6>
                        <form>
                            <input id="FooterEmail" className="form-control" type="text" placeholder = "email@example.com"/>
                            <button id="FooterEmailSubmit" className="btn btn-primary">SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
