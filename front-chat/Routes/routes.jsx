import React from "react";
import {Routes,Route} from "react-router";
import App from "../src/App.jsx";
import ChatPage from "../src/components/ChatPage.jsx";

const AppRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/about" element={<h1>chat app</h1>} />
            <Route path="/chat" element={<ChatPage/>} />
        </Routes>
    )
};

export default AppRoutes;