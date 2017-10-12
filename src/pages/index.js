import React from 'react'
import Link from 'gatsby-link'
import video from '../../static/media/smoke.mp4'
import poster from '../../static/media/poster.jpg'


const IndexPage = () => (
  <div className="poster">
    <Link to="/listen">
      <img src={poster} />
    </Link>
  </div>
)

export default IndexPage
