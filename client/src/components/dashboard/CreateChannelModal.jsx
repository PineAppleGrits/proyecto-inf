import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouterm, useParams } from 'react-router';
import axios from 'axios';
const CreateChannelModal = (props) => {
    const serverName = React.useRef();
    const {serverId} = useParams();
    const {auth} = props;
    const {user} = auth;
  function onSubmit(event) {
    event.preventDefault();
    axios
      .post("/api/channels", {
        serverId: serverId,
        name: serverName.current.value
      })
      .then(({ data }) => {
        props.history.push(`/channel/${serverId}/${data._id}`);
        props.closeCreateModal();
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
            height: "444px",
          }}
        >
          <div>
            <div
              className="flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6 header-1TKi98 header-287ONi"
              id="uid_173"
              style={{ flex: "0 0 auto" }}
            >
              <h3 className="title-Z_XiOC fontDisplay-1dagSA base-1x0h_U size24-RIRrxO">
                Customise your channel
              </h3>
              <div className="colorHeaderSecondary-3Sp3Ft size16-1P40sf subtitle-1KdHaN">
                Give your new server a personality with a new channel
              </div>
              <button
                onClick={props.closeCreateModal}
                aria-label="Close"
                type="button"
                className="closeButton-26zew5 close-hZ94c6 button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN"
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
              className="content-1LAB8Z createGuild-23lWNm thin-1ybCId scrollerBase-289Jih"
              dir="ltr"
              style={{ overflow: "hidden scroll", paddingRight: "8px" }}
            >
              <form onSubmit={onSubmit}>
                <div className="nameInput-2LpnKg">
                  <h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ defaultMarginh5-2mL-bP">
                    Channel name
                  </h5>
                  <div className="inputWrapper-31_8H8">
                    <input
                        ref={serverName}
                      className="inputDefault-_djjkz input-cIJ7To"
                      type="text"
                      maxLength={100}
                      name
                      placeholder
                      defaultValue="Grits's server"
                    />
                  </div>
                </div>
              </form>
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
            <div
              className="flex-1xMQg5 flex-1O1GKY horizontalReverse-2eTKWD horizontalReverse-3tRjY7 flex-1O1GKY directionRowReverse-m8IjIq justifyBetween-2tTqYu alignStretch-DpGPf3 noWrap-3jynv6 footer-2gL1pp"
              style={{ flex: "0 0 auto" }}
            >
              <button  onClick={onSubmit}
                type="button"
                className="button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMedium-1AC_Sl grow-q77ONN"
              >
                <div className="contents-18-Yxp">Create</div>
              </button>
              <button
                type="button"
                className="button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 sizeMin-1mJd1x grow-q77ONN"
              >
                <div className="contents-18-Yxp">Back</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

CreateChannelModal.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default withRouter(connect(mapStateToProps)(CreateChannelModal));
