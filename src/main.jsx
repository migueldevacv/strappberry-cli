import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthRoutes } from '@auth/index.js'
import { AdminRoutes } from '@admin/index.js'

const Ba = () => (<>sisisi</>)

const router = createBrowserRouter([
  {
    path: "/auth",
    children: AuthRoutes,
  },
  {
    path: '/admin',
    children: AdminRoutes,
  },
]);

console.log(router);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter>
    <App />
    </BrowserRouter> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
