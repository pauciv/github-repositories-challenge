import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import QueryProvider from './context/QueryProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <App />
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
