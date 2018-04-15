import React from 'react'
import Template from '../layouts/template';

class Gigs extends React.Component {

  componentWillMount() {
    if(typeof document !== "undefined") {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      // script.src = '//widget.bandsintown.com/main.min.js';
      script.src = '//widget.songkick.com/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }

  render () {
    return (
      <div>
        <Template>
          <div className="shows">
            <a
              href="http://www.songkick.com/artists/8348243"
              className="songkick-widget"
              data-theme="dark"
              data-track-button="on"
              data-font-color="#ffffff"
              data-detect-style="true"
              data-background-color="transparent">
            </a>
          </div>
        </Template>
      </div>
    )
  }
}

export default Gigs

// <a
//   className="bit-widget-initializer"
//   data-artist-name="laverge"
//   data-language="en"
//   data-font="Concorde"
//   data-display-local-dates="false"
//   data-display-past-dates="true"
//   data-auto-style="false"
//   data-text-color="#FFFFFF"
//   data-link-color="#888888"
//   data-popup-background-color="rgba(0,0,0,0)"
//   data-background-color="rgba(30, 34, 46, 0.30)"
//   data-display-limit="15"
//   data-link-text-color="#FFFFFF">
// </a>
