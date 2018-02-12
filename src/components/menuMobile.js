import React from 'react';
import Modal from 'react-modal';

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

class MenuMobile extends React.Component {
  constructor () {
    super();
    this.state = {
      showMenu: false
    };
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  openMenu () {
    this.setState({ showMenu: true });
  }
  closeMenu () {
    this.setState({ showMenu: false });
  }
  render() {
    return (
      <div className="menu-mobile">
        <div className="menu-icon" onClick={this.openMenu}>
          <span className="menu-icon__line" />
          <span className="menu-icon__line" />
          <span className="menu-icon__line" />
        </div>
        <Modal isOpen={this.state.showMenu} style={modalStyles}>
          <div className="menu-mobile__list">
            <a onClick={this.closeMenu} className="close" />
            <a href="/welcome" className="link">Home</a>
            <a href="/gigs" className="link">Gigs</a>
            <a target="_blank" href="http://carcosarecords.bigcartel.com/" className="link">Shop</a>
            <a href="/contact" className="link">Contact</a>
          </div>
        </Modal>
      </div>
    )
  }
};

export default MenuMobile
