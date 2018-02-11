import React from 'react'
import facebook from '../../static/media/icons/facebook.svg';
import youtube from '../../static/media/icons/youtube3.svg';
import instagram from '../../static/media/icons/instagram.svg';
import spotify from '../../static/media/icons/spotify.svg';
import bandcamp from '../../static/media/icons/bandcamp.svg';
import apple from '../../static/media/icons/apple.svg';

const Footer = (props) => (
  <div>
    <nav className="footer">
      <ul className="social">
        <li className="social__item">
          <a target="_blank"
             href="https://www.facebook.com/Lavergeband/"
             title="Facebook">
            <img src={facebook} alt="Facebook"/>
          </a>
        </li>
        <li className="social__item">
          <a target="_blank"
             href="https://www.youtube.com/channel/UCoZ9-g-GvPzX52xxbkA6mmA"
             title="YouTube">
            <img src={youtube} alt="YouTube"/>
          </a>
        </li>
        <li className="social__item">
          <a target="_blank"
             href="https://www.instagram.com/laverge_band/"
             title="Instagram">
            <img src={instagram} alt="Instagram"/>
          </a>
        </li>
        <li className="social__item">
          <a target="_blank"
             href="https://open.spotify.com/artist/7GcUN4O1EbffUOAij7xzND"
             title="Spotify">
            <img src={spotify} alt="Spotify"/>
          </a>
        </li>
        <li className="social__item">
          <a target="_blank"
             href="https://itunes.apple.com/us/album/handle-this/1299818828"
             title="Itunes">
            <img src={apple} alt="Itunes"/>
          </a>
        </li>
      </ul>
    </nav>
  </div>
)

export default Footer
