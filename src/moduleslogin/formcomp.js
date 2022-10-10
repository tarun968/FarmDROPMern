import React from "react";
import './formcomp.css';
import { Link } from "react-router-dom";
export default function Form() {
    return (
        <>
            <div class="row align-items-md-stretch my-5">
                <div class="col-md-6 rounded">
                    <div class="h-100 p-5 text-dark bg-white rounded-3">
                        <div class="row align-items-md-stretch">
                            <form className="border">
                                <div class="mb-3">
                                    <label for="formGroupExampleInput" class="form-label" style={{ fontWeight: 'bold' }}>Username or email address</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" />
                                </div>
                                <div class="mb-3">
                                    <label for="formGroupExampleInput2" class="form-label" style={{ fontWeight: 'bold' }}>Password</label>
                                    <input type="password" class="form-control" id="formGroupExampleInput2" />
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="w-50 btn-primary mb-3" style={{ backgroundColor: "#0274be", fontWeight: 'bold' }}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="h-100 p-5 bg-white rounded">
                        <form className="border p-5">
                            <label for="formGroupExampleInput3" class="form-label" style={{ fontWeight: 'bold' }}>Select Your FarmDrop Market</label>
                            <select class="form-select" id="formGroupExampleInput3" aria-label="Default select example">
                                <option selected>Select Your FarmDrop Market</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                            <label for="formGroupExampleInput4" class="form-label" style={{ fontWeight: 'bold' }}>How did you hear about us</label>
                            <select class="form-select" id="formGroupExampleInput4" aria-label="Default select example">
                                <option selected>Select an option</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>


                            <div class="mb-3">
                                <label for="formGroupExampleInput6" class="form-label" style={{ fontWeight: 'bold' }}>Phone Number</label>
                                <input type="text" class="form-control" id="formGroupExampleInput6" />
                            </div>


                            <div class="mb-3">
                                <label for="formGroupExampleInput7" class="form-label" style={{ fontWeight: 'bold' }}>Email Address</label>
                                <input type="text" class="form-control" id="formGroupExampleInput7" />
                            </div>

                            <div class="mb-3">
                                <label for="formGroupExampleInput8" class="form-label" style={{ fontWeight: 'bold' }}>Password</label>
                                <input type="password" class="form-control" id="formGroupExampleInput8" />
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" />
                                <label class="form-check-label" for="flexRadioDisabled">
                                    I am customer
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" />
                                <label class="form-check-label" for="flexRadioCheckedDisabled">
                                    I am vendor
                                </label>
                            </div>
                            <span>
                                By registering with FarmDrop, you agree to our <Link to="/" style={{ display: 'inline' }}>privacy policy.</Link>
                            </span>
                            <br>
                            </br>
                            <br></br>
                            <button type="submit" class="w-50 btn-primary" style={{ backgroundColor: "#0274be", fontWeight: 'bold' }}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}