import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './components/MainPage.tsx'
import NavigationBar from './components/NavigationBar.tsx'
import Events from './components/Events.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path :"/MainPage",
    element : <MainPage/>
  },
  {
    path : "/NavigationBar",
    element : <NavigationBar/>
  },
  {
    path : "/Events",
    element : <Events/>
  }
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(

  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
