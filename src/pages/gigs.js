import React from 'react'
import Link from 'gatsby-link'
import Menu from '../layouts/menu'

class Gigs extends React.Component {

  componentWillMount() {
    if(typeof document !== "undefined") {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//widget.bandsintown.com/main.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }

  render () {
    return (
      <div>
        <Menu active="gigs"/>
        <div className="shows">
          <a
            className="bit-widget-initializer"
            data-artist-name="laverge"
            data-language="en"
            data-font="Concorde"
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
      </div>
    )
  }
}

export default Gigs


// <a
//   href="http://www.songkick.com/artists/8348243"
//   className="songkick-widget"
//   data-theme="light"
//   data-other-artists="on"
//   data-track-button="on"
//   data-detect-style="true"
//   data-background-color="transparent">
//   Laverge tour dates
// </a>
// <script src="https://widget.songkick.com/widget.js"></script>
