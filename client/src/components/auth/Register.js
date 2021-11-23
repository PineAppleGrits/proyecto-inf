import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';
import { Trans, withTranslation } from 'react-i18next';
import { registerUser } from '../../actions/authActions';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { auth, history } = this.props;
    // Logged == true, redirecto to dashboard.
    if (auth.isAuthenticated) {
      history.push('/@me');
    }
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.errors) {
      return {
        errors: nextProps.errors,
      };
    }
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      name, email, password, password2,
    } = this.state;
    const newUser = {
      name,
      email,
      password,
      password2,
    };
    const { history } = this.props;
    const { props } = this;
    props.registerUser(newUser, history);
  }

  render() {
    const {
      errors, password2, password, email, name,
    } = this.state;
    const styles = {
      invalid: 'is-invalid',
    };
    const cx = classnames.bind(styles);
    return (
      <div
        className="p-0 align-item-center justify-content-center"
        style={{
          backgroundImage: 'url("/register-bg.png")',
          width: '100vw',
          height: '100vh',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="row ">
          <div className="card mx-auto col-6 align-self-center">
            <Link to="/" className="d-flex align-items-center">
              <i className="material-icons left">keyboard_backspace</i>
              <span>
                <Trans className="text-danger" ns="auth" i18nKey="backHome">
                  Back to home
                </Trans>
              </span>
            </Link>

            <div className="col s12" style={{ paddingLeft: '11.250px' }}>
              <h4>
                <Trans ns="auth" i18nKey="registerBelow">
                  <strong>Login</strong>
                  below
                </Trans>
              </h4>
              <p>
                <Trans ns="auth" i18nKey="loginOption">
                  Have an account?
                  <Link to="/login">Login</Link>
                </Trans>
              </p>
            </div>

            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <label htmlFor="name">Name</label>
                <input
                  onChange={this.onChange}
                  value={name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={cx('form-control ', {
                    invalid: !!errors.name,
                  })}
                />
                <span className="invalid-feedback">
                  <Trans ns="auth" i18nKey={errors.name} />
                </span>
              </div>

              <div className="input-field col s12">
                <label htmlFor="email">
                  <Trans ns="auth" i18nKey="emailField">
                    Email
                  </Trans>

                </label>
                <input
                  onChange={this.onChange}
                  value={email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={cx('form-control ', {
                    invalid: !!errors.email,
                  })}
                />
                <span className="invalid-feedback">
                  <Trans ns="auth" i18nKey={errors.email} />
                </span>
              </div>

              <div className="input-field col s12">
                <label htmlFor="password">
                  <Trans ns="auth" i18nKey="passwordField">
                    Password
                  </Trans>
                </label>
                <input
                  onChange={this.onChange}
                  value={password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={cx('form-control ', {
                    invalid: !!errors.password,
                  })}
                />
                <span className="invalid-feedback">
                  <Trans ns="auth" i18nKey={errors.password} />
                </span>
              </div>

              <div className="input-field col s12">
                <label htmlFor="password2">
                  <Trans ns="auth" i18nKey="confirmPasswordField">
                    Confirm Password
                  </Trans>
                </label>
                <input
                  onChange={this.onChange}
                  value={password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={cx('form-control ', {
                    invalid: !!errors.password2,
                  })}
                />
                <span className="invalid-feedback">
                  <Trans ns="auth" i18nKey={errors.password2} />
                </span>
              </div>

              <div className="col s12" style={{ paddingLeft: '11.250px' }}>
                <button
                  style={{
                    width: '150px',
                    borderRadius: '3px',
                    letterSpacing: '1.5px',
                    marginTop: '1rem',
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withTranslation('auth')((withRouter(Register))));
