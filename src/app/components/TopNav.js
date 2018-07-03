import React from 'react';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
import styles from './TopNav.c.scss';

class TopNav extends React.Component {
  constructor() {
    super();
    window.scrollToTopDesktop = this.scrollToTop;
  }

  scrollToTop = () => {
    Scroll.animateScroll.scrollToTop();
  };

  render() {
    return (
      <div className={styles.header_wrapper}>
        <header className={styles.header}>
          <Link to="/">
            <img className={styles.junction_logo} src="/images/JUNCTIONxBudapest-logo-wordmark-black.png" alt="Logo" />
          </Link>
          <div>
            <nav className={styles.site_nav}>
              <ul>
                <li>
                  <Link onClick={scrollToTopDesktop} to="/">
                    HOME
                  </Link>
                </li>
                <li>
                  <Scroll.Link activeClass="active" to="about" offset={-30} spy smooth duration={500}>
                    ABOUT
                  </Scroll.Link>
                </li>
                <li>
                  <Scroll.Link activeClass="active" to="newsletter" offset={-30} spy smooth duration={500}>
                    NEWSLETTER
                  </Scroll.Link>
                </li>
                <li>
                  <Scroll.Link activeClass="active" to="community" offset={-30} spy smooth duration={500}>
                    COMMUNITY
                  </Scroll.Link>
                </li>
                <li>
                  <Scroll.Link activeClass="active" to="contact" offset={-30} spy smooth duration={500}>
                    CONTACT
                  </Scroll.Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default TopNav;
