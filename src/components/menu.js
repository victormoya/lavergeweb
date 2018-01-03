import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
  <div>
    <nav className="menu">
      <ul>
        <li className="menu__item">
          <span className="line"></span>
          <a href="/listen">Photos</a>
        </li>
        <li className="menu__item">
          <span className="line"></span>
          <a href="/listen">Album</a>
        </li>
        <li className="menu__item">
          <span className="line"></span>
          <a href="/gigs">Dates</a>
        </li>
        <li className="menu__item">
          <span className="line"></span>
          <a href="/gigs">Press</a>
        </li>
      </ul>
    </nav>
  </div>
)

export default Menu
