import React from "react";
function Product(props) {
return (
    <div className="container carol mt-5">
      <div className="card ">
      <h2>{props.heading}</h2>
      <img className="product--image" src={props.url} alt="product image" />

     <div className="row">
      <div className='col-sm-12 col-md-12 col-lg-6'>
        <div className="differ">
          <div>
            <img className="product--image2" src={props.url2} alt="product image" />
          </div>
           <div className="mt-5">
             <h2>{props.name}</h2>
              <p>{props.description}</p>
          </div>
        </div>
      
    </div>
    <div className='col-sm-12 col-md-12 col-lg-6 mt-5'>
      <p>{props.definition}</p>
   </div>
 </div>
</div>
</div>
);
}

export default Product
