import React from 'react'
import Link from 'gatsby-link'
import Menu from '../layouts/menu'

const Gigs = () => (
  <div>
    <Menu />
    <script type="text/javascript"
      charSet="utf-8"
      src="https://widget.bandsintown.com/main.min.js">
    </script>
    <a
      className="bit-widget-initializer"
      data-artist-name="laverge"
      data-display-local-dates="false"
      data-display-past-dates="true"
      data-auto-style="false"
      data-text-color="#FFFFFF"
      data-link-color="#888888"
      data-popup-background-color="rgba(0,0,0,0)"
      data-background-color="rgba(0,0,0,0)"
      data-display-limit="15"
      data-link-text-color="#FFFFFF">
    </a>
  </div>
)

export default Gigs
