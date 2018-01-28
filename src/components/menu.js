import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
  <div>
    <ul className="menu">
      <li className="menu__item">
        <span className="line"></span>
        <a href="/welcome">Home</a>
      </li>
      <li className="menu__item">
        <span className="line"></span>
        <a href="/listen">Gigs</a>
      </li>
      <li className="menu__item">
        <span className="line"></span>
        <a href="/gigs">Shop</a>
      </li>
      <li className="menu__item">
        <span className="line"></span>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
)

export default Menu
