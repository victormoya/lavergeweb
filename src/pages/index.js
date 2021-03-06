import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import PlayButton from '../components/playButton';
import logo from '../../static/media/logo-white.png';
import Modal from 'react-modal';
import EnterButton from '../components/enterButton';

import '../../static/scss/all.scss';

const modalStyles = {
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
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'}
          ]}
          />
        <div className="logo">
          <img src={logo} alt="LAVERGE" />
        </div>
        <div onClick={this.handleOpenModal}>
          <PlayButton />
        </div>
        <div className="enter-button">
          <Link to="/welcome">
            <EnterButton text="Enter site" />
          </Link>
        </div>
        <Modal
          isOpen={this.state.showModal}
          shouldCloseOnOverlayClick={true}
          style={modalStyles}
        >
        <a onClick={this.handleCloseModal} className="close" />
        <div className="video-wrapper">
          <iframe
            width="1280"
            height="720"
            frameBorder="0"
            src="https://www.youtube.com/embed/YChQEz4tj5s?controls=0&showinfo=0&rel=0&autoplay=1&loop=1"
            />
        </div>
        </Modal>
      </div>
    )
  }
}

export default IndexPage
