import { isAuthenticated } from "../backendjoin/auth";
import React from "react";
import { useNavigate, Outlet ,Navigate} from "react-router-dom";

const PrivateRoute = () => {
    let users = isAuthenticated();
    return (
        users ? <Navigate to ='login'/> :<Outlet />
    )
}

export default PrivateRoute