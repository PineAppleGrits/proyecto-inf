import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Trans, withTranslation } from "react-i18next";
const AccountRemoval = (props) => {
  return (
    <div className="marginTop40-i-78cZ">
      <div className="sectionTitle-2vauyC">
        <h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ defaultMarginh5-2mL-bP">
          <Trans ns="user_settings" i18nKey="MyAccount.accountRemoval.title">
            Account removal
          </Trans>
        </h5>
      </div>
      <div className="children-rWhLdy">
        <div className="colorStandard-2KCXvj size14-e6ZScH description-3_Ncsb formText-3fs7AJ description-31A0cy modeDefault-3a2Ph1">
          <Trans
            ns="user_settings"
            i18nKey="MyAccount.accountRemoval.description"
          >
            Disabling your account means you can recover it at any time after
            taking this action.
          </Trans>
        </div>
        <div className="buttonContainer-1zBNxN">
          <button
            type="button"
            className="disableButton-220a9y button-38aScr lookFilled-1Gx00P colorRed-1TFJan sizeSmall-2cSMqn grow-q77ONN"
          >
            <div className="contents-18-Yxp">
              <Trans
                ns="user_settings"
                i18nKey="MyAccount.accountRemoval.disableAccount"
              >
                Disable account
              </Trans>
            </div>
          </button>
          <button
            type="button"
            className="button-38aScr lookOutlined-3sRXeN colorRed-1TFJan sizeSmall-2cSMqn grow-q77ONN"
          >
            <div className="contents-18-Yxp">
              <Trans
                ns="user_settings"
                i18nKey="MyAccount.accountRemoval.deleteAccount"
              >
                Delete account
              </Trans>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

AccountRemoval.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(
  withTranslation("auth")(AccountRemoval)
);
