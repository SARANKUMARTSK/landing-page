import React from 'react'

function Content({contentData}) {
   { console.log(contentData)}
  return <>    
      <div className={`row g-0 ${contentData.isReverse?"":"reverse"}`}>
          <div className="col-lg-6  text-white showcase-img" style={{backgroundImage: `url("${contentData.image}")`}}></div>
          <div className="col-lg-6  my-auto showcase-text">
              <h2>{contentData.title}</h2>
              <p className="lead mb-0">{contentData.para}</p>
          </div>
      </div>
                
  </>
}

export default Content