import React from "react";
import Menu2 from "../menu/menu2"
import { useState, useEffect } from "react";
import { isAuthenticated } from "../backendjoin/auth";
import { AddProducts } from "./apiproducts";
import Footer from "../pages/footer";
export default function ProductForm() {
    const { user, Token } = isAuthenticated()
    console.log(user)
    console.log(isAuthenticated())
    const [ProductValues, SetProductValues] = useState({
        NameofProduct: "",
        ProductID: "",
        ImageProduct: "",
        Quantity: "",
        Price: "",
        loading: false,
        error: false,
        formData: "",
        AddedBy: user.Email,
        NewProduct: "",
        DateofAdd: new Date()
    })

    const { NameofProduct, ProductID, loading,
        error, ImageProduct, Quantity, AddedBy,Price, NewProduct, DateofAdd, formData } = ProductValues

    const preload = () => {
        SetProductValues({ ...ProductValues, formData: new FormData() })
    }
    useEffect(() => {
        preload();
    }, []);
    const onSubmit = event => {
        event.preventDefault();
        SetProductValues({ ...ProductValues, error: "", loading: true })
        AddProducts(user._id, Token, formData).then(data => {
            if (data.error) {
                SetProductValues({ ...ProductValues, error: false });
            } else {
                SetProductValues({
                    ...ProductValues,
                    NameofProduct: "",
                    Price: "",
                    ProductID: "",
                    ImageProduct: "",
                    error: true,
                    Quantity: "",
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
                <h4>{NewProduct} Created SucessFully </h4>
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
                        <label for="formGroupExampleInput3" className="form-label" style={{ fontWeight: 'bold' }}>Name of the product</label>
                        <input
                            className="form-control"
                            id="formGroupExampleInput90"
                            aria-label="Default select example"
                            // name="ImageProduct"
                            onChange={handleChange("NameofProduct")}
                            value={NameofProduct}
                        />

                        <label for="formGroupExampleInput4" className="form-label" style={{ fontWeight: 'bold' }}>Price</label>
                        <input
                            type='number'
                            className="form-control"
                            id="formGroupExampleInput4"
                            aria-label="Default select example"
                            onChange={handleChange("Price")}
                            // name="ProductID"
                            value={Price}
                        />

                        <label for="formGroupExampleInput4" className="form-label" style={{ fontWeight: 'bold' }}>Product ID</label>
                        <input
                            type='text'
                            className="form-control"
                            id="formGroupExampleInput4"
                            aria-label="Default select example"
                            onChange={handleChange("ProductID")}
                            // name="ProductID"
                            value={ProductID}
                        />


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
                            {/* <label for="formGroupExampleInput6" className="form-label" style={{ fontWeight: 'bold' }}>Added By</label> */}
                            <input
                                className="form-control"
                                id="formGroupExampleInput6"
                                // onChange={handleChange("AddedBy")}
                                // name="AddedBy"
                                value={user.Email}
                                readOnly
                                hidden
                            />
                        </div>


                        <div className="mb-3">
                            <input
                                type="date"
                                className="form-control"
                                id="formGroupExampleInput6"
                                // onChange={handleChange("DateofAdd")}
                                // name="DateofAdd"
                                value={new Date().toLocaleDateString()}
                                hidden
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
            <Footer/>
        </>
    )
}