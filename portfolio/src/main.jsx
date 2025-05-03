import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Part1 from './components/part1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Part1/>
    <App />
  </StrictMode>,
)
