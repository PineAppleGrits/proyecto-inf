import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chat from '../Chat/Chat';
import { logoutUser } from '../../actions/authActions';
import MainContainer from '../dashboard/MainContainer'
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
/*       <div style={{ height: '75vh' }} className="container valign-wrapper">
        <Chat currentUserData={user} />

      </div> */
      <MainContainer component={<Chat currentUserData={user} />}/>
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
