import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chat from '../Chat/Chat';
import ServerChat from '../Chat/ServerChat';
import { logoutUser } from '../../actions/authActions';
import MainContainer from '../dashboard/MainContainer';

class Server extends Component {
  onLogoutClick(e) {
    const { props } = this;
    e.preventDefault();

    props.logoutUser();
  }

  render() {
    const { auth } = this.props;
    const { user } = auth;
    return (
      <MainContainer component={<ServerChat currentUserData={user} />} />
    );
  }
}

Server.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Server);
