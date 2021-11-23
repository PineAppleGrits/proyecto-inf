import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import Modal from "react-modal";
import { Link, withRouter} from "react-router-dom";
import CreateServerModal from './CreateServerModal'
import JoinServerModal from './JoinServerModal'
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
const MainSidebar = (props) => {
  const { auth } = props;
  const { user } = auth;

  const [servers, setServers] = useState([]);
  useEffect(() => {
    axios.get("/api/users/" + user.id).then(({ data }) => {
      let serverlist = data;
      console.log(serverlist);
      setServers(serverlist.servers);
    });
  }, []);
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
      <nav
        className="wrapper-3NnKdC guilds-1SWlCJ"
        aria-label="Servers sidebar"
      >
        <ul
          role="tree"
          tabIndex={0}
          data-list-id="guildsnav"
          aria-orientation="vertical"
          data-jump-section="global"
          className="tree-2wKJdG"
        >
          <div className="unreadMentionsIndicatorTop-2-tcdU">
            <div
              className="bar-30k2ka unreadMentionsBar-1Bu1dC unread-1xRYoj active-1SSsBb"
              aria-hidden="true"
              style={{ transform: "translateY(-180%)" }}
            >
              <span className="text-2e2ZyG" />
            </div>
          </div>
          <div
            className="scroller-1Bvpku none-2Eo-qx scrollerBase-289Jih"
            dir="ltr"
            style={{ overflow: "hidden scroll", paddingRight: "0px" }}
          >
            <div className="tutorialContainer-11ICd5">
              <div className="listItem-2Ig28I">
                <div className="pill-gcH-8B wrapper-sa6paO" aria-hidden="true">
                  <span
                    className="item-2hkk8m"
                    style={{ opacity: 1, height: "40px", transform: "none" }}
                  />
                </div>
                <div className="listItemWrapper-2MsAsM">
                  <div className="wrapper-25eVIn">
                    <svg
                      width={48}
                      height={48}
                      viewBox="0 0 48 48"
                      className="svg-1X37T1"
                      overflow="visible"
                    >
                      <defs>
                        <path
                          d="M0 24C0 16.5449 0 12.8174 1.21793 9.87706C2.84183 5.95662 5.95662 2.84183 9.87706 1.21793C12.8174 0 16.5449 0 24 0C31.4551 0 35.1826 0 38.1229 1.21793C42.0434 2.84183 45.1582 5.95662 46.7821 9.87706C48 12.8174 48 16.5449 48 24C48 31.4551 48 35.1826 46.7821 38.1229C45.1582 42.0434 42.0434 45.1582 38.1229 46.7821C35.1826 48 31.4551 48 24 48C16.5449 48 12.8174 48 9.87706 46.7821C5.95662 45.1582 2.84183 42.0434 1.21793 38.1229C0 35.1826 0 31.4551 0 24Z"
                          id="ee3eb5e4-338f-459b-801e-34104886285b-blob_mask"
                        />
                      </defs>
                      <mask
                        id="ee3eb5e4-338f-459b-801e-34104886285b"
                        fill="black"
                        x={0}
                        y={0}
                        width={48}
                        height={48}
                      >
                        <use
                          href="#ee3eb5e4-338f-459b-801e-34104886285b-blob_mask"
                          fill="white"
                        />
                        <rect
                          x={-4}
                          y={-4}
                          width={24}
                          height={24}
                          rx={12}
                          ry={12}
                          transform="translate(-20 -20)"
                          fill="black"
                        />
                        <rect
                          x={-4}
                          y={28}
                          width={24}
                          height={24}
                          rx={12}
                          ry={12}
                          transform="translate(-20 20)"
                          fill="black"
                        />
                      </mask>
                      <foreignObject
                        mask="url(#ee3eb5e4-338f-459b-801e-34104886285b)"
                        x={0}
                        y={0}
                        width={48}
                        height={48}
                      >
                        <div
                          className="wrapper-1BJsBx selected-bZ3Lue"
                          role="listitem"
                          data-list-item-id="guildsnav___home"
                          tabIndex={0}
                          href="/channels/@me/907779823903080510"
                          aria-label="Home"
                        >
                          <div className="childWrapper-anI2G9">
                            <svg class="homeIcon-AaowEC" aria-hidden="false" width="28" height="20" viewBox="0 0 28 20"><path fill="currentColor" d="M 23.021 1.677 C 21.311 0.88 19.508 0.319 17.658 0 C 17.406 0.462 17.848 -0.457 17.644 0.026 C 15.676 -0.271 12.346 -0.293 10.377 0.004 C 10.168 -0.479 10.589 0.462 10.337 0.005 C 8.481 0.324 6.678 0.885 4.967 1.682 C 1.567 6.779 0.65 11.754 1.111 16.652 C 3.101 18.142 5.326 19.274 7.692 20 C 8.223 19.274 8.83 18.252 9.233 17.444 C 8.465 17.153 7.585 17.042 6.877 16.614 C 7.065 16.476 6.663 16.765 6.84 16.611 C 11.007 18.601 16.947 18.601 21.115 16.611 C 21.292 16.759 20.935 16.476 21.117 16.613 C 20.41 17.037 19.552 17.176 18.785 17.467 C 19.193 18.275 19.772 19.269 20.302 19.994 C 22.668 19.269 24.893 18.136 26.883 16.647 L 26.889 16.647 C 27.43 10.973 25.967 6.047 23.021 1.677 Z M 9.68 13.638 C 8.398 13.638 7.341 12.445 7.341 10.994 C 7.341 9.543 8.372 8.35 9.68 8.35 C 10.989 8.35 12.04 9.543 12.019 10.994 C 12.019 12.445 10.983 13.638 9.68 13.638 Z M 18.316 13.638 C 17.033 13.638 15.977 12.445 15.977 10.994 C 15.977 9.543 17.012 8.35 18.316 8.35 C 19.618 8.35 20.675 9.543 20.654 10.994 C 20.654 12.445 19.618 13.638 18.316 13.638 Z" transform="matrix(-1, 0, 0, -1, 27.999896, 20)"><svg class="homeIcon-AaowEC" aria-hidden="false" width="28" height="20" viewBox="0 0 28 20"><path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00546311C8.48074 0.324393 6.67795 0.885118 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"></path></svg></path></svg>
                          </div>
                        </div>
                      </foreignObject>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="listItem-2Ig28I">
              <div className="guildSeparator-nWMCrR" />
            </div>
            {servers && (
              <div aria-label="Servers">
                {servers.map((server, index) => (
                  <Link to={`/channel/${server._id}`}>
                    <div key={index} className="listItem-2Ig28I">
                      <div
                        className="pill-ZqtR4i wrapper-sa6paO"
                        aria-hidden="true"
                      >
                        <span
                          className="item-2hkk8m"
                          style={{
                            opacity: 1,
                            height: "8px",
                            transform: "none",
                          }}
                        />
                      </div>
                      <div>
                        <div
                          data-dnd-name="HelpChat"
                          className="blobContainer-tHk012"
                          draggable="true"
                        >
                          <div className="wrapper-25eVIn">
                            <svg
                              width={48}
                              height={48}
                              viewBox="0 0 48 48"
                              className="svg-1X37T1"
                              overflow="visible"
                            >
                              <defs>
                                <path
                                  d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z"
                                  id="e75fee69-a9f2-4650-8458-0f346197b5e5-blob_mask"
                                />
                              </defs>
                              <mask
                                id="e75fee69-a9f2-4650-8458-0f346197b5e5"
                                fill="black"
                                x={0}
                                y={0}
                                width={48}
                                height={48}
                              >
                                <use
                                  href="#e75fee69-a9f2-4650-8458-0f346197b5e5-blob_mask"
                                  fill="white"
                                />
                                <rect
                                  x={-4}
                                  y={-4}
                                  width={24}
                                  height={24}
                                  rx={12}
                                  ry={12}
                                  transform="translate(-20 -20)"
                                  fill="black"
                                />
                                <rect
                                  x={-4}
                                  y={28}
                                  width={24}
                                  height={24}
                                  rx={12}
                                  ry={12}
                                  transform="translate(-20 20)"
                                  fill="black"
                                />
                              </mask>
                              <foreignObject
                                mask="url(#e75fee69-a9f2-4650-8458-0f346197b5e5)"
                                x={0}
                                y={0}
                                width={48}
                                height={48}
                              >
                                <div
                                  className="wrapper-1BJsBx"
                                  role="treeitem"
                                  data-list-item-id="guildsnav___164280494874165248"
                                  tabIndex={-1}
                                  href="/channels/164280494874165248/164280494874165248"
                                  aria-label=" HelpChat"
                                >
                                  <img
                                    className="icon-27yU2q"
                                    src={server.image}
                                    alt=""
                                    width={48}
                                    height={48}
                                    aria-hidden="true"
                                  />
                                </div>
                              </foreignObject>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="wrapper-2q53zr" aria-hidden="true">
                        <div
                          data-dnd-name="Above HelpChat"
                          className="target-3LqNfV"
                        />
                        <div
                          data-dnd-name="Combine with HelpChat"
                          className="centerTarget-1vR_1-"
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            <div className="tutorialContainer-3alCZm">
              {/* ADD SERVER ICON */}
              <div onClick={openJoinModal} className="listItem-2Ig28I">
                <div className="listItemWrapper-2MsAsM">
                  <div className="wrapperSimple-19ogV2 wrapper-25eVIn">
                    <svg
                      width={48}
                      height={48}
                      viewBox="0 0 48 48"
                      className="svg-1X37T1"
                      overflow="visible"
                    >
                      <foreignObject
                        mask="url(#fc4363f8-7b82-4116-9b5e-e090a629872d)"
                        x={0}
                        y={0}
                        width={48}
                        height={48}
                      >
                        <div
                          className="circleIconButton-hZmpE8"
                          aria-label="Add a server"
                          role="listitem"
                          data-list-item-id="guildsnav___create-join-button"
                          tabIndex={-1}
                        >
                          <svg
                            className="circleIcon-2_77lA"
                            aria-hidden="false"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                            />
                          </svg>
                        </div>
                      </foreignObject>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="wrapper-2q53zr" aria-hidden="true">
                <div
                  data-dnd-name="Above end of list"
                  className="target-3LqNfV"
                />
              </div>
            </div>
            <div className="listItem-2Ig28I">
              <div className="pill-61ft1C">
                <div className="wrapper-sa6paO" aria-hidden="true" />
              </div>
              <div className="listItemWrapper-2MsAsM">
                <div className="wrapperSimple-19ogV2 wrapper-25eVIn">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    className="svg-1X37T1"
                    overflow="visible"
                  >
                    <foreignObject
                      mask="url(#ccfdbed7-37e7-4d9b-a574-b82f856fa557)"
                      x={0}
                      y={0}
                      width={48}
                      height={48}
                    >
                      <div
                        className="circleIconButton-hZmpE8"
                        aria-label="Explore public servers"
                        role="listitem"
                        data-list-item-id="guildsnav___guild-discover-button"
                        tabIndex={-1}
                      >
                        <svg
                          aria-hidden="false"
                          className="circleIcon-2_77lA"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
                          />
                        </svg>
                      </div>
                    </foreignObject>
                  </svg>
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

          <div className="unreadMentionsIndicatorBottom-2mDYbI">
            <div
              className="bar-30k2ka unreadMentionsBar-1Bu1dC unread-1xRYoj active-1SSsBb"
              aria-hidden="true"
              style={{ transform: "translateY(180%)" }}
            >
              <span className="text-2e2ZyG" />
            </div>
          </div>
        </ul>
      </nav>
      <div>
        <Modal
          isOpen={joinModalIsOpen}
          onAfterOpen={afterOpenJoinModal}
          onRequestClose={closeJoinModal}
          style={customStyles}
          contentLabel="Example JoinModal"
          className="focusLock-Ns3yie"
          role="dialog"
          aria-labelledby="uid_163"
        >
          <JoinServerModal closeJoinModal={closeJoinModal} openCreateModal={openCreateModal} /> 
        </Modal>
      </div>
      <div>
        <Modal
          isOpen={createModalIsOpen}
          onAfterOpen={afterOpenCreateModal}
          onRequestClose={closeCreateModal}
          style={customStyles}
          contentLabel="Example JoinModal"
          className="focusLock-Ns3yie"
          role="dialog"
          aria-labelledby="uid_163"
        >
         <CreateServerModal closeCreateModal={closeCreateModal} openJoinModal={openJoinModal} />
        </Modal>
      </div>
    </>
  );
};

MainSidebar.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,

});

export default withRouter(connect(mapStateToProps)(MainSidebar));
