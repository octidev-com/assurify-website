import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import GTMPageTracker from './utils/GTMPageTracker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GTMPageTracker />
      <App />
    </BrowserRouter>
  </StrictMode>
)
