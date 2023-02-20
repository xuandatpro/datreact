import React from 'react'
import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: '/about',
      element: <div>About Us</div>
    },
    {
      path:'/h1',
      element:<h1>hello xuandat</h1>
    }
  ]);
  return (
    <RouterProvider
    router={router}>
  </RouterProvider>
  );
}

export default App;
