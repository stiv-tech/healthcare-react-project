import React from 'react'
import "./midcontent.css"
import Card1 from "../../assests/mid-image1.png"
import Card2 from "../../assests/mid-image2.png"
import Card3 from "../../assests/mid-image3.png"
import Vector from "../../assests/Vector11.png"

function Midcontent() {
  return (
    <div className='container midcon'>
        <div className='row'>
        <div className='col-sm-12 col- md-12 col-lg-4  '>
            <div className=''>
                <img src={Card1} alt="" className='mid-img-con'/>
            </div>
            <div className='middy-con'>
            <h3 className='mid-con-page'>Disease detection, check <br/> up in the laboratory</h3>
            <p className='mid-con-para'>In this case, the role of the health <br/> laboratory is very important to do <br/> a disease detection...</p>
            <p className='mid-con-last'>Read more <img src={Vector} alt=""></img></p>
            </div>

        </div>
        <div className='col-sm-12 col- md-12 col-lg-4  '>
        <div className=''>
                <img src={Card2} alt="" className='mid-img-con'/>
            </div>
            <div className='middy-con'>
            <h3 className='mid-con-page'>Herbal medicines that are <br/> safe for consumption</h3>
            <p className='mid-con-para'>Herbal medicine is very widely used at <br/> this time because of its very good for <br/> your health...</p>
            <p className='mid-con-last'>Read more <img src={Vector} alt=""></img></p>
            </div>
            
        </div>
        <div className='col-sm-12 col- md-12 col-lg-4  '>
        <div className=''>
                <img src={Card3} alt="" className='mid-img-con'/>
            </div>
            <div className='middy-con'>
               <h3 className='mid-con-page'>Natural care for healthy <br/> facial skin</h3>
                <p className='mid-con-para'>A healthy lifestyle should start from <br/> now and also for your skin health. <br/> There are some....</p>
                <p className='mid-con-last'>Read more <img src={Vector} alt=""></img></p>
            </div>
            
        </div>
        </div>
        
         <div className='last-btn'>
            <button className='btn-mid'>View all</button>
         </div>
    </div>
  )
}

export default Midcontent
