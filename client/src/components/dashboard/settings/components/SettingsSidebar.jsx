import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../../actions/authActions";
import Modal from "react-modal";
import ConfirmModal from "./ConfirmModal";
import { Trans, withTranslation } from "react-i18next";
import MyAccount from "../tabs/MyAccount";
import UserProfile from "../tabs/UserProfile";
const SettingsSidebar = (props) => {
  const [showUserModal, setUserModal] = React.useState(false);
  function onLogoutClick(e) {
    e.preventDefault();
    props.logoutUser();
  }

  function handleOpenUserModal() {
    setUserModal(true);
  }

  function handleCloseUserModal() {
    setUserModal(false);
  }
  function handleTabChange(arg) {
    console.log("called", arg);
    props.setActiveTab(arg);
  }
  return (
    <>
      <nav className="sidebar-CFHs9e">
        <div className="side-8zPYf6" role="tablist" aria-orientation="vertical">
          <div className="header-2RyJ0Y" tabIndex={-1} role="button">
            <Trans ns="user_settings" i18nKey="SettingsSidebar.userSettings">
              User settings
            </Trans>
          </div>
          <div
            className="item-PXvHYJ selected-3s45Ha themed-OHr7kt"
            role="tab"
            aria-selected="true"
            aria-controls="my-account-tab"
            aria-disabled="false"
            tabIndex={0}
            aria-label="My account"
            onClick={() => {
              handleTabChange(<MyAccount />);
            }}
          >
            <Trans ns="user_settings" i18nKey="SettingsSidebar.myAccount">
              My Account
            </Trans>
          </div>
          <div
            className="item-PXvHYJ themed-OHr7kt"
            role="tab"
            aria-selected="false"
            aria-controls="profile-customization-tab"
            aria-disabled="false"
            tabIndex={-1}
            aria-label="User profile"
            onClick={() => {
              handleTabChange(<UserProfile />);
            }}
          >
            <Trans ns="user_settings" i18nKey="SettingsSidebar.userProfile">
              User Profile
            </Trans>
          </div>
          <div
            className="item-PXvHYJ themed-OHr7kt"
            role="tab"
            aria-selected="false"
            aria-controls="privacy-&-safety-tab"
            aria-disabled="false"
            tabIndex={-1}
          >
            <Trans ns="user_settings" i18nKey="SettingsSidebar.privacySafety">
              Privacy &amp; safety
            </Trans>
          </div>
          <div className="separator-gCa7yv" />
          <div className="header-2RyJ0Y" tabIndex={-1} role="button">
            Payment settings
          </div>
          <div
            className="item-PXvHYJ themed-OHr7kt"
            role="tab"
            aria-selected="false"
            aria-controls="subscriptions-tab"
            aria-disabled="false"
            tabIndex={-1}
            aria-label="Subscriptions"
          >
            <Trans ns="user_settings" i18nKey="SettingsSidebar.subscriptions">
              Subscriptions
            </Trans>
          </div>

          <div className="separator-gCa7yv" />
          <div className="header-2RyJ0Y" tabIndex={-1} role="button">
            App settings
          </div>
          <div
            className="item-PXvHYJ themed-OHr7kt"
            role="tab"
            aria-selected="false"
            aria-controls="appearance-tab"
            aria-disabled="false"
            tabIndex={-1}
          >
            <Trans ns="user_settings" i18nKey="SettingsSidebar.appearance">
              Appearance
            </Trans>
          </div>
          <div
            className="item-PXvHYJ themed-OHr7kt"
            role="tab"
            aria-selected="false"
            aria-controls="accessibility-tab"
            aria-disabled="false"
            tabIndex={-1}
          >
            <Trans ns="user_settings" i18nKey="SettingsSidebar.accessibility">
              Accessibility
            </Trans>
          </div>
          <div
            className="item-PXvHYJ themed-OHr7kt"
            role="tab"
            aria-selected="false"
            aria-controls="voice-&-video-tab"
            aria-disabled="false"
            tabIndex={-1}
          >
            <Trans ns="user_settings" i18nKey="SettingsSidebar.voiceVideo">
              Voice &amp; video
            </Trans>
          </div>
          <div
            className="item-PXvHYJ themed-OHr7kt"
            role="tab"
            aria-selected="false"
            aria-controls="language-tab"
            aria-disabled="false"
            tabIndex={-1}
          >
            <Trans ns="user_settings" i18nKey="SettingsSidebar.language">
              Language
            </Trans>
          </div>

          <div className="separator-gCa7yv" />
          <div
            className="item-PXvHYJ themed-OHr7kt"
            role="tab"
            aria-selected="false"
            aria-controls="changelog-tab"
            aria-disabled="false"
            tabIndex={-1}
          >
            <Trans ns="user_settings" i18nKey="SettingsSidebar.changeLog">
              Change log
            </Trans>
          </div>
          <div className="separator-gCa7yv" />
          <div
            onClick={handleOpenUserModal}
            className="item-PXvHYJ themed-OHr7kt"
            role="tab"
            aria-selected="false"
            aria-controls="logout-tab"
            aria-disabled="false"
            tabIndex={-1}
            style={{
              color:
                "hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)",
            }}
          >
            <Trans ns="user_settings" i18nKey="SettingsSidebar.logOut">
              Log out
            </Trans>
          </div>
          <div className="separator-gCa7yv" />
          <div className="info-1VyQPT">
            <span className="colorMuted-HdFt4q size12-3cLvbJ line-3ColD0">
              Alpha 1{" "}
            </span>
          </div>
        </div>
        <Modal
          isOpen={showUserModal}
          contentLabel="onRequestClose Example"
          onRequestClose={handleCloseUserModal}
          closeTimeoutMS={150}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,.1)",
              zIndex: 200,
            },
            content: {
              padding: 0,
              borderRadius: "5px",
              margin: "auto",
              boxShadow:
                "0 0 0 1px rgba(32,34,37,.6), 0 2px 10px 0 rgba(0,0,0,.2)",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "rgba(0,0,0,.1)",
              border: "none",
            },
          }}
        >
          <ConfirmModal
            title="Log out"
            text="Are you sure you want to Log Out?"
            cancel="Cancel"
            accept="Log out"
            action={onLogoutClick}
            closeModal={handleCloseUserModal}
          />
        </Modal>
      </nav>
    </>
  );
};
SettingsSidebar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(SettingsSidebar);
