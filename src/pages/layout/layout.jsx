import React from 'react'
import NavBar from '../../component/navBar/NavBar'
import './layout.scss'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="layout">
    <div className="navbar">
      <NavBar />
    </div>
    <div className="content">
      <Outlet />
    </div>
  </div>
  )
}

export default Layout
