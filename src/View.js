import React from 'react'
import Navbar from "../src/pages/navigations/Nav"
import Herosection from "./pages/Hero/Hero"
import Service from './pages/service/Service'
import Download from "./pages/Myapp/Download"
import Midtop from "./pages/Midtop/Midtop"
import Middly from "./pages/Midcontent/Midcontent"
import Footerpaggy from "./pages/Footerpage/Footerpage"
import Display from "./pages/Display"
// import Displaying from "./D/Display/Display"

function View() {
  return (
    <div>
      <Navbar />
      <Herosection/>
      <Service/>
      <Download/>
      {/* <Displaying/> */}
      <Display/>
      <Midtop/>
      <Middly/>
      <Footerpaggy/>
      
      
    </div>
  )
}

export default View
