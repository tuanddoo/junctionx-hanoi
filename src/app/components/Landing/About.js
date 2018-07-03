import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import styles from './About.c.scss';
import Block from '../viewBlocks/Block';
import SimpleLinkButton from './SimpleLinkButton';
import FancyButton from './FancyButton'

const About = () => (
  <Scroll.Element name="about">
    <Block className={styles.block}>
      <Row center="xs">
        <Col xs={12} md={12}>
          <h2>ABOUT</h2>
          <br />
        </Col>
      </Row>
      <Row middle="xs">
        <Col xs={12} md={6}>
          <h3>HACK THE FUTURE</h3>
          <p>
            Europe’s biggest hackathon is now coming to Hanoi!<br />
            <br />
            JUNCTIONxHanoi is an event where developers, designers, or talents of any field can compete in diverse
            teams in order to build and present their revolutionary ideas. International hackers from different
            backgrounds form teams to work on cutting edge technologies and to solve real business problems coming
            straight from the business world.
          </p>
          <br />
          <h3>AN EXPERIENCE LIKE NO OTHER</h3>
          <p>
            Junction is a meeting point for thousands of developers, designers, and entrepreneurs from around the world.<br />
            <br />
            Born and raised in Helsinki, Finland, JUNCTION brings hackers together for a 48-hour contest that is unlike
            any other.
          </p>
        </Col>
        <Col className={styles.embedContainer} xs={8} md={6}>
          <Row>
          <iframe
            className={styles.youtubeEmbed}
            src="https://www.youtube.com/embed/A0K5KFKKhYY"
            title="Junction 2017"
            allowFullScreen
            frameBorder="0"
          />
          </Row>
          <Row className={styles.linkRow} center="xs">
            <Col xs={12} sm={12} md={12}>
              <FancyButton to="https://blog.hackjunction.com/pastevents/home" title="CHECK OUT PAST EVENTS!" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default About;
