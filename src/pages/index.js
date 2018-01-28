import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import PlayButton from '../components/playButton'
import logo from '../../static/media/logo-white.png'

import '../../static/scss/all.scss'

const IndexPage = () => {
  return (
    <div className="video-bg">
      <Helmet
        title="Laverge | Handle This"
        meta={[
          { name: 'description', content: 'Laverge' },
          { name: 'keywords', content: 'laverge, rock' },
        ]}
        />
        <Link to="/" className="logo">
          <img src={logo} alt="LAVERGE" />
        </Link>
        <PlayButton />
    </div>
  )
}

export default IndexPage
