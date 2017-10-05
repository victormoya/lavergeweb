import React from 'react'
import Link from 'gatsby-link'

const AlbumsPage = () => (
  <div>
    <nav className="menu">
      <ul>
        <li><a href="/">Welcome</a></li>
        <li><a href="/listen">Listen</a></li>
        <li><a href="/gigs">Attend</a></li>
        <li><a href="/contact">Talk</a></li>
      </ul>
    </nav>
    <div className="album">
      <iframe style={{
        border: '0',
        width: '350px',
        height: '753px'
      }} src="https://bandcamp.com/EmbeddedPlayer/album=3880804174/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/" seamless>
        <a href="http://laverge.bandcamp.com/album/handle-this">Handle This by Laverge</a>
      </iframe>
    </div>
  </div>
)

export default AlbumsPage
