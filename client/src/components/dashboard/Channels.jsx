import React from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const Channels = (props) => {
  const {serverId,channelId} = useParams();
  return (
    <div
      className="scroller-RmtA4e thin-1ybCId scrollerBase-289Jih fade-2kXiP2"
      aria-label="Channels"
      orientation="vertical"
      id="channels"
      tabIndex={0}
      data-jump-section="global"
      style={{
        overflow: "hidden scroll",
        paddingRight: "0px",
      }}
    >
      <div className="content-3YMskv" style={{ height: "266px" }}>
        <div style={{ height: "0px" }} />
        <div
          className="containerDefault-3tr_sE"
          data-dnd-name="Canales de texto"
          draggable="true"
        >
          <div
            className="iconVisibility-fhcwiH wrapper-PY0fhH clickable-536fPF"
            role="listitem"
          >
            <div
              className="mainContent-2h-GEV"
              tabIndex={-1}
              data-list-item-id="channels___908536260015050772"
              aria-label="Canales de texto (category)"
              aria-expanded="true"
              role="button"
            >
              <svg
                className="arrow-gKvcEx icon-2yIBmh"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
                />
              </svg>
              <h2 className="name-3l27Hl container-2ax-kl">
                <div className="overflow-WK9Ogt">Canales de texto</div>
              </h2>
            </div>
            <div className="children-L002ao" />
          </div>
        </div>
        {props.channels && (
          props.channels.map((channel,index) => (
            <div className="containerDefault--pIXnN">
          <div className="iconVisibility-sTNpHs wrapper-2jXpOf" role="listitem">
            <div className="content-1x5b-n">
              <Link to={`/channel/${serverId}/${channel._id}`}
              className="mainContent-u_9PKf"
              >

                <div aria-label="Text" className="iconContainer-1BBaeJ">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className="icon-1DeIlz"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
                    />
                  </svg>
                </div>
                <div className="name-23GUGE overflow-WK9Ogt" aria-hidden="true">
                  <div className="channelName-2YrOjO">{channel.name}</div>
                </div>
                </Link>

              <div className="children-3rEycc">
                <div
                  className="iconItem-F7GRxr iconBase-3LOlfs"
                  aria-label="Create invite"
                  tabIndex={0}
                  role="button"
                  >
                  <svg
                    className="actionIcon-PgcMM2"
                    aria-hidden="true"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"
                    />
                    <path
                      fill="currentColor"
                      d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"
                    />
                    <path
                      fill="currentColor"
                      d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
          ))
        )}
      </div>
    </div>
  );
};

Channels.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Channels);
