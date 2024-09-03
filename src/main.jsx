import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Start from './components/Start.jsx'
import Game from './routes/Game.jsx'
import FinalScreen from './components/FinalScreen.jsx'
import Failed from './components/Failed.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />
  },
  {
    path: "/play",
    element: <Game />
  },
  {
    path: "/defeat",
    element: <Failed />
  }, 
  {
    path: "/victory",
    element: <FinalScreen />
  }
])

import { ContextProvider } from "./context/variableContext.jsx"

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
)
