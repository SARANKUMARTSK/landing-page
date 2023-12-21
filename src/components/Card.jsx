import React from 'react'

function Card({cardData}) {
    return <>
        <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex"><i className={`${cardData.icon} m-auto text-primary`}></i></div>
                  <h3>{cardData.heading}</h3>
                <p className="lead mb-0">{cardData.content}</p>
            </div>
        </div>
    </>
}

export default Card