import React from 'react';
import Modal from 'react-modal';
import Tooltip from './tooltip';
import UserSettings from './dashboard/settings/UserSettings';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
class UserBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showUserModal: false };
    this.handleOpenUserModal = this.handleOpenUserModal.bind(this);
    this.handleCloseUserModal = this.handleCloseUserModal.bind(this);
  }

  handleOpenUserModal() {
    this.setState({ showUserModal: true });
  }

  handleCloseUserModal() {
    this.setState({ showUserModal: false });
  }

  render() {
    const { auth } = this.props;
    const { user } = auth;
    return (
      <>
        <div className="user-actions">
          <div className="icon-name-wrapper">
            <Tooltip component={
              <div className="user-icon" style={{ backgroundImage: `url(${user.profile_picture})` }} onClick={this.handleOpenUserModal}>
                <div
                  className="server-member-status-indicator"
                  style={true ? { backgroundColor: '#43b581' } : { backgroundColor: '#747f8d' }}
                ></div>
              </div>
            }
              position="top center"
              text="Update Profile"
            />
            <div className="actions-username">{user.name}</div>
          </div>
          <Tooltip component={
            <button className="gear" onClick={() => this.props.logout()}>
              <i className="fas fa-sign-out-alt"></i>
            </button>
          }
            position="top center"
            text="Logout"
          />
        </div>
        <Modal
          isOpen={this.state.showUserModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseUserModal}
          closeTimeoutMS={150}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 99,
            },
            content: {
              padding: 0,
              borderRadius: '5px',
              margin: 'auto',
              boxShadow: '0 0 0 1px rgba(32,34,37,.6), 0 2px 10px 0 rgba(0,0,0,.2)',
              boxSizing: 'border-box',
              display: 'flex',
              maxHeight: '85%',
              maxWidth: '65%',
              flexDirection: 'column',
              backgroundColor: '#37393f',
              border: 'none',
            }
          }}
        >
          <UserSettings
            closeModal={this.handleCloseUserModal}
            errors={this.props.errors}
            currentUser={user}
            editUser={this.props.editUser}
          />
        </Modal>
      </>
    )
  }
}

UserBar.propTypes = {
    auth: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
export default connect(mapStateToProps)(UserBar);