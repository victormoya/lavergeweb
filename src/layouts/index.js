import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../../static/scss/index.scss'
import video from '../../static/media/smoke.mp4'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Laverge - Handle This"
      meta={[
        { name: 'description', content: 'Laverge' },
        { name: 'keywords', content: 'laverge, rock' },
      ]}
    />
    <div>
      <video className="video-bg" loop autoPlay playsInline>
        <source src={video} type="video/mp4" />
      </video>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
