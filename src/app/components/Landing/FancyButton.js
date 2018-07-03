import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import Block from '../viewBlocks/Block';
import BlockHeader from '../viewBlocks/BlockHeader';
import styles from './FancyButton.c.scss';

class FancyButton extends React.Component {
  render() {
    return (
      <a href={this.props.to} className={`${styles.button} ${this.props.isLight ? styles.buttonLight : 'notLight'}`}>{this.props.title.toUpperCase()}</a>
    );
  }
}

FancyButton.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  isLight: PropTypes.bool
};

export default FancyButton;
