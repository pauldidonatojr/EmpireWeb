import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = ({
    routeType,
    loggedIn,
    redirectPath = "/",
    loginType,
    children
}) => {

    const navigate = useNavigate();
    if (routeType === 1) {
        if (loggedIn === true && loginType == 'admin') {
            return children ? children : <Outlet />;
        }
        else{
            return <Navigate to="/"/>
        }
    }


    if (routeType === 2) {
        if (loggedIn === true && loginType == 'caregiver') {
            return children ? children : <Outlet />;
        }
        else{
            return <Navigate to="/"/>
        }
    }


    if (routeType === 3) {
        if (loggedIn === true && loginType == 'patient') {
            return children ? children : <Outlet />;
        }
        else{
            return <Navigate to="/"/>
        }
    }
};
export default ProtectedRoute;
