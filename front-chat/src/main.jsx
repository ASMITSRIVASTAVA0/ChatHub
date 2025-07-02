import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from "react-router";
import AppRoutes from '../Routes/routes.jsx';
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Toaster />
        <AppRoutes/>
    </BrowserRouter>
    
  </StrictMode>,
)
