import React from "react";
import './formcomp.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { isAuthenticated, signup, signin, authenticate } from "../backendjoin/auth";
export default function SignIn(){

    const [Values, setValues] = useState({
        Email: "",
        Password: "",
        Role: 1,
        Phone: "",
        Reference: "",
        "FDMarket": "",
        error: "",
        success: false
    })
    const { Email, Password, Role, Phone, Reference, FDMarket, error, success } = Values
    const handleChange = name => event => {
        setValues({ ...Values, error: false, [name]: event.target.value })
    }
    const successSignup = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success"
                        style={{ display: success ? "" : "none" }}>
                        New account was created successfully
                    </div>
                </div>
            </div>
        )
    }
    const errorSignup = () => {
        return (
            <div className="mt-4 row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger"
                        style={{ display: error ? "" : "none" }}>
                        {error}
                    </div>
                </div>
            </div>
        )
    }
    const SignUp = event => {
        event.preventDefault();
        setValues({ ...Values, error: false })
        signup({ Email, Password, Role, Phone, Reference, FDMarket })
            .then(data => {
                console.log("data", data)
                if (data.error) {
                    setValues({
                        Email: "",
                        Password: "",
                        Role: 1,
                        Phone: "",
                        Reference: "",
                        "FDMarket": ""
                        , error: data.error, success: false
                    })
                }
                else {
                    setValues({
                        Email: "",
                        Password: "",
                        Role: 1,
                        Phone: "",
                        Reference: "",
                        "FDMarket": "",
                        error: "",
                        success: true
                    })
                }
            })
            .catch(console.log('error in the signup'))
    }

    return (
    <div className="col-md-6">
                    <div className="h-100 p-5 bg-white rounded ">
                        <form className="p-5 border">
                            <label for="formGroupExampleInput3" className="form-label" style={{ fontWeight: 'bold' }}>Select Your FarmDrop Market</label>
                            <input className="form-control"
                                id="formGroupExampleInput3"
                                aria-label="Default select example"
                                onChange={handleChange("FDMarket")}
                                value={FDMarket}
                            />

                            <label for="formGroupExampleInput4" className="form-label" style={{ fontWeight: 'bold' }}>How did you hear about us</label>
                            <input
                                type='text'
                                className="form-control"
                                id="formGroupExampleInput4"
                                aria-label="Default select example"
                                onChange={handleChange("Reference")}
                                value={Reference}
                            />


                            <div className="mb-3">
                                <label for="formGroupExampleInput6" className="form-label" style={{ fontWeight: 'bold' }}>Phone Number</label>
                                <input type="text"
                                    className="form-control"
                                    id="formGroupExampleInput6"
                                    onChange={handleChange("Phone")}
                                    value={Phone}
                                />
                            </div>


                            <div className="mb-3">
                                <label for="formGroupExampleInput7" className="form-label" style={{ fontWeight: 'bold' }}>Email Address</label>
                                <input type="text"
                                    className="form-control"
                                    id="formGroupExampleInput7"
                                    onChange={handleChange("Email")}
                                    value={Email}
                                />
                            </div>

                            <div className="mb-3">
                                <label for="formGroupExampleInput8" className="form-label" style={{ fontWeight: 'bold' }}>Password</label>
                                <input type="password"
                                    className="form-control"
                                    id="formGroupExampleInput8"
                                    onChange={handleChange("Password")}
                                    value={Password}
                                />
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" />
                                <label className="form-check-label" for="flexRadioDisabled">
                                    I am customer
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" />
                                <label className="form-check-label" for="flexRadioCheckedDisabled">
                                    I am vendor
                                </label>
                            </div>
                            <span>
                                By registering with FarmDrop, you agree to our <Link to="/" style={{ display: 'inline' }}>privacy policy.</Link>
                            </span>
                            <br>
                            </br>
                            <br></br>

                            {/* {successSignup} */}
                            {/* {errorSignup(error)} */}
                            <button
                                onClick={SignUp}
                                type="submit"
                                className="w-50 btn-primary"
                                style={{ backgroundColor: "#0274be", fontWeight: 'bold' }}>Register</button>
                        </form>
                        {successSignup()}
                        {errorSignup()}
                    </div>
                </div>
    )
}