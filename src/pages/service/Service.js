import React from 'react'
import "./service.css"
import LINE from "../../assests/line.png"
import frame from "../../assests/Frame 1.png"
import frame2 from "../../assests/frame 2.png"
import frame3 from "../../assests/Frame 3.png"
import frame4 from "../../assests/Frame4.png"
import frame5 from "../../assests/Frame5.png"
import frame6 from "../../assests/Frame6.png"
function service() {
  return (
    <div className='container service'>
      <div className='service-main-section text-center'>
      {/* <div data-aos="zoom-in" data-aos-duration="3000"> */}
        <h2>Our services</h2>
        <img src={LINE} alt=""/>
        <p>We provide to you the best choices for you. Adjust it to your health needs and make sure your undergo treatment <br/> 
        with our highly qualified doctors you can consult with us which type of service
         is suitable for your health
        </p>
      {/* </div> */}
      </div>

     <div className='row'>
     <div className='col-sm-12 col-md-12 col-lg-1'></div>
      <div className='col-sm-12 col-md-12 col-lg-10'>
      <div className='row service'>
        <div className='col-sm-12 col-md-12 col-lg-4'>
            <div className='service-second-section'>
                <div className='service-section-img mb-3'>
                 <img src={frame} alt=""/>
                </div>
                <div className='service-section-body'>
                    <h3 className='mb-3'>Search doctor</h3>
                    <p>Choose your doctor from thousands <br/> of specialist, general, and trusted <br/> hospitals</p>
                </div>
                
            </div>
        </div>

        <div className='col-sm-12 col-md-12 col-lg-4'>
            <div className='service-second-section'>
                <div className='service-section-img mb-3'>
                 <img src={frame2} alt=""/>
                </div>
                <div className='service-section-body'>
                    <h3 className='mb-3'>Online pharmacy</h3>
                    <p>Buy  your medicines with our <br/> mobile application with a simple <br/> delivery system</p>
                </div>
                
            </div>
        </div>

        <div className='col-sm-12 col-md-12 col-lg-4'>
            <div className='service-second-section'>
                <div className='service-section-img mb-3'>
                 <img src={frame3} alt=""/>
                </div>
                <div className='service-section-body'>
                    <h3 className='mb-3'>Consultation</h3>
                    <p>Free consultation with our trusted <br/> doctors and get the best <br/> recomendations</p>
                </div>
                
            </div>
        </div>

      </div>

      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-4 mt-5'>
            <div className='service-second-section'>
                <div className='service-section-img mb-3'>
                 <img src={frame4} alt=""/>
                </div>
                <div className='service-section-body'>
                    <h3 className='mb-3'>Details info</h3>
                    <p>Free consultation with our trusted <br/> doctors and get the best <br/> recomendations</p>
                </div>
                
            </div>
        </div>

        <div className='col-sm-12 col-md-12 col-lg-4 mt-5'>
            <div className='service-second-section'>
                <div className='service-section-img mb-3'>
                 <img src={frame5} alt=""/>
                </div>
                <div className='service-section-body'>
                    <h3 className='mb-3'> Emergency care</h3>
                    <p>You can get 24/7 urgent care for <br/> yourself or your children and your <br/> lovely family</p>
                </div>
                
            </div>
        </div>

        <div className='col-sm-12 col-md-12 col-lg-4 mt-5'>
            <div className='service-second-section'>
                <div className='service-section-img mb-3'>
                 <img src={frame6} alt=""/>
                </div>
                <div className='service-section-body'>
                    <h3 className='mb-3'>Tracking</h3>
                    <p>Track and save your medical history <br/> and health data </p>
                </div>
                
            </div>
        </div>

      </div>
      </div>
      <div className='col-sm-12 col-md-12 col-lg-1'></div>
     </div>
      
      <div className='service-section-footer text-center'>
        <button className='service-btn'> learn more</button>
      </div>
    </div>
  )
}

export default service
