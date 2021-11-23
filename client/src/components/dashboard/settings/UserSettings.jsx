import React from "react";
import EditUserForm from "../edit_user_form";
import Modal from "react-modal";
import MyAccount from "./tabs/MyAccount";
import UserProfile from "./tabs/UserProfile";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import SettingsSidebar from './components/SettingsSidebar'
import SettingsTools from './components/SettingsTools'
import SettingsContainer from "./components/SettingsContainer";
const UserSettings = (props) => {
    const {auth} =props;
    const {user} = auth;
    const [activeTab, setActiveTab] = React.useState(<MyAccount />)
    return (
      <>
        <div
          aria-hidden="false"
          className="layer-3QrUeG"
          aria-label="USER_SETTINGS"
          style={{}}
        >
          <div className="standardSidebarView-3F1I7i">
            <div className="sidebarRegion-VFTUkN">
              <div
                className="sidebarRegionScroller-3MXcoP thin-1ybCId scrollerBase-289Jih fade-2kXiP2"
                dir="ltr"
                style={{ overflow: "hidden scroll", paddingRight: "0px" }}
              >
                <SettingsSidebar setActiveTab={setActiveTab} />
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    pointerEvents: "none",
                    minHeight: "0px",
                    minWidth: "1px",
                    flex: "0 0 auto",
                    height: "0px",
                  }}
                />
              </div>
            </div>
                <SettingsContainer activeTab={activeTab} />
          </div>
        </div>
      </>
    );
  }
UserSettings.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(UserSettings);
