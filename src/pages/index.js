import React from 'react'
import Link from 'gatsby-link'
import heros from '../media/heros.jpg'

const IndexPage = () => (
  <div className="hero">
    <Link to="/home/">
      <img src={heros} alt="Handle This"/>
    </Link>
  </div>
)

export default IndexPage
