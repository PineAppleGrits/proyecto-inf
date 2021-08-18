import React, { useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { connect } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';
import LanguageSelector from '../util/LanguageSelector';
import news from '../../utils/news';

const Landing = ({ auth }) => {
  const { t } = useTranslation(['landing', 'news']);
  const { isAuthenticated } = auth;
  const appButton = isAuthenticated ? 'appButton' : 'loginButton';
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * news.length);
    const tText = t(`news:${news[randomIndex][1]}`);
    const randomNew = {
      icon: news[randomIndex][0],
      text: tText,
    };
    const darkMode = window.halfmoon.darkModeOn;
    const textColor = darkMode ? '#fff' : '#333';
    const bgColor = darkMode ? '#333' : '#fff';
    toast(randomNew.text, {
      icon: randomNew.icon,
      style: {
        borderRadius: '10px',
        background: bgColor,
        color: textColor,
      },
    });
  });

  return (
    <div>
      <Suspense>
        <Toaster position="bottom-right" reverseOrder />
      </Suspense>

      <div className="">
        <div
          style={{
            backgroundImage: "url('/landing-bg.gif')",
            maxWidth: '100vw',
            height: '100vh',
            backgroundSize: 'cover',
          }}
        >
          <div className="row p-10">
            <div className="col-3">PLACEHOLDER ICON</div>
            <div className="col-6 text-decoration-none d-flex justify-content-center">
              <Link
                to="/"
                style={{ color: 'inherit' }}
                className="text-decoration-none"
              >
                <h5>About</h5>
              </Link>
            </div>
            <div className="col-3">
              <div className="row ">
                <div className="col-xs">
                  <LanguageSelector />
                </div>
                <div className="col-xs">
                  <Link to="/dashboard" className="btn btn-primary">
                    {t(appButton)}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <h1 style={{ marginTop: '10rem' }}>
                <Trans i18nKey="landing.title">
                  Hora de tirar
                  <strong>Discord</strong>
                  a la basura.
                </Trans>
              </h1>
              <br />
            </div>
          </div>

          <div className="row  p-5">
            <div className="col d-flex justify-content-center">
              <button type="button" className="btn disabled btn-rounded btn-lg ">
                {t('appButton')}
              </button>
            </div>
            <div className="col d-flex justify-content-center">
              <button type="button" className="btn btn-primary btn-rounded btn-lg ">
                {t('appButton')}
              </button>
            </div>
          </div>
          {/* END IMAGE CONTAINER */}
        </div>
        <div className="container">
          {/* NEXT COMP */}
        </div>
      </div>
    </div>
  );
};
Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps)(Landing);
