import './Portfolio.css'
import { useEffect, useState, useContext } from 'react'
import { Outlet } from "react-router-dom";

import PageNavbar from "./nav/Navbar";

import './Portfolio.css'

function Portfolio() {

  return <>
      <PageNavbar />
      <br></br>
      <Outlet />
  </>
}

export default Portfolio
