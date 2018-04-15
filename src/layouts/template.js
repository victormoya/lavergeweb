import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import logo from '../../static/media/logo-white.png'
import Menu from '../components/menu';
import MenuMobile from '../components/menuMobile';
import Footer from '../components/footer';
import location from 'react-router';

import '../../static/scss/all.scss'

const TemplateWrapper = (props) => (
  <div>
    <Helmet
      title="Laverge | Handle This"
      meta={[
        { name: 'description', content: 'Laverge' },
        { name: 'keywords', content: 'laverge, rock' },
      ]}
    />
    <div className="wrapper">
      <div className="header">
        <Link to="/" className="logo">
          <img src={logo} alt="LAVERGE" />
        </Link>
      </div>
      <Menu />
      <MenuMobile />
      <div className="content">
        {props.children}
      </div>
      <Footer />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
