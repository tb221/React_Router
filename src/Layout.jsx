import React from 'react'
import Header from './components/Headers/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      
    </>
  )
}

export default Layout
