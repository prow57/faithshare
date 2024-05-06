import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const Protected = () =>{
    const token = localStorage.getItem("token");
    
        return token !== null ? <Outlet /> : <Navigate to="/login" replace/>;
}

export default Protected;