import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

// const rotuer = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='' >
      
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
    <App />
)
