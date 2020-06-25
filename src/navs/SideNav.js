import React from 'react';
import { Nav, Navbar, Button, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Collapse from 'react-bootstrap/Collapse'
import * as Icons from '../assets/icons/icons'
import './SideNav.css'

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false, // whether burger menu is open
      width: window.innerWidth, // width of view
      height: window.innerHeight, // height of view
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.setOpen = this.setOpen.bind(this);
    this.setClick = this.setClick.bind(this);
  };

  setOpen(newstate) { // sets burger menu to opposite of open or closed
    var truestate;
    if (this.state.open === newstate) {
      truestate = !newstate ;
    } else {
      truestate = newstate
    };
    if (truestate) {
      document.addEventListener('click',this.setClick,true);
    }
    else {
      document.removeEventListener('click',this.setClick,true);
    };
    this.setState({ open: truestate });
  };

  setClick(e) {
    const container = this._element;
    if (e.target !== container && !container.contains(e.target)) {
      this.setOpen(false)
    }
  };

  componentDidMount() {
    this.updateWindowDimensions(); // mounts current window state and updates whether navbar should be collapsed or not
    window.addEventListener('resize', this.updateWindowDimensions);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  };

  updateWindowDimensions() {
    if (this.state.width > 767 && window.innerWidth <= 767) { // detect state change between large -> smIcons and collapse nav
      this.setState({ open: false });
    }
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (this.state.width > 767) {
      this.setState({ open: true });
    }
  };

  render() {
    return (
      <div ref={(c)=> (this._element = c)}>
        <Navbar bg="--main-nav-color-lt" expand="md" fixed="top" className="side-nav" onToggle={this.setOpen}>
        <Navbar.Toggle className="side-nav-toggle" aria-controls="responsive-navbar-nav"/>
            <Nav className="side-nav-align">
              <Collapse id="responsive-navbar-nav" in={this.state.open}>
                <div id="side-nav-collapse-container">
                <Nav className="flex-column">
                  <LinkContainer id="0" activeClassName="side-nav-item" exact to="/">
                    <Nav.Link>
                      <Icons.ico1/>
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer id="1" activeClassName="side-nav-item" exact to="/dashboard">
                    <Nav.Link>
                      <Icons.ico2/>
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer id="2" activeClassName="side-nav-item" exact to="/controls">
                    <Nav.Link>
                      <Icons.ico3/>
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
                </div>
              </Collapse>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default SideNav;

// <Button
//   onClick={() => this.setOpen(!this.state.open)}
//   aria-controls="example-collapse-text"
//   aria-expanded={this.state.open}
// >
//   click
// </Button>
