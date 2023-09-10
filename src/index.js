import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './components/Login';
import Upload from './components/Upload';
import Cart from './components/Cart';
import Contact from './components/Contact';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Upload",
    element: <Upload/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
  {
    path: "/Cart",
    element: <Cart/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
