import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Header from './components/Header/Header';
import Root from './components/Root/Root';
import LatestNews from './components/LatestNews/LatestNews';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
       {
        path: '/',
        element: <LatestNews></LatestNews>
       }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
