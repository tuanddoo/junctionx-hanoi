import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import styles from './Footer.c.scss';

class Footer extends React.Component {
  render() {
    return (
      <Scroll.Element name="contact">
        <Block className={styles.block}>
          <BlockHeader title="TEAM" />

          <Row center="xs">
            <Col xs={12}>
              <a href="mailto:hanoi@hackjunction.com">hanoi@hackjunction.com</a>
              <p>Follow us on Social Media!</p>
              <a href="https://www.facebook.com/thetechembassy/" className={styles.logoTitle}>
                <img className={styles.picture} src="/images/facebook_logo.png" alt="Logo" />&nbsp;Facebook
              </a>
              <a href="https://www.instagram.com/thetechembassy/" className={styles.logoTitle}>
                <img className={styles.picture} src="/images/instagram_logo.png" alt="Logo" />&nbsp;Instagram
              </a>
              <p>Developed by <a href="https://geekclub.hu/">Corvinus Geek Club</a></p>
            </Col>
          </Row>
        </Block>
      </Scroll.Element>
    );
  }
}

export default Footer;
