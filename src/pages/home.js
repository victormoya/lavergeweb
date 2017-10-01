import React from 'react'
import Link from 'gatsby-link'

const HomePage = () => (
  <div className="page-container">
    <nav className="vertical">
      <ul>
        <li>
          <Link to="/gigs/">Gigs</Link>
        </li>
         <li>
           <Link to="/music/">Music</Link>
        </li>
        <li>
          <Link to="/photos/">Photos</Link>
        </li>
         <li>
           <Link to="/contact/">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default HomePage
