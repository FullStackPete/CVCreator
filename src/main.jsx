import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Menu'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="flex flex-row">
    <Menu/>
    </div>
  </React.StrictMode>,
)
