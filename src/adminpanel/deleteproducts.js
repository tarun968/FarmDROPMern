import React from "react";
import { DeleteAProduct } from "./apiproducts";
import Menu2 from "../menu/menu2";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../backendjoin/auth";
import { AllProducts } from "./apiproducts";
import { useState, useEffect } from "react";
import ImageProductContainer from "./imagehelper";

const DeleteProduct = () => {
    const [Products, SetProduct] = useState([])
    const { user, Token } = isAuthenticated()
    const preload = () => {
        AllProducts(user._id, Token).then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                SetProduct(data.message)
            }
        })
    }

    useEffect(() => {
        preload()
    }, [])
    const DeleteThisProduct = (product,user,Token) =>{
        DeleteAProduct(product._id,user._id,Token).then(
            data => {
                if(data.error){
                    console.log("data error",data.error)
                }
                else{
                    preload()
                }
            }
        )
    }
    // console.log(Products)
    return (
        <>
            <Menu2 />
            <div className="row">
                <div className="row row-cols-md-2 col-md-9 mx-auto gx-0 my-5">
                    <div class="col-md-12">
                        <section class="d-flex justify-content-space-between">
                            <div className="row">
                                <div clas>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* {(
                        Products.map((content, index) => { */}
                    {/* console.log('->', content) */}
                    {Products.map((product, index) => {
                        console.log(product.ImageProduct.data)
                        return (
                            <div className="col"
                                style={{ width: '20%' }}
                            >

                                <div className="card my-2 mx-2"
                                >
                                    <ImageProductContainer product={product} />
                                    <div className="card-body"
                                        style={{ border: '0 0 0 0' }}
                                    >

                                        <span className="card-title" style={{
                                            fontSize: '90%'
                                        }}>
                                        {/* {product.ImageProduct.data.data} */}
                                        {/* {product.Name ofProduct} */}
                                        </span>
                                        <br></br>
                                        <span className="card-title" style={{
                                            fontSize: '87%'
                                        }}>{product.Quantity}</span>
                                        <p
                                            style={{ fontSize: '95%' }}
                                            className="fw-bold card-text">
                                            {product.ProductID}
                                        </p>
                                        <Link className="btn w-100" style={{
                                            background: "linear-gradient(#90B500, #7c9b00)",
                                            color: 'white'
                                        }}
                                        to={`${product._id}`}
                                        >
                                        Update</Link>
                                        <button className="btn mt-1 w-100" style={{
                                            background: "red",
                                            color: 'white'
                                        }}
                                        onClick={() => {DeleteThisProduct(product,user,Token)}
                                        }
                                        >Delete </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    {/* })
                    )} */}
                </div>
            </div>
        </>
    )
}


export default DeleteProduct