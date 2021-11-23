import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import axios from 'axios';
const JoinServerModal = (props) => {
  const inviteLink = React.useRef();
    const {auth} = props;
    const {user} = auth;
  function onSubmit(event) {
    event.preventDefault();
    axios
      .post("/api/join", {
        userId: user._id,
        serverId: inviteLink.current.value,
      })
      .then(({ data }) => {
        props.history.push(`/channel/${data._id}`);
      });
  }
  return (
    <div
      className=""
      role="dialog"
      aria-labelledby="uid_163"
      tabIndex={-1}
      aria-modal="true"
    >
      <div
        className="root-1gCeng small-3iVZYw fullscreenOnMobile-1bD22y"
        style={{ opacity: 1, transform: "scale(1)" }}
      >
        <div className="container-1CE3eW">
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              width: "440px",
              height: "370px",
            }}
          >
            <div>
              <div>
                <div
                  className="flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6 header-1TKi98 header-1Xr5FO"
                  id="uid_167"
                  style={{ flex: "0 0 auto" }}
                >
                  <h3 className="title-XLSR78 fontDisplay-1dagSA base-1x0h_U size24-RIRrxO">
                    Join a server
                  </h3>
                  <div className="colorHeaderSecondary-3Sp3Ft size14-e6ZScH">
                    Enter an invite below to join an existing server
                  </div>
                  <button
                    onClick={props.closeJoinModal}
                    aria-label="Close"
                    type="button"
                    className="closeButton-1RFOLl close-hZ94c6 button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN"
                  >
                    <div className="contents-18-Yxp">
                      <svg
                        className="closeIcon-150W3V"
                        aria-hidden="false"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                <div
                  className="content-1LAB8Z thin-1ybCId scrollerBase-289Jih"
                  dir="ltr"
                  style={{
                    overflow: "hidden scroll",
                    paddingRight: "8px",
                  }}
                >
                  <form onSubmit={onSubmit} className="inputForm-N3LGqy">
                    <div>
                      <h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ formTitle-aeXUoN">
                        Invite link
                        <span className="required-7sPBq3">*</span>
                      </h5>
                      <div className="inputWrapper-31_8H8 input--jS-j2">
                        <input
                          ref={inviteLink}
                          className="inputDefault-_djjkz input-cIJ7To inputInner-2akrSS"
                          placeholder="Invite link here"
                          name
                          type="text"
                          maxLength={999}
                        />
                      </div>
                    </div>
                  </form>
                  <div className="examplesForm-1PzAn-">
                    <h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ formTitle-aeXUoN">
                      Invites should look like
                    </h5>
                    <div
                      className="sampleLink-2NLvZg"
                      role="button"
                      tabIndex={0}
                    >
                      hTKzmak
                    </div>
                    <div
                      className="sampleLink-2NLvZg"
                      role="button"
                      tabIndex={0}
                    >
                      https://discord.gg/hTKzmak
                    </div>
                  </div>
                  <div aria-hidden="true" style={{}} />
                </div>
                <div
                  style={{ justifyContent: "space-between" }}
                  className="flex-1xMQg5 flex-1O1GKY horizontalReverse-2eTKWD horizontalReverse-3tRjY7 flex-1O1GKY directionRowReverse-m8IjIq justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6 footer-2gL1pp footer-2ZvXOl"
                >
                  <button
                    type="button"
                    className="button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMedium-1AC_Sl grow-q77ONN"
                  >
                    <div onClick={onSubmit} className="contents-18-Yxp">
                      Join server
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      props.closeJoinModal();
                      props.openCreateModal();
                    }}
                    type="button"
                    className="button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMedium-1AC_Sl grow-q77ONN"
                  >
                    <div className="contents-18-Yxp">Create server</div>
                  </button>
                  <button
                    type="button"
                    className="button-38aScr lookLink-9FtZy- lowSaturationUnderline-3svVxy colorPrimary-3b3xI6 sizeMin-1mJd1x grow-q77ONN"
                  >
                    <div className="contents-18-Yxp">Back</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

JoinServerModal.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps)(JoinServerModal));
