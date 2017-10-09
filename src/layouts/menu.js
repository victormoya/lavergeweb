import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
  <div>
    <nav className="menu">
      <ul>
        <li><a href="/">Welcome</a></li>
        <li>
          {
            props.active === "listen" ?
            <span className="active">Listen</span>
            :
            <a href="/listen">Listen</a>
          }
        </li>
        <li>
          {
            props.active === "gigs" ?
            <span className="active">Attend</span>
            :
            <a href="/gigs">Attend</a>
          }
        </li>
      </ul>
    </nav>
  </div>
)

export default Menu
