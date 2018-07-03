import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Scroll from 'react-scroll';
import styles from './Newsletter.c.scss';
import Block from '../viewBlocks/Block';
import SimpleLinkButton from './SimpleLinkButton';

const Newsletter = () => (
  <Scroll.Element name="newsletter">
    <Block noseparator className={styles.block}>
      <Row center="xs">
        <Col xs={12} md={12}>
          <h2>NEWSLETTER</h2>
          <br />
        </Col>
      </Row>
      <Row middle="xs">
        <Col xs={12} md={6}>
          <h3>STAY IN THE KNOW</h3>
          <p>
            Don’t want to miss out on any update about JUNCTIONxHanoi?<br />
            <br />
            Let us take care of that!<br />
            <br />
            Sign up for our newsletter to never miss deadlines and most recent news.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <Row className={styles.linkRow} center="xs">
            <Col xs={12} sm={6} md={3}>
              <a>
                <div className={styles.linkButton}>Coming soon</div>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Block>
  </Scroll.Element>
);

export default Newsletter;
