import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PrimerPunto from './PrimerPunto.jsx'
import SegundoPunto from './SegundoPunto.jsx'
import TercerPunto from './TercerPunto.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimerPunto />
    <SegundoPunto />
    <TercerPunto />
  </React.StrictMode>,
)
