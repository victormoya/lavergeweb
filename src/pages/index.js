import React from 'react'
import Link from 'gatsby-link'
import video from '../../static/media/smoke.mp4'
import poster from '../../static/media/poster.jpg'


const IndexPage = () => (
  <div>
    <div className="banner">
      <iframe
        width="560"
        height="315"
        frameBorder="0"
        src="https://www.youtube.com/embed/YChQEz4tj5s?controls=0&showinfo=0&rel=0&autoplay=1&loop=1"
        allowFullScreen
      >
      </iframe>
      <Link to="/listen">ENTER</Link>
    </div>
  </div>
)

export default IndexPage
