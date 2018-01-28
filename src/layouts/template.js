import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import logo from '../../static/media/logo-white.png'

import '../../static/scss/all.scss'

const TemplateWrapper = () => (
  <div>
    <Helmet
      title="Laverge | Handle This"
      meta={[
        { name: 'description', content: 'Laverge' },
        { name: 'keywords', content: 'laverge, rock' },
      ]}
    />
    <div>
      <Link to="/" className="logo">
        <img src={logo} alt="LAVERGE" />
      </Link>
      <Menu />
      {children()}
      <Footer />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
