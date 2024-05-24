import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, Routes } from 'react-router-dom'
import { AuthRoutes, AuthView } from '@auth/index.js'
import { AdminRoutes } from '@admin/index.js'
import AdminView from '@admin/AdminView'
import { ClientRoutes, ClientView } from '@client/index'
import { Auth } from './core'

const mainRolePaths = {
  1: '/admin/catalogs/products',
  2: '/page/products',
  3: '/page/products',
}

const router = createBrowserRouter([
  {
    path: "/auth",
    element: Auth.isLogged().status ? <Navigate to={mainRolePaths[Auth.isLogged().role]} /> : <AuthView />,
    children: AuthRoutes
  },
  {
    path: '/admin',
    // element: Auth.isLogged().status ? <AdminView /> : <Navigate to={'/auth/login'} />,
    element: <AdminView />,
    children: AdminRoutes,
  },
  {
    path: '/page',
    // element: Auth.isLogged().status ? <ClientView /> : <Navigate to={'/auth/login'} />,
    element: <ClientView />,
    children: ClientRoutes
  },
  {
    path: '/*',
    element: <Navigate to={'/auth/login'} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
