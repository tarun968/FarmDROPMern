import React from "react";
import './formcomp.css';
import { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import { Navigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
// 991435748204-2nqakgjfp3ok2cn6spi86svqgpr9fr9h.apps.googleusercontent.com
import { isAuthenticated, signup, signin, authenticate } from "../backendjoin/auth";

export default function Login() {
    const [ValuesLog, setLogValues] = useState({
        email: "",
        password: "",
        ErrorL: "",
        loading: false,
        didRedirect: false
    })
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: '991435748204-2nqakgjfp3ok2cn6spi86svqgpr9fr9h.apps.googleusercontent.com',
                scope: 'email',
            });
        }

        gapi.load('client:auth2', start);
    }, []);

    const successGoogle = async (response) => {
        console.log('response', response)
        fetch('http://localhost:5000/googlesignin', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ tokenId: response.tokenId })
        }).then(
            resp => {
                console.log(resp)
                return resp.json()
            }
        ).then(data => {
            console.log('data after the nthe n', data)
            authenticate(data, () => {
                setLogValues({
                    ...ValuesLog,
                    didRedirect: true
                })
            }
            )
        })
    }
    const failureGoogle = async (response) => {
        console.log('response', response)
    }
    const logoutSuccess = async (response) => {
        console.log('logout ', response)
    }
    const { email, password, ErrorL, loading, didRedirect } = ValuesLog
    const handleLogChange = name => event => {
        setLogValues({ ...ValuesLog, error: false, [name]: event.target.value })
    }
    const didRedirectlogin = () => {
        if (didRedirect) {
            console.log("user",user)
            if (user && user.Role === 1) {
                return (
                    <Navigate to = "admin/dashboard"/>
                )
            }
            else {
                return (
                    <Navigate to = "/"/>
                )
            }

        }

    }
    const errorLogin = () => {
        return (
            <div className="mt-4 row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger"
                        style={{ display: ErrorL ? "" : "none" }}>
                        Incorrect username or password
                    </div>
                </div>
            </div>
        )
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

    return (
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
                        <GoogleLogin
                            clientId="991435748204-2nqakgjfp3ok2cn6spi86svqgpr9fr9h.apps.googleusercontent.com"
                            onSuccess={successGoogle}
                            onFailure={failureGoogle}
                        />
                        <GoogleLogout
                            clientId="991435748204-2nqakgjfp3ok2cn6spi86svqgpr9fr9h.apps.googleusercontent.com"
                            onLogoutSuccess={logoutSuccess}
                        />
                    </form>
                    {didRedirectlogin()}
                    {errorLogin()}
                </div>
            </div>
        </div>
    )
}