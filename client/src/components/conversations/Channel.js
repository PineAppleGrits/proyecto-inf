import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chat from '../Chat/Chat';
import { logoutUser } from '../../actions/authActions';

class Channel extends Component {
  onLogoutClick(e) {
    const { props } = this;
    e.preventDefault();

    props.logoutUser();
  }

  render() {
    const { auth } = this.props;
    const { user } = auth;
    return (
      <div style={{ height: '75vh' }} className="container valign-wrapper">
        <Chat currentUserData={user} />

      </div>
    );
  }
}

Channel.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Channel);
