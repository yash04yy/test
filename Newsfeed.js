import './Newsfeed.css'
import React from 'react'
import LineGraph from './LineGraph'
function Newsfeed() {
  return (
    <div className='newsfeed'>
      <div className="newsfeed__container">
        <div className="newsfeed__chartSection">
            <div className="newsfeed__portfolio">
                <h1>₹10358.34</h1>
                <p>+₹50.89 (+0.07%) Today</p>
            </div>
            <div className="newsfeed__chart">
                <LineGraph/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Newsfeed
