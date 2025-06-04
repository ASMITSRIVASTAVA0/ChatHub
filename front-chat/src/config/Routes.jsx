import React from 'react'
// import "./index.css";
import App from "../App.jsx";

import {BrowserRouter,Route,Routes} from "react-router";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/chat" element={<h1>This is chat page</h1>}/>
    </Routes>
  )
}

export default AppRoutes;