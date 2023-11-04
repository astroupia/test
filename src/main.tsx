import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import {
  Home,
  Service
} from "./Components";
import { RouterProvider, createBrowserRouter , Route, Routes, BrowserRouter } from "react-router-dom";
import { useRoutes } from 'react-router/dist/lib/hooks';

// const router = useRoutes([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//     {
//       path: "/",
//       element: <Home />
//     },
//     {
//       path: "service",
//       element: <Service />
//     },
//   ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
  </React.StrictMode>
)
