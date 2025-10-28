import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Themecontext from './context/Themecontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Themecontext>

   <App />
 </Themecontext>
   
)
