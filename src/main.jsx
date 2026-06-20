import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import global styles with CSS variables and reset
import './styles/global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
