import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {WebContextProvider} from './ContextApi/WebContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WebContextProvider>
      <App />
    </WebContextProvider>
  </StrictMode>,
)
