import { Outlet } from "react-router-dom";
import SiteNavbar from "./nav/Navbar";

function Portfolio() {

  return <>
      <SiteNavbar />
      <br></br>
      <Outlet />
  </>
}

export default Portfolio
