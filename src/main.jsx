import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router";
import CatalogPage from './pages/CatalogPage';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Catalog" element={<CatalogPage/>} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
