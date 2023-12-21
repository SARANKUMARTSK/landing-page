import React from 'react'

function Testimonial({testData}) {
  return <>
    <div className="col-lg-4">
      <div className="testimonial-item mx-auto mb-5 mb-lg-0">
        <img className="img-fluid rounded-circle mb-3" src={`${testData.img}`} alt="..." />
        <h5>{testData.name}</h5>
        <p className="font-weight-light mb-0">{testData.command}</p>
      </div>
   </div>                
                
  </>
}

export default Testimonial