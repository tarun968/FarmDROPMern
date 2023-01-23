import React from "react";
import '../moduleslogin/formcomp.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetAuserOrder, GetuserDetails, UpdateUserdetails } from "./profileAPIs";
import Footer from "../pages/footer";
import Menu2 from "../menu/menu2";
import { signout } from "../backendjoin/auth";
import { isAuthenticated } from "../backendjoin/auth";
export default function EditProfile() {
    const navigate = useNavigate()
    const {user,Token} =isAuthenticated();
    console.log(isAuthenticated())
    const [ValuesLog, setLogValues] = useState({
        Email: user.Email,
        Password: user.Password,
        FDMarket:user.FDMarket,
        Phone:user.Phone,
        error: "",
        success: false,
    })
    const {Email,Password,FDMarket,Phone,error,success} = ValuesLog
    const preload = () => {
        GetuserDetails(user._id, Token).then(data => {
            if (data.error) {
            } else {
                setLogValues(data)
            }
        }
        )
    }
    const handleLogChange = name => event => {
        setLogValues({...ValuesLog,error:false,[name]:event.target.value})
}
    useEffect(() => {
        preload();
    }, [])
    const onSubmit = event => {
        event.preventDefault()
        setLogValues({ ...ValuesLog, error: false })
        UpdateUserdetails(user._id, Token, ValuesLog)
            .then(data => {
                if (data.error) {
                    setLogValues({ ...ValuesLog, error: data.error, success: false })
                }
                else {
                    console.log(data)
                    signout(() => {
                   navigate("/Login")
                    })
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <>
        <Menu2 />
        <div className="col-md-6 rounded mx-auto">
            <div className="h-100 p-5 text-dark bg-white rounded-3">
                <div className="row align-items-md-stretch">
                    <form className="border">
                        <div className="mb-3">
                            <label for="formGroupExampleInput4" className="form-label" style={{ fontWeight: 'bold' }}>Username or email address</label>
                            <input type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                value={Email}
                                onChange={handleLogChange(".Email")} 
                                />
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput4" className="form-label" style={{ fontWeight: 'bold' }}>Phone</label>
                            <input type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                value={Phone}
                                onChange={handleLogChange("Phone")} 
                                />
                        </div>
                        <div className="mb-3">
                            <label for="formGroupExampleInput4" className="form-label" style={{ fontWeight: 'bold' }}>FdMarket</label>
                            <input type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                value={FDMarket}
                                onChange={handleLogChange("FDMarket")} 
                                />
                        </div>
                        
                        <div className="mb-3">
                            <label for="formGroupExampleInput21" className="form-label" style={{ fontWeight: 'bold' }}>Password</label>
                            <input type="text"
                                className="form-control"
                                id="formGroupExampleInput2"
                                value={Password}
                                onChange={handleLogChange("Password")}
                            />
                        </div>
                        <div className="col-12">
                            <button
                                type="submit"
                                onClick={onSubmit}
                                className="w-100 btn-primary mb-3"
                                style={{ backgroundColor: "#0274be", fontWeight: 'bold' }}
                            >Change
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}