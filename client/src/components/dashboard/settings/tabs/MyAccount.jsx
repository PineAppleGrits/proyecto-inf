import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../../actions/authActions";
import UserInformation from "../components/MyAccount/UserInformation";
import PasswordSettings from "../components/MyAccount/PasswordSettings";
import AccountRemoval from "../components/MyAccount/AccountRemoval";
import Divider from "../components/MyAccount/Divider";

import { Trans, withTranslation } from "react-i18next";
const MyAccount = (props) => {
  const { auth } = props;
  const { user } = auth;
  return (
    <main className="contentColumn-2hrIYH contentColumnDefault-1VQkGM">
      <div>
        <div>
          <div className="sectionTitle-2vauyC">
            <h1 className="colorStandard-2KCXvj size14-e6ZScH h1-1qdNzo title-3sZWYQ defaultColor-1_ajX0 defaultMarginh1-peT3GC">
              <Trans ns="user_settings" i18nKey="MyAccount.title">
                My account
              </Trans>
            </h1>
          </div>
          <div className="children-rWhLdy">
            <UserInformation />
          </div>
        </div>
        <Divider />
        <PasswordSettings />
        <Divider />
        <AccountRemoval />
      </div>
    </main>
  );
};

MyAccount.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(
  withTranslation("auth")(MyAccount)
);
