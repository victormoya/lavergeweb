import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'

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
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
