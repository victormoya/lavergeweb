import React from 'react'
import Link from 'gatsby-link'

const GigsPage = () => (
  <div className="page-container">
    <nav class="vertical">
      <ul>
        <li>
          <Link to="/gigs/"></Link>
        </li>
         <li>
           <Link to="/music/"></Link>
        </li>
         <li>
           <Link to="/contact/"></Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default GigsPage
