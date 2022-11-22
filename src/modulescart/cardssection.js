import React from "react";
import ImageCardContainer from "./imgcontainer";
import Cards from "./cart";
import { ProductsGet } from "../adminpanel/apiproducts";
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