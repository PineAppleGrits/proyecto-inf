import React, { Component, Suspense } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames/bind';

import { Trans, withTranslation } from 'react-i18next';
import { loginUser } from '../../actions/authActions';
import LoadingScreen from '../util/LoadingScreen';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { auth, history } = this.props;

    // User logged => dashboard
    if (auth.isAuthenticated) {
      history.push('/dashboard');
    }
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      nextProps.history.push('/dashboard'); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      return {
        errors: nextProps.errors,
      };
    }
    return null;
  }

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { props } = this;
    const userData = {
      email,
      password,
    };
    props.loginUser(userData);
  }

  render() {
    const { errors, email, password } = this.state;
    const styles = {
      invalid: 'is-invalid',
    };
    const cx = classnames.bind(styles);
    return (
      <Suspense delayMs={1500} fallback={<LoadingScreen />}>
        <div
          className="p-0 align-item-center justify-content-center"
          style={{
            backgroundImage: 'url("/login-bg.jpg")',
            width: '100vw',
            height: '100vh',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="row ">
            <div className="card mx-auto col-6">
              <Link to="/" className="d-flex align-items-center">
                <i className="material-icons left">keyboard_backspace</i>
                <span>
                  <Trans className="text-danger" ns="auth" i18nKey="backHome">
                    Back to home
                  </Trans>
                </span>
              </Link>

              <div className="col-xs-12" style={{ paddingLeft: '11.250px' }}>
                <h4>
                  <Trans ns="auth" i18nKey="loginBelow">
                    <strong>Login</strong>

                    below
                  </Trans>
                </h4>
                <p>
                  <Trans ns="auth" i18nKey="registerOption">
                    Dont have an account?
                    <Link to="/register">Register</Link>
                  </Trans>
                </p>
              </div>

              <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field col-xs-12">
                  <label htmlFor="email">
                    {' '}
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
                      invalid: errors.email ? true : !!(false || errors.emailnotfound),
                    })}
                    required
                  />
                  <span className="invalid-feedback">
                    <Trans ns="auth" i18nKey={errors.email} />
                    <Trans ns="auth" i18nKey={errors.emailnotfound} />
                  </span>
                </div>

                <div className="input-field col-xs-12">
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
                      invalid: errors.password ? true : !!(false || errors.passwordincorrect),
                    })}
                    required
                  />
                  <span className="invalid-feedback">
                    <Trans ns="auth" i18nKey={errors.password} />
                    <Trans ns="auth" i18nKey={errors.passwordincorrect} />
                  </span>
                </div>

                <div className="col-xs-12" style={{ paddingLeft: '11.250px' }}>
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
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Suspense>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(
  withTranslation('auth')(Login),
);
