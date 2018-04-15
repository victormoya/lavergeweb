import React from 'react';

class Menu extends React.PureComponent {

  render () {
    return (
      <div className="only-desktop">
        <ul className="list">
          <li className="list__item">
            <a href="/welcome" className="line"></a>
            <a href="/welcome" className="link">Home</a>
          </li>
          <li className="list__item">
            <a href="/gigs" className="line"></a>
            <a href="/gigs" className="link">Gigs</a>
          </li>
          <li className="list__item">
            <a target="_blank" href="http://carcosarecords.bigcartel.com/" className="line"></a>
            <a target="_blank" href="http://carcosarecords.bigcartel.com/" className="link">Shop</a>
          </li>
          <li className="list__item">
            <a href="/contact" className="line"></a>
            <a href="/contact" className="link">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu
