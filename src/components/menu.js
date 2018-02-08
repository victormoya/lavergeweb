import React from 'react'

const Menu = (props) => (
  <div>
    <ul className="list">
      <li className={"list__item " + (location.pathname === '/welcome' ? 'active' : null)}>
        <span className="line"></span>
        <a href="/welcome">Home</a>
      </li>
      <li className={"list__item " + (location.pathname === '/gigs' ? 'active' : null)}>
        <span className="line"></span>
        <a href="/gigs">Gigs</a>
      </li>
      <li className="list__item">
        <span className="line"></span>
        <a href="#">Shop</a>
      </li>
      <li className={"list__item " + (location.pathname === '/contact' ? 'active' : null)}>
        <span className="line"></span>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
)

export default Menu
