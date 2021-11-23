import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Modal from "react-modal";
import Channels from "./Channels";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 10000,
  },
  content: {
    margin: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    msTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
  },
};
const ServerSidebar = (props) => {
  const { server } = props;
  console.log(server);
  let subtitle;
  const [joinModalIsOpen, setIsJoinOpen] = React.useState(false);
  const [createModalIsOpen, setIsCreateOpen] = React.useState(false);

  function openJoinModal() {
    setIsJoinOpen(true);
  }
  function openCreateModal() {
    setIsCreateOpen(true);
  }

  function afterOpenJoinModal() {}
  function afterOpenCreateModal() {}

  function closeCreateModal() {
    setIsCreateOpen(false);
  }
  function closeJoinModal() {
    setIsJoinOpen(false);
  }

  return (
    <>
      <nav className="container-3w7J-x" aria-label="gino se la come (server)">
        <div className="container-1taM1r clickable-25tGDB">
          <header className="header-2V-4Sw">
            <h1 className="name-1jkAdW">{server.name}</h1>
            <div
              className="headerButton-3in1-b"
              aria-controls="popout_240"
              aria-expanded="false"
              aria-label="gino se la come, server actions"
              role="button"
              tabIndex={0}
            />
            <div className="headerChildren-u4cpg9">
              <svg width={18} height={18} className="button-1w5pas">
                <g fill="none" fillRule="evenodd">
                  <path d="M0 0h18v18H0" />
                  <path
                    stroke="currentColor"
                    d="M4.5 4.5l9 9"
                    strokeLinecap="round"
                  />
                  <path
                    stroke="currentColor"
                    d="M13.5 4.5l-9 9"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>
          </header>
        </div>
        <div className="positionedContainer-3LNR6L">
          <div className="unreadTop-3rAB3r unread-15xhX5 container-35XQWE">
            <div
              className="bar-30k2ka unreadBar-3t3sYc unread-1xRYoj active-1SSsBb"
              aria-hidden="true"
              style={{ transform: "translateY(-180%)" }}
            >
              <span className="text-2e2ZyG">New unreads</span>
            </div>
          </div>
        </div>
        <Channels server={server} channels={server.channels} />
        <div className="unreadBottom-1_LF_w unread-15xhX5 container-35XQWE">
          <div
            className="bar-30k2ka unreadBar-3t3sYc unread-1xRYoj active-1SSsBb"
            aria-hidden="true"
            style={{ transform: "translateY(180%)" }}
          >
            <span className="text-2e2ZyG">New unreads</span>
          </div>
        </div>{" "}
      </nav>

    </>
  );
};

ServerSidebar.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(ServerSidebar);
