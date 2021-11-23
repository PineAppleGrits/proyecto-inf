import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const ConfirmModal = (props) => {
    const {action,title,text,cancel,accept,closeModal} = props;
  return (
    <div className="layerContainer-yqaFcK">
      <div
        className="backdrop-1wrmKB withLayer-RoELSG"
        style={{
          opacity: "0.85",
          background: "hsl(0, calc(var(--saturation-factor, 1) * 0%), 0%)",
        }}
      />
      <div className="layer-2KE1M9">
        <div
          className="focusLock-Ns3yie"
          role="dialog"
          aria-labelledby="uid_635"
          tabIndex={-1}
          aria-modal="true"
        >
          <div
            className="root-1gCeng small-3iVZYw fullscreenOnMobile-1bD22y"
            style={{ opacity: 1, transform: "scale(1)" }}
          >
            <div
              className="flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6 header-1TKi98"
              id="uid_635"
              style={{ flex: "0 0 auto" }}
            >
              <h2 className="wrapper-1sSZUt fontDisplay-1dagSA base-1x0h_U size20-17Iy80">
                {title}
              </h2>
            </div>
            <div
              className="content-1LAB8Z content-mK72R6 thin-1ybCId scrollerBase-289Jih"
              dir="ltr"
              style={{ overflow: "hidden scroll", paddingRight: "8px" }}
            >
              <div className="colorStandard-2KCXvj size16-1P40sf">
                {text}
              </div>
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  pointerEvents: "none",
                  minHeight: "0px",
                  minWidth: "1px",
                  flex: "0 0 auto",
                  height: "20px",
                }}
              />
            </div>
            <div
              className="flex-1xMQg5 flex-1O1GKY horizontalReverse-2eTKWD horizontalReverse-3tRjY7 flex-1O1GKY directionRowReverse-m8IjIq justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6 footer-2gL1pp"
              style={{ flex: "0 0 auto" }}
            >
              <button
                type="submit"
                className="button-38aScr lookFilled-1Gx00P colorRed-1TFJan sizeMedium-1AC_Sl grow-q77ONN"
                onClick={action}
              >
                <div className="contents-18-Yxp">{accept}</div>
              </button>
              <button
                type="button"
                className="button-38aScr lookLink-9FtZy- lowSaturationUnderline-3svVxy colorPrimary-3b3xI6 sizeMedium-1AC_Sl grow-q77ONN"
                onClick={closeModal}
              >
                <div className="contents-18-Yxp">{cancel}</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ConfirmModal.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ConfirmModal);
