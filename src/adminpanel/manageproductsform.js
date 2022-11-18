import React from "react";
import { useState, useEffect } from "react";
import { isAuthenticated } from "../backendjoin/auth";
import Menu2 from "../menu/menu2";
// import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { UpdateProduct } from "./apiproducts";
// import 
// import { AddProducts } from "./apiproducts";
export default function ManageProductForm() {
    const { user, Token } = isAuthenticated()
    console.log(user)
    const {productId} = useParams()
    console.log('produt d',productId)
    // const [searchParams] = useSearchParams();
    // console.log(searchParams.userid)
    console.log(isAuthenticated())
    const [ProductValues, SetProductValues] = useState({
        ImageProduct: "",
        Quantity: "",
        loading: false,
        error: false,
        formData: "",
        Price:"",
        NewProduct: "",
    })

    const { loading,
        error, ImageProduct ,Price, Quantity,NewProduct, formData } = ProductValues

    const preload = () => {
        SetProductValues({ ...ProductValues, formData: new FormData() })
    }
    useEffect(() => {
        preload();
    }, []);
    const onSubmit = event => {
        event.preventDefault();
        SetProductValues({ ...ProductValues, error: "", loading: true })
        UpdateProduct(productId,user._id, Token, formData).then(data => {
        // console.log(",product id ",product._id)
            if (data.error) {
                SetProductValues({ ...ProductValues, error: false });
            } else {
                SetProductValues({
                    ...ProductValues,
                    ImageProduct: "",
                    error: true,
                    Quantity: "",
                    Price:"",
                    loading: false,
                    NewProduct: data.NameofProduct
                });
            }
        });
    }
    console.log(" ", error)
    const handleChange = name => event => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        const value = name === "ImageProduct" ? event.target.files[0] : event.target.value
        console.log(name, value)
        formData.set(name, value);
        SetProductValues({ ...ProductValues, [name]: value });
    }

    const SuccessMessage = () => {
        return (
            <div className="alert alert-success mt-3"
                style={{ display: NewProduct ? "" : "none" }}>
                <h4>Created SucessFully </h4>
            </div>
        )
    }

    const ErrorMessage = () => {
        return (
            <div className="alert alert-danger mt-3"
                style={{ display: error ? "" : "none" }}>
                <h4>Could not create the Product {error}</h4>
            </div>
        )
    }

    return (
        <>
            <Menu2 />
            <div className="col-md-12">
                <div className="h-100 w-75 mx-auto bg-white">
                    <form className="p-5 mx-auto">

                        <div className="mb-3">
                            <label for="formGroupExampleInput6" className="form-label" style={{ fontWeight: 'bold' }}>PhotoGraph of the Product</label>
                            <input type="file"
                                accept="image"
                                className="form-control"
                                id="formGroupExampleInput6"
                                onChange={handleChange("ImageProduct")}
                                name="ImageProduct"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput6" className="form-label" style={{ fontWeight: 'bold' }}>Quantity</label>
                            <input
                                type="number"
                                className="form-control"
                                id="formGroupExampleInput6"
                                onChange={handleChange("Quantity")}
                                value={Quantity}
                            />
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput6" className="form-label" style={{ fontWeight: 'bold' }}>Quantity</label>
                            <input
                                type="number"
                                className="form-control"
                                id="formGroupExampleInput6"
                                onChange={handleChange("Price")}
                                value={Price}
                            />
                        </div>
                        {/* {successSignup} */}
                        {/* {errorSignup(error)} */}
                        <button
                            onClick={onSubmit}
                            type="submit"
                            className="w-100 btn-primary"
                            style={{ backgroundColor: "#0274be", fontWeight: 'bold' }}>Add Product</button>
                    </form>
                    {SuccessMessage()}
                    {ErrorMessage()}
                </div>
            </div>
        </>
    )
}