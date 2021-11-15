import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/authActions';

class Dashboard extends Component {
  constructor() {
    super();
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick(e) {
    e.preventDefault();
    const { props } = this;
    props.logoutUser();
  }

  render() {
    const { auth } = this.props;
    const { user } = auth;
    return (
      <div style={{ height: '75vh' }} className="container valign-wrer">
        <div className="row">
          <div className="col-12 text-center">
            <h4>
              <strong>Que onda</strong>
              {' '}
              {user.name}
              <p>
                Proba el chat!
              </p>
            </h4>

            <button
              style={{
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem',
              }}
              type="button"
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
            <br />
            <button
              style={{
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem',
              }}
              type="button"
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              <Link to="/">
                Back to home
              </Link>
            </button>

          
            <br />
            <button
              style={{
                width: '150px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
                marginTop: '1rem',
              }}
              type="button"
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              <Link to="/channel/60f63257aa1eb400153ad0b1">
                Example Channel
              </Link>
            </button></div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
