import React from 'react';

const Menu = props => (
  <div className="only-desktop">
    <ul className="list">
      { location.pathname === '/welcome' ?
        <li className="list__item active">
          <span className="line"></span>
          <span className="link">Home</span>
        </li>
        :
        <li className="list__item">
          <a href="/welcome" className="line"></a>
          <a href="/welcome" className="link">Home</a>
        </li>
      }
      { location.pathname === '/gigs' ?
        <li className="list__item active">
          <span href="/gigs" className="line"></span>
          <span href="/gigs" className="link">Gigs</span>
        </li>
        :
        <li className="list__item">
          <a href="/gigs" className="line"></a>
          <a href="/gigs" className="link">Gigs</a>
        </li>
      }
      <li className="list__item">
        <a target="_blank" href="http://carcosarecords.bigcartel.com/" className="line"></a>
        <a target="_blank" href="http://carcosarecords.bigcartel.com/" className="link">Shop</a>
      </li>
      { location.pathname === '/contact' ?
        <li className="list__item active">
          <span href="/contact" className="line"></span>
          <span href="/contact" className="link">Contact</span>
        </li>
        :
        <li className="list__item">
          <a href="/contact" className="line"></a>
          <a href="/contact" className="link">Contact</a>
        </li>
      }
    </ul>
  </div>
)

export default Menu
