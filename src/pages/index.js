import React from 'react'
import Link from 'gatsby-link'
import herosvideo from '../../static/media/heros.mp4'


const IndexPage = () => (
  <div className="hero">
    <Link to="/listen">
      <video loop autoPlay>
        <source src={herosvideo} type="video/mp4" />
      </video>
    </Link>
  </div>
)

export default IndexPage
