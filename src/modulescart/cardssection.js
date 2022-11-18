import React from "react";
import ImageCardContainer from "./imgcontainer";
import ByrantImage1 from "../pages/img/Cart7.jpg"
import ByrantImage2 from "../pages/img/Cart9.jpg"
import ByrantImage3 from "../pages/img/Cart8.jpg"
import Cards from "./cart";
import { ProductsGet } from "../adminpanel/apiproducts";
import ByrantImage4 from "../pages/img/Cart3.jpg"
import ByrantImage5 from "../pages/img/Cart4.jpg"
import ByrantImage6 from "../pages/img/Cart6.jpeg"
import { useState,useEffect } from "react";
import { isAuthenticated } from "../backendjoin/auth";
const Cardsproduct = () => {

    const { user, Token } = isAuthenticated()
    const [Products, SetProducts] = useState([])
    const preload = () => {
        ProductsGet(Token).then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{

                SetProducts(data.message)
            console.log(Products)
            }
        })
    }
    console.log(Products)
    useEffect(() => {
        preload()
    }, [])
    var ArrayOfObjects = [
        {
            IMG: ByrantImage1,
            Cost: 3.5,
            Farm: 'Jordan Farm',
            Category: 'Fresh Herbs',
            Desc: "Parsely, MOFGA Organic - (1bunch)"
        },
        {
            IMG: ByrantImage2,
            Cost: 15.5,
            Farm: 'Jordan Farm',
            Category: 'Fresh Herbs',
            Desc: "Cilantro, MOFGA Organic – (1 bunch)"
        },
        {
            IMG: ByrantImage3,
            Cost: 9.5,
            Farm: 'Jordan Farm',
            Category: 'Fresh Herbs',
            Desc: "Lettuce, Red Boston – one head"
        },
        {
            IMG: ByrantImage4,
            Cost: 6.5,
            Farm: 'Jordan Farm',
            Category: 'Vegetables',
            Desc: "Lettuce, Red Leaf – one head"
        },
        {
            IMG: ByrantImage5,
            Cost: 5.5,
            Farm: 'Jordan Farm',
            Category: 'Vegetables',
            Desc: "Spicy Mix, MOFGA Organic – (5 oz)"
        },
        {
            IMG: ByrantImage6,
            Cost: 5.5,
            Farm: 'Jordan Farm',
            Category: 'Vegetables',
            Desc: "Lettuce, Green Boston – one head"
        }
    ]


    return (
        <>
            <div className="row">
                <div className="row row-cols-md-2 col-md-3 gx-0">
                    <div class="card w-75 mx-auto my-5"
                        style={{ height: "fit-content" }}>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item fw-bold">Categories</li>
                            <li className="ms-3"
                                style={{ listStyle: 'none' }}>
                                Three
                            </li>
                            <li className="ms-3"
                                style={{ listStyle: 'none' }}>
                                Two
                            </li>
                            <li className="ms-3"
                                style={{ listStyle: 'none' }}>
                                One
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row row-cols-md-2 col-md-9 gx-0 my-5">
                    <div class="col-md-12">
                        <section class="">
                            <h4 className="">All Products</h4>
                            <form>
                                <div class="row d-flex">
                                    <div class="col-md-4 col-12">
                                        <div class="form-outline form-white mb-4">
                                            <input type="email" id="form5Example2" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <button type="submit" style={{ backgroundColor: '#90B501', fontFamily: 'Noto sans' }} class="btn text-white mb-4">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>

                    <div class="col-md-12">
                        <section class="d-flex justify-content-space-between">
                            <div className="row">
                                <div className="">

                                </div>
                            </div>
                            <form className="">
                                <select class="form-select w-100 float-right" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </form>
                        </section>
                    </div>
                    {/* <ImageCardContainer image={content.IMG} /> */}
                    {(
                        Products.map((content, index) => {
                            {/* console.log('->', content) */}
                            return (
                                <div className="col"
                                    style={{ width: '20%' }}
                                >
                                <Cards Props={content}/>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </>
    )
}


export default Cardsproduct