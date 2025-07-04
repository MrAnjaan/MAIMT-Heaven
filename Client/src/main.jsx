import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, HashRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import 'react-toastify/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
    <App />
    </BrowserRouter>
  </StrictMode>,
)
