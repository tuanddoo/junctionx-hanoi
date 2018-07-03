import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import styles from './BlockHeader.c.scss';

const BlockHeader = ({ className, title, children: description }) => (
  <div className={styles.top}>
    <Grid fluid>
      <Row>
        {!!description && (
          <Col xs={12} md={9}>
            {description}
          </Col>
        )}
      </Row>
    </Grid>
  </div>
);

BlockHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node
};

export default BlockHeader;
