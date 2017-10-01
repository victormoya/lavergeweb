import React from 'react'
import Link from 'gatsby-link'
import heros from '../media/heros.jpg'

const IndexPage = () => (
  <div className="hero">
    <img src={heros} alt="Handle This"/>
      <Link to="/home/">
      <h1 className="hero__title">Handle This</h1>
    </Link>
  </div>
)

export default IndexPage
