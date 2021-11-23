import React from "react";
import EditUserForm from './edit_user_form';
import Modal from 'react-modal';
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.currentUser.name,
      email: this.props.currentUser.email,
      avatarUrl: this.props.currentUser.profile_picture,
      discriminator: this.props.currentUser.discriminator,
      avatarFile: null,
    };
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  render() {
    const user = this.state;
    const emailError = undefined;
    const usernameError = undefined;
    const username = this.state.username,
      email = this.state.email;
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
              <nav className="sidebar-CFHs9e">
                <div
                  className="side-8zPYf6"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <div className="header-2RyJ0Y" tabIndex={-1} role="button">
                    User settings
                  </div>
                  <div
                    className="item-PXvHYJ selected-3s45Ha themed-OHr7kt"
                    role="tab"
                    aria-selected="true"
                    aria-controls="my-account-tab"
                    aria-disabled="false"
                    tabIndex={0}
                    aria-label="My account"
                  >
                    My account
                  </div>
                  <div
                    className="item-PXvHYJ themed-OHr7kt"
                    role="tab"
                    aria-selected="false"
                    aria-controls="profile-customization-tab"
                    aria-disabled="false"
                    tabIndex={-1}
                    aria-label="User profile"
                  >
                    User profile
                  </div>
                  <div
                    className="item-PXvHYJ themed-OHr7kt"
                    role="tab"
                    aria-selected="false"
                    aria-controls="privacy-&-safety-tab"
                    aria-disabled="false"
                    tabIndex={-1}
                  >
                    Privacy &amp; safety
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
                    Subscriptions
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
                    Appearance
                  </div>
                  <div
                    className="item-PXvHYJ themed-OHr7kt"
                    role="tab"
                    aria-selected="false"
                    aria-controls="accessibility-tab"
                    aria-disabled="false"
                    tabIndex={-1}
                  >
                    Accessibility
                  </div>
                  <div
                    className="item-PXvHYJ themed-OHr7kt"
                    role="tab"
                    aria-selected="false"
                    aria-controls="voice-&-video-tab"
                    aria-disabled="false"
                    tabIndex={-1}
                  >
                    Voice &amp; video
                  </div>
                  <div
                    className="item-PXvHYJ themed-OHr7kt"
                    role="tab"
                    aria-selected="false"
                    aria-controls="language-tab"
                    aria-disabled="false"
                    tabIndex={-1}
                  >
                    Language
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
                    Change log
                  </div>
                  <div className="separator-gCa7yv" />
                  <div
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
                    Log out
                  </div>
                  <div className="separator-gCa7yv" />
                  <div className="info-1VyQPT">
                    <span className="colorMuted-HdFt4q size12-3cLvbJ line-3ColD0">
                      Alpha 1{" "}
                    </span>
                  </div>
                </div>
              </nav>
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
          <div className="contentRegion-3nDuYy">
            <div className="contentTransitionWrap-3hqOEW">
              <div
                className="contentRegionScroller-26nc1e contentRegionShownSidebar-2VepaU auto-Ge5KZx scrollerBase-289Jih"
                dir="ltr"
                style={{ overflow: "hidden scroll", paddingRight: "0px" }}
              >
                <main className="contentColumn-2hrIYH contentColumnDefault-1VQkGM">
                  <div>
                    <div>
                      <div className="sectionTitle-2vauyC">
                        <h1 className="colorStandard-2KCXvj size14-e6ZScH h1-1qdNzo title-3sZWYQ defaultColor-1_ajX0 defaultMarginh1-peT3GC">
                          My account
                        </h1>
                      </div>
                      <div className="children-rWhLdy">
                        <div className="accountProfileCard-1XCH88">
                          <div
                            className="banner-2QYc2d settingsBanner-15-pZk bannerPremium-2hSAwz"
                            style={{ backgroundColor: "rgb(0, 0, 0)" }}
                          />
                          <div className="userInfo-iCloHO">
                            <div
                              className="avatar-1uQSZT wrapper-3t9DeA"
                              role="img"
                              aria-label="Grits, Do not disturb"
                              aria-hidden="false"
                              style={{ width: "80px", height: "80px" }}
                            >
                              <svg
                                width={92}
                                height={80}
                                viewBox="0 0 92 80"
                                className="mask-1l8v16 svg-2V3M55"
                                aria-hidden="true"
                              >
                                <foreignObject
                                  x={0}
                                  y={0}
                                  width={80}
                                  height={80}
                                  mask="url(#svg-mask-avatar-status-round-80)"
                                >
                                  <div className="avatarStack-2Dr8S9">
                                    <img
                                      src={this.state.avatarUrl}
                                      alt=" "
                                      className="avatar-VxgULZ"
                                      aria-hidden="true"
                                    />
                                  </div>
                                </foreignObject>
                                <rect width="16" height="16" x="60" y="60" fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)" class="pointerEvents-2zdfdO"></rect>
                              </svg>
                            </div>
                            <div>
                              <div className="profileCardUsernameRow-1koz7u">
                                <div className="userTag-1PLzkC nameTag-m8r81H">
                                  <span className="username-2b1r56">{this.state.username}</span>
                                  <span className="discriminator-2C3qJO">
                                    #{this.state.discriminator}
                                  </span>
                                </div>
                                <div
                                  className="overflowMenuButton-1U2jMB"
                                  aria-controls="popout_229"
                                  aria-expanded="false"
                                  aria-label="Actions"
                                  role="button"
                                  tabIndex={0}
                                >
                                  <svg
                                    className="overflowMenuIcon-1h7e8s"
                                    aria-hidden="false"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="currentColor"
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div
                                className="container-q03LZO"
                                aria-label="User badges"
                                role="group"
                              />
                            </div>
                            <button
                              type="button"
                              className="button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeSmall-2cSMqn grow-q77ONN"
                            >
                              <div className="contents-18-Yxp">
                                Edit User Profile
                              </div>
                            </button>
                          </div>
                          <div className="background-1QDuV2">
                            <div className="fieldList-21DyL8">
                              <div className="field-1HUseB">
                                <div className="constrainedRow-2GB6Ki">
                                  <div className="usernameRow-2Lu_-c">
                                    <h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ fieldTitle-3h2iLW">
                                      Username
                                    </h5>
                                    <div className="usernameInnerRow-ZlFnET">
                                      <span className="colorHeaderPrimary-26Jzh- size16-1P40sf">
                                        {this.state.username}
                                      </span>
                                      <span className="colorHeaderSecondary-3Sp3Ft size16-1P40sf">
                                        #{this.state.discriminator}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  className="fieldButton-27bJrp button-38aScr lookFilled-1Gx00P colorGrey-2DXtkV sizeSmall-2cSMqn grow-q77ONN"
                                >
                                  <div className="contents-18-Yxp">Edit</div>
                                </button>
                              </div>
                              <div className="field-1HUseB fieldSpacer-wgewFh">
                                <div className="constrainedRow-2GB6Ki">
                                  <div>
                                    <h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ fieldTitle-3h2iLW">
                                      Email
                                    </h5>
                                    <div>
                                      <span className="colorHeaderPrimary-26Jzh- size16-1P40sf">
                                        ********@gmail.com
                                        <button
                                          type="button"
                                          className="button-38aScr lookLink-9FtZy- lowSaturationUnderline-3svVxy colorLink-35jkBc sizeMin-1mJd1x grow-q77ONN"
                                        >
                                          <div className="contents-18-Yxp">
                                            Reveal
                                          </div>
                                        </button>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  className="fieldButton-27bJrp button-38aScr lookFilled-1Gx00P colorGrey-2DXtkV sizeSmall-2cSMqn grow-q77ONN"
                                >
                                  <div className="contents-18-Yxp">Edit</div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="divider-3573oO marginTop40-i-78cZ" />
                    <div className="userSettingsSecurity-3IYeMF marginTop40-i-78cZ">
                      <div className="sectionTitle-2vauyC">
                        <h1 className="colorStandard-2KCXvj size14-e6ZScH h1-1qdNzo title-3sZWYQ defaultColor-1_ajX0 defaultMarginh1-peT3GC">
                          Password and authentication
                        </h1>
                      </div>
                      <div className="children-rWhLdy">
                        <div>
                          <button
                            type="button"
                            className="changePasswordButton-1LGVWT button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeSmall-2cSMqn grow-q77ONN"
                          >
                            <div className="contents-18-Yxp">
                              Change password
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="divider-3573oO marginTop40-i-78cZ" />
                    <div className="marginTop40-i-78cZ">
                      <div className="sectionTitle-2vauyC">
                        <h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ defaultMarginh5-2mL-bP">
                          Account removal
                        </h5>
                      </div>
                      <div className="children-rWhLdy">
                        <div className="colorStandard-2KCXvj size14-e6ZScH description-3_Ncsb formText-3fs7AJ description-31A0cy modeDefault-3a2Ph1">
                          Disabling your account means you can recover it at any
                          time after taking this action.
                        </div>
                        <div className="buttonContainer-1zBNxN">
                          <button
                            type="button"
                            className="disableButton-220a9y button-38aScr lookFilled-1Gx00P colorRed-1TFJan sizeSmall-2cSMqn grow-q77ONN"
                          >
                            <div className="contents-18-Yxp">
                              Disable account
                            </div>
                          </button>
                          <button
                            type="button"
                            className="button-38aScr lookOutlined-3sRXeN colorRed-1TFJan sizeSmall-2cSMqn grow-q77ONN"
                          >
                            <div className="contents-18-Yxp">
                              Delete account
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
                <div className="toolsContainer-1edPuj">
                  <div className="tools-3-3s-N">
                    <div className="container-1sFeqf">
                      <div
                        className="closeButton-1tv5uR"
                        aria-label="Close"
                        role="button"
                        tabIndex={0}
                      >
                        <svg
                          aria-hidden="true"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="hsl(210, calc(var(--saturation-factor, 1) * 2.9%), 86.7%)"
                            d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
                          />
                        </svg>
                      </div>
                      <div onClick={this.props.closeModal} className="keybind-KpFkfr" aria-hidden="true">
                        ESC
                      </div>
                    </div>
                  </div>
                </div>
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
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default UserProfile;
