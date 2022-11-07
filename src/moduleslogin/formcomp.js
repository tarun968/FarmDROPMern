import React from "react";
import './formcomp.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { isAuthenticated, signup, signin, authenticate } from "../backendjoin/auth";
export default function Form() {
    const [ValuesLog, setLogValues] = useState({
        email: "",
        password: "",
        ErrorL: "",
        loading: false,
        didRedirect: false
    })
    const { email, password, ErrorL, loading, didRedirect } = ValuesLog
    const handleLogChange = name => event => {
        setLogValues({ ...ValuesLog, error: false, [name]: event.target.value })
    }
    const { user } = isAuthenticated()
    console.log(user)
    const Login = (event) => {
        event.preventDefault();
        setLogValues({ ...ValuesLog, ErrorL: false, loading: true })
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setLogValues({ ...ValuesLog, ErrorL: data.error, loading: false })
                }
                else {
                    authenticate(data, () => {
                        setLogValues({
                            ...ValuesLog,
                            didRedirect: true
                        })
                    })
                }
            })
            .catch(console.log("error in the signin"))
    }


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
        <>
            <div className="row align-items-md-stretch my-5">
                <div className="col-md-6 rounded">
                    <div className="h-100 p-5 text-dark bg-white rounded-3">
                        <div className="row align-items-md-stretch">
                            <form className="border">
                                <div className="mb-3">
                                    <label for="formGroupExampleInput4" className="form-label" style={{ fontWeight: 'bold' }}>Username or email address</label>
                                    <input type="text"
                                        className="form-control"
                                        id="formGroupExampleInput"
                                        value={email}
                                        onChange={handleLogChange("email")} />
                                </div>
                                <div className="mb-3">
                                    <label for="formGroupExampleInput21" className="form-label" style={{ fontWeight: 'bold' }}>Password</label>
                                    <input type="password"
                                        className="form-control"
                                        id="formGroupExampleInput2"
                                        value={password}
                                        onChange={handleLogChange("password")}
                                    />
                                </div>
                                <div className="col-12">
                                    <button
                                        onClick={Login}
                                        type="submit"
                                        className="w-50 btn-primary mb-3"
                                        style={{ backgroundColor: "#0274be", fontWeight: 'bold' }}
                                    >Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="h-100 p-5 bg-white rounded">
                        <form className="border p-5">
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
                            <button
                                onClick={SignUp}
                                type="submit"
                                className="w-50 btn-primary"
                                style={{ backgroundColor: "#0274be", fontWeight: 'bold' }}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}