import React from "react";
import {Routes,Route} from "react-router";
import App from "../src/App.jsx";

const AppRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/about" element={<h1>chat app</h1>} />
        </Routes>
    )
};

export default AppRoutes;