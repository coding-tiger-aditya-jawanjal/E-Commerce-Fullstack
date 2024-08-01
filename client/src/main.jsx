import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "react-responsive-modal/styles.css";
import "react-range-slider-input/dist/style.css";
import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
