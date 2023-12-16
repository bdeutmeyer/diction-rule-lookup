import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import App from './App.jsx'
import './index.css'

import Landing from './pages/Landing.jsx'
import French from './pages/French.jsx'
import German from './pages/German.jsx'
import Italian from './pages/Italian.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      }, {
        path: '/french',
        element: <French />
      }, {
        path: '/german',
        element: <German />
      }, {
        path: '/italian',
        element: <Italian />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
