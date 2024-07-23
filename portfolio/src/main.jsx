import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Footer} from './pages/Footer.jsx'
import './index.css'
import {Navbar} from '../src/components/Navbar'
import { AuthProvider } from './store/auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
<AuthProvider>
  <Navbar/>
    <App />
    <Footer/>
</AuthProvider>
    
  </React.StrictMode>,
)
