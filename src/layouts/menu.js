import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
  <div>
    <nav className="menu">
      <ul>
        <li>
          {
            props.active === "listen" ?
            <span className="active">Album</span>
            :
            <a href="/listen">Album</a>
          }
        </li>
        <li>
          {
            props.active === "gigs" ?
            <span className="active">Dates</span>
            :
            <a href="/gigs">Dates</a>
          }
        </li>
      </ul>
    </nav>
  </div>
)

export default Menu
