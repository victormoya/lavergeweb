import React from 'react'
import Link from 'gatsby-link'

const PhotosPage = () => (
  <div className="page-container">
    <nav className="vertical">
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

export default PhotosPage
