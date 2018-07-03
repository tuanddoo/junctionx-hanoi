import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import styles from './SimpleLinkButton.c.scss';

const NavigationButton = props => (
  <Col xs={12} sm={6} md={3}>
    <a href={props.to}>
      <div className={styles.linkButton}>{props.title}</div>
    </a>
  </Col>
);
NavigationButton.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string
};

class SimpleLinkButton extends React.Component {
  render() {
    return (
      <Row className={styles.linkRow} center="xs">
        <NavigationButton to={this.props.to} title={this.props.title} />
      </Row>
    );
  }
}

SimpleLinkButton.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string
};
export default SimpleLinkButton;
