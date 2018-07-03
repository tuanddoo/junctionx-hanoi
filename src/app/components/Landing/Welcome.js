import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';
import styles from './Welcome.c.scss';
import Navigation from './Navigation';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import FancyButton from './FancyButton'

// Renderer callback with condition
const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <span />;
  } else {
    // Render a countdown
    return (
      <div>
        <Row center="xs">
          <Col xs={3} sm={1} md={1}>
            {days}
          </Col>
          <Col xs={3} sm={1} md={1}>
            {hours}
          </Col>
          <Col xs={3} sm={1} md={1}>
            {minutes}
          </Col>
          <Col xs={3} sm={1} md={1}>
            {seconds}
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={3} sm={1} md={1}>
            <span>days</span>
          </Col>
          <Col xs={3} sm={1} md={1}>
            <span>hours</span>
          </Col>
          <Col xs={3} sm={1} md={1}>
            <span>minutes</span>
          </Col>
          <Col xs={3} sm={1} md={1}>
            <span>seconds</span>
          </Col>
        </Row>
      </div>
    );
  }
};

const Welcome = props => (
  <div>
    <Scroll.Element name="welcome">
      <Block noseparator contentClassName={styles.blockContentVideo2}>
        <div>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://staging.hackjunction.com/wp-content/uploads/2017/08/front.jpg"
            className={styles.video}
          >
            <source
              src="https://staging.hackjunction.com/wp-content/uploads/2017/08/vidmp4.mp4"
              type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;"
            />
            <source
              src="https://staging.hackjunction.com/wp-content/uploads/2017/08/vidwebm.webm"
              type="video/webm; codecs=&quot;vp8, vorbis&quot;"
            />
          </video>
          <div className={styles.videoOverlay} />

          <Row className="junction_welcome" middle="xs" center="xs">
            <Col xs={12} md={12} className={styles.welcome}>
              <img src="/images/JUNCTIONx_logos-emblem-white.png" alt="" className={styles.welcomeImage} />
            </Col>
          </Row>
          <Row className="junction_welcome" middle="xs" center="xs">
            <Col xs={12} md={12} first="md" className="start-md">
              <h1 className={styles.h1Stuff}>EUROPE’S BIGGEST HACKATHON</h1>
              <h1 className={styles.h1Stuff}>
                IS COMING TO <span className={styles.h1Accent}>HANOI</span>
              </h1>
              <p className={styles.content2header}> 2018 </p>
            </Col>
            <Col xs={12} md={12} />
          </Row>
          <BlockHeader className={styles.subHeader} title={props.header2.toUpperCase()} />
          <div className={styles.countdown}>
            <Countdown date={Date.parse('2018-12-31 23:59:59')} renderer={countdownRenderer} />
          </div>
          <Row className={styles.linkRow} center="xs">
            <Col xs={12} sm={6} md={3}>
              <FancyButton to="https://www.facebook.com/thetechembassy/" title="Keep me updated!" isLight={true} />
            </Col>
          </Row>
          <br />
        </div>
      </Block>
    </Scroll.Element>
  </div>
);

Welcome.propTypes = {
  header1: PropTypes.string,
  header2: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string
};
export default Welcome;
