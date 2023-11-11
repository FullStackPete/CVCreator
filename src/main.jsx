import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Menu'
import Forms from './Forms'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="flex flex-row">
    <Menu/>
    <Forms/>
    </div>
  </React.StrictMode>,
)
