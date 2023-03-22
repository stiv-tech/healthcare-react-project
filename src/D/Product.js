import React from 'react'
import CarImg from '../../src/assests/image 1.png'
import CarLine from '../../src/assests/Rectangle 17.png'

function Product() {
  return (
    <div className="container car-cont">
        <div className='car-sect mt-5'>
            <h3>What our customer are saying</h3>
            <div className="car-line">
                <img src={CarLine} alt="Line"/>
            </div>
            <div className="car-row">
                <div className="car-img">
                    <img src={CarImg} alt="Founder"/>
                </div>
                <div className="founder-details">
                    <h5>Edward Newgate</h5>
                    <p>Founder Circle</p>
                </div>
                <div className="founder-quote">
                    <p>“Our dedicated patient engagement app and <br />
                        web portal allow you to access information <br /> instantaneously (no tedeous form, long calls, <br />
                        or administrative hassle) and securely” 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
