import React from "react";
import { Link } from "react-router-dom";
import './footer.css'
export default function Footer() {
    return (
        <>
            <div>
                <footer style={{ backgroundColor: '#303030' }} class="text-center text-white">
                    <div class="row d-flex justify-content-center">
                        <div class="col-auto">
                            <section class="mt-5 mb-4 text-light">
                                <a
                                    style={{ textDecoration: 'none' }}

                                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                                    data-mdb-ripple-color="dark"
                                >
                                    <Link style={{ color: "White", textDecoration: 'none' }} to='/Aboutus'>About</Link>
                                </a>
                                <a
                                    style={{ textDecoration: 'none' }}

                                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                                    data-mdb-ripple-color="dark"
                                >
                                    <Link style={{ color: "White", textDecoration: 'none' }} to='/Ourlocation'>Our Markets</Link>
                                </a>
                                <a
                                    style={{ textDecoration: 'none' }}

                                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                                    data-mdb-ripple-color="dark"
                                >
                                    <Link style={{ color: "White", textDecoration: 'none' }} to='/Contactus'>Contact</Link>
                                </a>
                                <a
                                    style={{ textDecoration: 'none' }}

                                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                                    data-mdb-ripple-color="dark"
                                >
                                    <Link style={{ color: "White", textDecoration: 'none' }} to='/Login'>Login</Link>
                                </a>
                                <a
                                    style={{ textDecoration: 'none' }}

                                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                                    data-mdb-ripple-color="dark"
                                >
                                    <Link style={{ color: "White", textDecoration: 'none' }} to='/Ourlocation'>Support</Link>
                                </a>
                                <a
                                    style={{ textDecoration: 'none' }}
                                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                                    data-mdb-ripple-color="dark"
                                >
                                    <Link style={{ color: "White", textDecoration: 'none' }} to='/Connect'>Let's Connect</Link>
                                </a>
                            </section>
                        </div>
                    </div>

                    <div class="container p-4 pb-0">
                        <section class="">
                            <form>
                                <div class="row d-flex justify-content-center">
                                    <div class="col-auto">
                                        <p class="pt-2">
                                            <strong>Sign up for our newsletter</strong>
                                        </p>
                                    </div>
                                </div>
                                <div class="row d-flex justify-content-center">
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
                    <div class="container p-4 pb-5">
                        <h7>
                            Copyright © 2022 FarmDrop
                        </h7>
                    </div>
                </footer>
            </div>
        </>
    )
}