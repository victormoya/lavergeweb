import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import PlayButton from '../components/playButton'
import logo from '../../static/media/logo-white.png'
import Modal from 'react-modal'

import '../../static/scss/all.scss'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : '#000',
    border: 'none',
    borderRadius: '0'
  },
  overlay : {
    backgroundColor       : 'rgba(0,0,0,0.71)'
  }
};


class IndexPage extends React.Component {

  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
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
        <a onClick={this.handleOpenModal}>
          <PlayButton />
        </a>
        <Modal
          isOpen={this.state.showModal}
          shouldCloseOnOverlayClick={true}
          style={customStyles}
        >
        <a onClick={this.handleCloseModal} className="close" />
          <iframe
            width="560"
            height="315"
            frameBorder="0"
            src="https://www.youtube.com/embed/YChQEz4tj5s?controls=0&showinfo=0&rel=0&autoplay=1&loop=1"
            allowFullScreen
          />
        </Modal>
      </div>
    )
  }
}

export default IndexPage
