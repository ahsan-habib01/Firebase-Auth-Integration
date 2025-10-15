import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Contexts/AuthContext/AuthProvider';
import Orders from './Pages/Orders';
import Profile from './Pages/Profile';
import PrivateRoutes from './Routes/PrivateRoutes';
import Dashboard from './Pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'orders',
        element: <PrivateRoutes>
          <Orders></Orders>
        </PrivateRoutes>
      },
      {
        path: 'profile',
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path: 'dashboard',
        element: <PrivateRoutes> <Dashboard></Dashboard> </PrivateRoutes>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
