import React from "react";
import Menu2 from "../menu/menu2"
import { useState, useEffect } from "react";
import { isAuthenticated } from "../backendjoin/auth";
// import { AddProducts } from "./apiproducts";
import { AddShop } from "./apilocations";
export default function LocationsForm() {
    const { user, Token } = isAuthenticated()
    console.log(user)
    console.log(isAuthenticated())
    const [imagesField, setImagesField] = useState([{
        'ImagesShop': "",
        index: 0
    }])
    const [ProductValues, SetProductValues] = useState({
        NameofShop: "",
        EmailShop: "",
        ShopID: "",
        ImagesShop: "",
        Country: "",
        Address: "",
        City: "",
        State: "",
        OwnerName: "",
        loading: false,
        error: false,
        formData: "",
        AddedBy: user.Email,
        NewProduct: "",
        DateofAdd: new Date()
    })

    const { NameofShop, ShopID, loading,
        error, OwnerName, Country, EmailShop,
        State, ImagesShop, Address, AddedBy, City, NewProduct, DateofAdd, formData } = ProductValues

    const preload = () => {
        SetProductValues({ ...ProductValues, formData: new FormData() })
    }
    useEffect(() => {
        preload();
    }, []);
    const onSubmit = event => {
        event.preventDefault();
        SetProductValues({ ...ProductValues, error: "", loading: true })
        AddShop(user._id, Token, formData).then(data => {
            if (data.error) {
                SetProductValues({ ...ProductValues, error: false });
            } else {
                SetProductValues({
                    ...ProductValues,
                    NameofShop: "",
                    EmailShop: "",
                    ShopID: "",
                    ImagesShop: "",
                    Country: "",
                    Address: "",
                    City: "",
                    State: "",
                    OwnerName: "",
                    error: true,
                    loading: false,
                    NewProduct: data.NameofProduct
                });
            }
        });
    }
    console.log(" ", error)
    const handleChange = name => event => {
        const value = name === "ImagesShop" ? event.target.files[0] : event.target.value
        console.log(name, value)
        formData.set(name, value);
        SetProductValues({ ...ProductValues, [name]: value });
    }

    const handleFormChangeImage = (index, event) => {
        let data = [...imagesField];

        // console.log(data)
        // console.log(data[0].ImagesShop)
        // console.log(data[name])
        // console.log(imagesField)
        data[index][event.target.name] = event.target.files[0];
        // console.log(imagesField)
        formData.append(index, event.target.files[0])
        setImagesField(data);
        console.log(imagesField)
    }
    const SuccessMessage = () => {
        return (
            <div className="alert alert-success mt-3"
                style={{ display: NewProduct ? "" : "none" }}>
                <h4>{NewProduct} Created SucessFully </h4>
            </div>
        )
    }
    const addFields = () => {
        setImagesField([...imagesField, { data: "", content: "" }])
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
                        <label for="formGroupExampleInput3" className="form-label" style={{ fontWeight: 'bold' }}>Name of the Locations</label>
                        <input
                            className="form-control"
                            id="formGroupExampleInput90"
                            aria-label="Default select example"
                            // name="ImageProduct"
                            onChange={handleChange("NameofShop")}
                            value={NameofShop}
                        />
                        <label for="formGroupExampleInput3" className="form-label" style={{ fontWeight: 'bold' }}>Email Shop</label>
                        <input
                            className="form-control"
                            id="formGroupExampleInput90"
                            aria-label="Default select example"
                            // name="ImageProduct"
                            onChange={handleChange("EmailShop")}
                            value={EmailShop}
                        />
                        <label for="formGroupExampleInput3" className="form-label" style={{ fontWeight: 'bold' }}>Name of the Owner</label>
                        <input
                            className="form-control"
                            id="formGroupExampleInput90"
                            aria-label="Default select example"
                            // name="ImageProduct"
                            onChange={handleChange("OwnerName")}
                            value={OwnerName}
                        />
                        <label for="formGroupExampleInput4" className="form-label" style={{ fontWeight: 'bold' }}>Country</label>
                        <input
                            type='text'
                            className="form-control"
                            id="formGroupExampleInput4"
                            aria-label="Default select example"
                            onChange={handleChange("Country")}
                            // name="ProductID"
                            value={Country}
                        />

                        <label for="formGroupExampleInput4" className="form-label" style={{ fontWeight: 'bold' }}>City</label>
                        <input
                            type='text'
                            className="form-control"
                            id="formGroupExampleInput4"
                            aria-label="Default select example"
                            onChange={handleChange("City")}
                            // name="ProductID"
                            value={City}
                        />


                        <div className="mb-3">
                            <label for="formGroupExampleInput6" className="form-label" style={{ fontWeight: 'bold' }}>State</label>
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput6"
                                onChange={handleChange("State")}
                                value={State}
                            />
                        </div>

                        <div className="mb-3">
                            <label for="formGroupExampleInput6" className="form-label" style={{ fontWeight: 'bold' }}>Shop ID</label>
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput6"
                                onChange={handleChange("ShopID")}
                                value={ShopID}
                            />
                        </div>

                        <div className="mb-3">
                            <label for="formGroupExampleInput6" className="form-label" style={{ fontWeight: 'bold' }}>Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput6"
                                onChange={handleChange("Address")}
                                value={Address}
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="date"
                                className="form-control"
                                id="formGroupExampleInput6"
                                onChange={handleChange("DateofAdd")}
                                name="DateofAdd"
                                value={new Date().toLocaleDateString()}
                                hidden
                            />
                        </div>


                        {
                            imagesField.map((element, index) => {
                                return (
                                    <div className="mb-3" key={index}>
                                        <label for="formGroupExampleInput6" className="form-label" style={{ fontWeight: 'bold' }}>PhotoGraph of the Locations</label>
                                        <input type="file"
                                            accept="image"
                                            className="form-control"
                                            // onChange={handleFormChangeImage("ImagesShop")}
                                            onChange={e => handleFormChangeImage(index, e)}
                                            name="ImagesShop"
                                        />
                                    </div>
                                )
                            })
                        }
                        <button className="btn my-3 w-25" style={{
                            background: "#0274be",
                            color: 'white'
                        }}
                            type='button'
                            onClick={() => { addFields() }}
                        >Add more </button>


                        <button
                            onClick={onSubmit}
                            type="submit"
                            className="w-100 btn-primary"
                            style={{ backgroundColor: "#0274be", fontWeight: 'bold' }}>Add Locations</button>
                    </form>
                    {SuccessMessage()}
                    {ErrorMessage()}
                </div>
            </div>
        </>
    )
}