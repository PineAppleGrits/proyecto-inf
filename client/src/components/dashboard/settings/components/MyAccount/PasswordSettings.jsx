import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Trans, withTranslation } from "react-i18next";
const PasswordSettings = (props) => {
  return (
    <div className="userSettingsSecurity-3IYeMF marginTop40-i-78cZ">
      <div className="sectionTitle-2vauyC">
        <h1 className="colorStandard-2KCXvj size14-e6ZScH h1-1qdNzo title-3sZWYQ defaultColor-1_ajX0 defaultMarginh1-peT3GC">
          <Trans ns="user_settings" i18nKey="MyAccount.passwordSettings.title">
            Password and authentication
          </Trans>
        </h1>
      </div>
      <div className="children-rWhLdy">
        <div>
          <button
            type="button"
            className="changePasswordButton-1LGVWT button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeSmall-2cSMqn grow-q77ONN"
          >
            <div className="contents-18-Yxp">
              <Trans
                ns="user_settings"
                i18nKey="MyAccount.passwordSettings.changePassword"
              >
                Change Password
              </Trans>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

PasswordSettings.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(
  withTranslation("auth")(PasswordSettings)
);
