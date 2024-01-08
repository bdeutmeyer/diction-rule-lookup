import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import App from './App.jsx'
import './index.css'

import Landing from './pages/Landing.jsx'
import Error from './pages/Error.jsx'
import Language from './pages/Language.jsx'

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
        element: <Language />
      }, {
        path: '/german',
        element: <Language />
      }, {
        path: '/italian',
        element: <Language />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
