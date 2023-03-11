import React from 'react'
import "./download.css"
import Page2 from "../../assests/page2.png"
import Page21 from "../../assests/page21.png"
import LINE from "../../assests/line.png"
import Arrow from "../../assests/arrowfile.png"

function download() {
  return (
    <div className='container labor'>
        <div className='row'>
            <div className='col-sm-12 col- md-12 col-lg-6'>
                <div className='down-section-img'>
                <img src={Page2} alt="" className='www'/>
                </div>
            </div>
            <div className='col-sm-12 col- md-12 col-lg-6 mt-5'>
                <div className='down-section-sec'>
                    <h2>Leading healthcare providers</h2>
                    <img src={LINE} alt="" className='down-img'/>
                    <p>Trafalgar provides progressive, and affordable <br/> healthcare, accessible on mobile and online for <br/> everyone. To us, it’s not just work. We take pride <br/> in the solutions we deliver</p>

                    <div className='btnnn'>
                        <button className='btn-download'>Learn more</button>
                     </div> 
                </div>
            </div>
        </div>

        <div className='row sharp'>

        <div className='col-sm-12 col- md-12 col-lg-6 mt-5'>
                <div className='down-section-sec'>
                    <h2>Download our <br/> mobile apps</h2>
                    <img src={LINE} alt="" className='down-img'/>
                    <p>Our dedicated patient engagement app <br/> and 
                    web portal allow you to access <br/> information instantaneously (no <br/> tedeous form, long calls, 
                     or <br/> administrative hassle) and securely</p>
                     <div className='btnnn'>
                        <button className='btn-download'>Download <img src={Arrow} alt=""></img></button>
                     </div>
                </div>
            </div>
            <div className='col-sm-12 col- md-12 col-lg-6'>
                <div className='down-section-img'>
                <img src={Page21} alt="" className='www'/>
                </div>
            </div>

        </div>
    </div> 
  )
}

export default download

