import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import User from './components/User/User.jsx'
import Github, { GithubLoader } from './components/Github/Github.jsx'
/*
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"/homepage",
        element:<Homepage title={"This is Homepage"}/>
      },
      {
        path:"/about",
        element:<About />
      }
    ],
  }
])
*/
const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user/:userId" element={<User />}></Route>
        <Route path="/github" loader={GithubLoader} element={<Github/>} ></Route>
    </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
