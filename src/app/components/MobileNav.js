import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
import Media from 'react-media';
import styles from './MobileNav.c.scss';

class MobileNav extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false
    };
    window.openNavigationMenu = this.openMenu;
    window.closeNavigationMenu = this.closeMenu;
    window.scrollToTopMobile = this.scrollToTop;
  }

  openMenu = () => {
    this.setState({ isMenuOpen: true });
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  scrollToTop = () => {
    this.setState({ isMenuOpen: false });
    Scroll.animateScroll.scrollToTop();
  };

  menuStateChanged = menuState => {
    this.setState({ isMenuOpen: menuState.isOpen });
  };

  render() {
    return (
      <Media query="(max-width: 900px)">
        <Menu
          styles={{
            bmMenuWrap: {
              top: '0px'
            }
          }}
          pageWrapId="junction_website"
          outerContainerId="app"
          right
          onStateChange={this.menuStateChanged}
          isOpen={this.state.isMenuOpen}
          menuClassName={styles.burgerMenuOverride}
          burgerBarClassName={styles.burgerBarOverride}
          overlayClassName={styles.burgerOverlayOverride}
        >
          <nav className={styles.site_nav}>
            <ul>
              <li>
                <Link onClick={scrollToTopMobile} to="/">
                  HOME
                </Link>
              </li>
              <li>
                <Scroll.Link onClick={closeNavigationMenu} to="about" offset={-30} spy smooth duration={500}>
                  ABOUT
                </Scroll.Link>
              </li>
              <li>
                <Scroll.Link onClick={closeNavigationMenu} to="newsletter" offset={-30} spy smooth duration={500}>
                  NEWSLETTER
                </Scroll.Link>
              </li>
              <li>
                <Scroll.Link onClick={closeNavigationMenu} to="community" offset={-30} spy smooth duration={500}>
                  COMMUNITY
                </Scroll.Link>
              </li>
              <li>
                <Scroll.Link onClick={closeNavigationMenu} to="contact" offset={-30} spy smooth duration={500}>
                  CONTACT
                </Scroll.Link>
              </li>
            </ul>
          </nav>
        </Menu>
      </Media>
    );
  }
}

export default MobileNav;
