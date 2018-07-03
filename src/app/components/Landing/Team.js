import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import FancyButton from './FancyButton';
import styles from './Team.c.scss';

class Team extends React.Component {
  render() {
    return (
      <Scroll.Element name="community">
        <Block noseparator className={styles.block}>
          <BlockHeader title="COMMUNITY" />
          <Row center="xs">
            <Col xs={12} md={12}>
              <h2>COMMUNITY</h2>
            </Col>
          </Row>
          <Row center="xs">
            <Col xs={12} md={6} className={styles.column}>
              <Link to="/">
                <img className={styles.pictureVol} src="/images/junctionx-globe-black.png" alt="Logo" />
              </Link>
              <h1>Partnership</h1>
              <p>
                Are you seeking a way to showcase your company among young professionals? Look no more! Contact us and
                we would gladly get back to you with our proposal, tailored to your company’s needs.
              </p>
              <FancyButton to="mailto:hanoi@hackjunction.com" title="Contact us" />
            </Col>
            <Col xs={12} md={6} className={styles.column}>
              <Link to="/">
                <img className={styles.pictureVol} src="/images/junctionx_globe.png" alt="Logo" />
              </Link>
              <h1>Volunteer</h1>
              <p>
                If you think you would fit into our team perfectly, drop us a message! Join us and let’s make
                JUNCTIONxHanoi unforgettable together!

              </p>
              <FancyButton to="mailto:hanoi@hackjunction.com" title="Apply here" />
            </Col>
          </Row>
        </Block>
      </Scroll.Element>
    );
  }
}

export default Team;
