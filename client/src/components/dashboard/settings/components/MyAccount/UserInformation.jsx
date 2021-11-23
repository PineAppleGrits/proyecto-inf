import React from "react";
import PropTypes from "prop-types";
import { logoutUser } from "../../../../../actions/authActions";
import { connect } from "react-redux";
import { Trans, withTranslation } from "react-i18next";
const UserInformation = (props) => {
  const { auth } = props;
  const { user } = auth;
  return (
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
                  src={user.profile_picture}
                  alt=" "
                  className="avatar-VxgULZ"
                  aria-hidden="true"
                />
              </div>
            </foreignObject>
            <rect
              width="16"
              height="16"
              x="60"
              y="60"
              fill="hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)"
              class="pointerEvents-2zdfdO"
            ></rect>
          </svg>
        </div>
        <div>
          <div className="profileCardUsernameRow-1koz7u">
            <div className="userTag-1PLzkC nameTag-m8r81H">
              <span className="username-2b1r56">{user.name}</span>
              <span className="discriminator-2C3qJO">
                #{user.discriminator}
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
            <Trans
              ns="user_settings"
              i18nKey="MyAccount.userInformation.editProfile"
            >
              Edit User Profile
            </Trans>
          </div>
        </button>
      </div>
      <div className="background-1QDuV2">
        <div className="fieldList-21DyL8">
          <div className="field-1HUseB">
            <div className="constrainedRow-2GB6Ki">
              <div className="usernameRow-2Lu_-c">
                <h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ fieldTitle-3h2iLW">
                  <Trans
                    ns="user_settings"
                    i18nKey="MyAccount.userInformation.username"
                  >
                    Username
                  </Trans>
                </h5>
                <div className="usernameInnerRow-ZlFnET">
                  <span className="colorHeaderPrimary-26Jzh- size16-1P40sf">
                    {user.name}
                  </span>
                  <span className="colorHeaderSecondary-3Sp3Ft size16-1P40sf">
                    #{user.discriminator}
                  </span>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="fieldButton-27bJrp button-38aScr lookFilled-1Gx00P colorGrey-2DXtkV sizeSmall-2cSMqn grow-q77ONN"
            >
              <div className="contents-18-Yxp">
                <Trans
                  ns="user_settings"
                  i18nKey="MyAccount.userInformation.editButton"
                >
                  Edit
                </Trans>
              </div>
            </button>
          </div>
          <div className="field-1HUseB fieldSpacer-wgewFh">
            <div className="constrainedRow-2GB6Ki">
              <div>
                <h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ fieldTitle-3h2iLW">
                  <Trans
                    ns="user_settings"
                    i18nKey="MyAccount.userInformation.email"
                  >
                    Email
                  </Trans>
                </h5>
                <div>
                  <span className="colorHeaderPrimary-26Jzh- size16-1P40sf">
                    {user.email}
                    <button
                      type="button"
                      className="button-38aScr lookLink-9FtZy- lowSaturationUnderline-3svVxy colorLink-35jkBc sizeMin-1mJd1x grow-q77ONN"
                    >
                      <div className="contents-18-Yxp">
                        <Trans
                          ns="user_settings"
                          i18nKey="MyAccount.userInformation.reveal"
                        >
                          Reveal
                        </Trans>
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
              <div className="contents-18-Yxp">
                {" "}
                <Trans
                  ns="user_settings"
                  i18nKey="MyAccount.userInformation.editButton"
                >
                  Edit
                </Trans>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

UserInformation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(
  withTranslation("auth")(UserInformation)
);
