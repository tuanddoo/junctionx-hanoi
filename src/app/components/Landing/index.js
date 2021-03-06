import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Welcome from './Welcome';
import Footer from './Footer';
import Header from './Header';
import About from './About';
import Team from './Team';
import Newsletter from './Newsletter';

class Landing extends React.Component {
  componentWillMount() {
    if (!this.props.event) this.props.dispatch({ type: 'GET_EVENT' });
  }
  render() {
    var e = this.props.event;
    console.log(e);
    return e ? (
      <div>
        <Header name={e.name} />
        <Welcome
          name={e.name}
          header1={e.header1}
          content1={e.content1}
          header2={e.header2}
          content2={e.content2}
          start_date={e.start_date}
          end_date={e.end_date}
          city={e.city}
          country={e.country}
        />
        <About />
        <Newsletter />
        <Team />
        <Footer email={e.email} external={e.external} external_url={e.external_url} />
      </div>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    event: state.event || null
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

Landing.propTypes = {
  event: PropTypes.object,
  dispatch: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
