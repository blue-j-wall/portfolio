import './Portfolio.css'
import { useEffect, useState, useContext } from 'react'
import { Outlet } from "react-router-dom";

import SiteNavbar from "./nav/Navbar";

import './Portfolio.css'

function Portfolio() {

  return <>
      <SiteNavbar />
      <br></br>
      <Outlet />
  </>
}

export default Portfolio
