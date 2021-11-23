import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import Example from "../util/imageUpload";
import UserBar from "../UserBar";
import "../../stylesheets/user_profile.scss";
import MainSidebar from "./MainSidebar";
import MainContainer from "./MainContainer";
import Chat from '../Chat/Chat'
import UserPanel from './UserPanel'
class Dashboard extends Component {
  constructor() {
    super();
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick(e) {
    e.preventDefault();
    const { props } = this;
    props.logoutUser();
  }

  render() {
    const { auth } = this.props;
    const { user } = auth;
    console.log(user);
    return (
      <>
        <div id="app-mount" className="appMount-3lHmkl">
          <div>
            <svg viewBox="0 0 1 1" aria-hidden="true" style={{ position: 'absolute', pointerEvents: 'none', top: '-1px', left: '-1px', width: '1px', height: '1px' }}><mask id="svg-mask-squircle" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><path fill="white" d="M0 0.464C0 0.301585 0 0.220377 0.0316081 0.158343C0.0594114 0.103776 0.103776 0.0594114 0.158343 0.0316081C0.220377 0 0.301585 0 0.464 0H0.536C0.698415 0 0.779623 0 0.841657 0.0316081C0.896224 0.0594114 0.940589 0.103776 0.968392 0.158343C1 0.220377 1 0.301585 1 0.464V0.536C1 0.698415 1 0.779623 0.968392 0.841657C0.940589 0.896224 0.896224 0.940589 0.841657 0.968392C0.779623 1 0.698415 1 0.536 1H0.464C0.301585 1 0.220377 1 0.158343 0.968392C0.103776 0.940589 0.0594114 0.896224 0.0316081 0.841657C0 0.779623 0 0.698415 0 0.536V0.464Z" /></mask><mask id="svg-mask-header-bar-badge" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><rect fill="white" x={0} y={0} width={1} height={1} /><circle fill="black" cx="0.75" cy="0.75" r="0.25" /></mask><mask id="svg-mask-voice-user-summary-item" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><rect fill="white" width={1} height={1} /><circle fill="black" cx="1.2083333333333333" cy="0.5" r="0.5416666666666666" /></mask><mask id="svg-mask-vertical-fade" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><linearGradient id="svg-mask-vertical-fade-gradient" gradientTransform="rotate(90)" x1={0} x2={1} y1={0} y2={0}><stop offset="0%" stopColor="white" /><stop offset="100%" stopColor="black" /></linearGradient><rect fill="url(#svg-mask-vertical-fade-gradient)" x={0} y={0} width={1} height={1} /></mask><mask id="svg-mask-panel-button" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><rect fill="white" x={0} y={0} width={1} height={1} /><circle fill="black" cx="0.75" cy="0.75" r="0.25" /></mask><mask id="svg-mask-channel-call-control-button" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.8214285714285714" cy="0.8214285714285714" r="0.25" /></mask><mask id="svg-mask-channel-call-control-button-badge-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.6428571428571429" y="-0.07142857142857142" width="0.42857142857142855" height="0.42857142857142855" rx="0.21428571428571427" ry="0.21428571428571427" /></mask><mask id="svg-mask-channel-call-control-button-badge-22" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.5357142857142857" y="-0.07142857142857142" width="0.5357142857142857" height="0.42857142857142855" rx="0.21428571428571427" ry="0.21428571428571427" /></mask><mask id="svg-mask-channel-call-control-button-badge-29" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.4107142857142857" y="-0.07142857142857142" width="0.6607142857142857" height="0.42857142857142855" rx="0.21428571428571427" ry="0.21428571428571427" /></mask><mask id="svg-mask-avatar-default" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /></mask><mask id="svg-mask-avatar-status-round-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.8125" cy="0.8125" r="0.3125" /></mask><mask id="svg-mask-avatar-status-mobile-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.5" y="0.3125" width="0.625" height="0.8125" rx="0.1625" ry="0.1625" /></mask><mask id="svg-mask-avatar-status-typing-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.21875" y="0.5" width="1.1875" height="0.625" rx="0.3125" ry="0.3125" /></mask><mask id="svg-mask-avatar-status-round-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.8333333333333334" cy="0.8333333333333334" r="0.2916666666666667" /></mask><mask id="svg-mask-avatar-status-mobile-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.5416666666666666" y="0.375" width="0.5833333333333334" height="0.75" rx="0.15" ry="0.15" /></mask><mask id="svg-mask-avatar-status-typing-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.2916666666666667" y="0.5416666666666666" width="1.0833333333333333" height="0.5833333333333334" rx="0.2916666666666667" ry="0.2916666666666667" /></mask><mask id="svg-mask-avatar-status-round-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.84375" cy="0.84375" r="0.25" /></mask><mask id="svg-mask-avatar-status-mobile-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.59375" y="0.4375" width="0.5" height="0.65625" rx="0.13125" ry="0.13125" /></mask><mask id="svg-mask-avatar-status-typing-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.359375" y="0.59375" width="0.96875" height="0.5" rx="0.25" ry="0.25" /></mask><mask id="svg-mask-avatar-status-round-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.85" cy="0.85" r="0.25" /></mask><mask id="svg-mask-avatar-status-mobile-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.6" y="0.45" width="0.5" height="0.65" rx="0.13" ry="0.13" /></mask><mask id="svg-mask-avatar-status-typing-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.375" y="0.6" width="0.95" height="0.5" rx="0.25" ry="0.25" /></mask><mask id="svg-mask-avatar-status-round-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.85" cy="0.85" r="0.175" /></mask><mask id="svg-mask-avatar-status-mobile-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.675" y="0.575" width="0.35" height="0.45" rx="0.09" ry="0.09" /></mask><mask id="svg-mask-avatar-status-typing-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.525" y="0.675" width="0.65" height="0.35" rx="0.175" ry="0.175" /></mask><mask id="svg-mask-avatar-status-round-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.8333333333333334" cy="0.8333333333333334" r="0.16666666666666666" /></mask><mask id="svg-mask-avatar-status-mobile-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.6666666666666666" y="0.5666666666666667" width="0.3333333333333333" height="0.43333333333333335" rx="0.08666666666666667" ry="0.08666666666666667" /></mask><mask id="svg-mask-avatar-status-typing-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.5166666666666667" y="0.6666666666666666" width="0.6333333333333333" height="0.3333333333333333" rx="0.16666666666666666" ry="0.16666666666666666" /></mask><mask id="svg-mask-status-online-mobile" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><rect fill="white" x={0} y={0} width={1} height={1} rx="0.1875" ry="0.125" /><rect fill="black" x="0.125" y="0.16666666666666666" width="0.75" height="0.5" /><ellipse fill="black" cx="0.5" cy="0.8333333333333334" rx="0.125" ry="0.08333333333333333" /></mask><mask id="svg-mask-status-online" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /></mask><mask id="svg-mask-status-idle" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.25" cy="0.25" r="0.375" /></mask><mask id="svg-mask-status-dnd" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.125" y="0.375" width="0.75" height="0.25" rx="0.125" ry="0.125" /></mask><mask id="svg-mask-status-offline" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.5" cy="0.5" r="0.25" /></mask><mask id="svg-mask-status-streaming" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><polygon fill="black" points="0.35,0.25 0.78301275,0.5 0.35,0.75" /></mask><mask id="svg-mask-status-typing" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><rect fill="white" cx={0} cy={0} width={1} height={1} ry="0.5" rx="0.2" /></mask><mask id="svg-mask-avatar-voice-call-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.85" cy="0.85" r="0.2" /></mask><mask id="svg-mask-avatar-call-icon" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" opacity={1} /><circle fill="black" cx="0.85" cy="0.15" r="0.2" /></mask><mask id="svg-mask-avatar-call-icon-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" opacity="0.5" /><circle fill="black" cx="0.8" cy="0.25" r="0.325" /></mask><mask id="svg-mask-sticker-rounded-rect" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><path d="M0 0.26087C0 0.137894 0 0.0764069 0.0382035 0.0382035C0.0764069 0 0.137894 0 0.26087 0H0.73913C0.862106 0 0.923593 0 0.961797 0.0382035C1 0.0764069 1 0.137894 1 0.26087V0.73913C1 0.862106 1 0.923593 0.961797 0.961797C0.923593 1 0.862106 1 0.73913 1H0.26087C0.137894 1 0.0764069 1 0.0382035 0.961797C0 0.923593 0 0.862106 0 0.73913V0.26087Z" fill="white" /></mask><mask id="svg-mask-chat-input-button-notification" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><rect width={1} height={1} fill="white" /><circle cx="0.85" cy="0.85" r="0.25" fill="black" /></mask><mask id="svg-mask-sticker-shop-notification" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><rect width={1} height={1} fill="white" /><circle cx="0.9" cy="0.9" r="0.5" fill="black" /></mask><mask id="svg-mask-autocomplete-emoji-upsell-emoji" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><rect fill="white" width={1} height={1} /><circle fill="black" cx="1.33" cy="0.5" r="0.5833333333333334" /></mask><mask id="svg-mask-event-ticket" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><path d="M0 0.12C0 0.0779961 0 0.0569941 0.00408726 0.0409507C0.00768251 0.0268386 0.0134193 0.015365 0.0204754 0.00817451C0.028497 0 0.038998 0 0.06 0H0.94C0.961002 0 0.971503 0 0.979525 0.00817451C0.986581 0.015365 0.992318 0.0268386 0.995913 0.0409507C1 0.0569941 1 0.0779961 1 0.12V0.45C0.986193 0.45 0.975 0.472386 0.975 0.5C0.975 0.527614 0.986193 0.55 1 0.55V0.88C1 0.922004 1 0.943006 0.995913 0.959049C0.992318 0.973161 0.986581 0.984635 0.979525 0.991826C0.971503 1 0.961002 1 0.94 1H0.0600001C0.0389981 1 0.028497 1 0.0204754 0.991826C0.0134193 0.984635 0.00768251 0.973161 0.00408726 0.959049C0 0.943006 0 0.922004 0 0.88V0.55C0.0138071 0.55 0.025 0.527614 0.025 0.5C0.025 0.472386 0.0138071 0.45 0 0.45V0.12Z" fill="white" /></mask></svg>
            <svg viewBox="0 0 1 1" aria-hidden="true" style={{ position: 'absolute', pointerEvents: 'none', top: '-1px', left: '-1px', width: '1px', height: '1px' }}><linearGradient id="e4ba6c38-6a94-4f84-8552-f91b40bf01f1"><stop stopColor="hsl(228, calc(var(--saturation-factor, 1) * 86.7%), 70.6%)" /><stop offset={1} stopColor="hsl(244, calc(var(--saturation-factor, 1) * 100%), 84.1%)" /></linearGradient><linearGradient id="9e73fe9e-046c-4081-9dee-562d97c6485f"><stop stopColor="hsl(270, calc(var(--saturation-factor, 1) * 86.7%), 70.6%)" /><stop offset={1} stopColor="hsl(342, calc(var(--saturation-factor, 1) * 58%), 72.9%)" /></linearGradient><linearGradient id="68903383-89d1-4598-b112-6b1faa49a3b6"><stop stopColor="hsl(221, calc(var(--saturation-factor, 1) * 70%), 55.5%)" /><stop offset={1} stopColor="hsl(269, calc(var(--saturation-factor, 1) * 83.8%), 71%)" /></linearGradient><linearGradient id="8e4b7f77-6c04-4d5f-b783-019e83caaa8d"><stop stopColor="hsl(160, calc(var(--saturation-factor, 1) * 81.3%), 35.7%)" /><stop offset={1} stopColor="hsl(198, calc(var(--saturation-factor, 1) * 81.5%), 46.7%)" /></linearGradient></svg>
            <div style={{ position: 'fixed', opacity: 0, pointerEvents: 'none' }} tabIndex={0} />
          </div>

          <div className="app-1q1i1E">
            <div className="app-2rEoOp">
              <div className="bg-h5JY_x" />
              <div className="layers-3iHuyZ layers-3q14ss">
                <div
                  aria-hidden="false"
                  className="layer-3QrUeG baseLayer-35bLyl"
                >
                  <div className="container-2lgZY8">
                    <MainSidebar />
                    {" "}
                    <div className="base-3dtUhz">
                      <div className="content-98HsJk">
                        <div className="sidebar-2K8pFh">
                          <nav className="privateChannels-1nO12o" aria-label="Private channels">
                            <div
                              className="scroller-1JbKMe thin-1ybCId scrollerBase-289Jih fade-2kXiP2"
                              role="list"
                              tabIndex={0}
                              data-list-id="private-channels-uid_125"
                              aria-orientation="vertical"
                              data-jump-section="global"
                              style={{ overflow: "hidden scroll", paddingRight: "0px" }}
                            >
                              <div className="content-3YMskv" style={{ height: "572px" }}>
                                <div style={{ height: "8px" }} />
                                <h2 className="privateChannelsHeaderContainer-3NB1K1 container-2ax-kl">
                                  <span className="headerText-2F0828">Direct Messages</span>
                                  <div
                                    className="privateChannelRecipientsInviteButtonIcon-3A3uTc iconWrapper-2OrFZ1 clickable-3rdHwn"
                                    role="button"
                                    aria-label="Create DM"
                                    tabIndex={0}
                                  >
                                    <svg
                                      x={0}
                                      y={0}
                                      className="privateChannelRecipientsInviteButtonIcon-3A3uTc icon-22AiRD"
                                      aria-hidden="false"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 18 18"
                                    >
                                      <polygon
                                        fillRule="nonzero"
                                        fill="currentColor"
                                        points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
                                      />
                                    </svg>
                                  </div>
                                </h2>
                                <svg
                                  width={184}
                                  height={428}
                                  viewBox="0 0 184 428"
                                  className="empty-388osJ"
                                >
                                  <rect x={40} y={6} width={144} height={20} rx={10} />
                                  <circle cx={16} cy={16} r={16} />
                                  <rect x={40} y={50} width={144} height={20} rx={10} opacity="0.9" />
                                  <circle cx={16} cy={60} r={16} opacity="0.9" />
                                  <rect x={40} y={94} width={144} height={20} rx={10} opacity="0.8" />
                                  <circle cx={16} cy={104} r={16} opacity="0.8" />
                                  <rect x={40} y={138} width={144} height={20} rx={10} opacity="0.7" />
                                  <circle cx={16} cy={148} r={16} opacity="0.7" />
                                  <rect x={40} y={182} width={144} height={20} rx={10} opacity="0.6" />
                                  <circle cx={16} cy={192} r={16} opacity="0.6" />
                                  <rect x={40} y={226} width={144} height={20} rx={10} opacity="0.5" />
                                  <circle cx={16} cy={236} r={16} opacity="0.5" />
                                  <rect x={40} y={270} width={144} height={20} rx={10} opacity="0.4" />
                                  <circle cx={16} cy={280} r={16} opacity="0.4" />
                                  <rect x={40} y={314} width={144} height={20} rx={10} opacity="0.3" />
                                  <circle cx={16} cy={324} r={16} opacity="0.3" />
                                  <rect x={40} y={358} width={144} height={20} rx={10} opacity="0.2" />
                                  <circle cx={16} cy={368} r={16} opacity="0.2" />
                                  <rect x={40} y={402} width={144} height={20} rx={10} opacity="0.1" />
                                  <circle cx={16} cy={412} r={16} opacity="0.1" />
                                </svg>
                              </div>
                            </div>{" "}
                          </nav>


                          <UserPanel />
                        </div>
                        <div className="peopleColumn-29fq28" role="tabpanel" id="online-tab"><div className="emptyStateContainer-2HsLQm"><div className="friendsEmpty-1K9B4k" style={{ opacity: 1 }}><div className="flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyCenter-3D2jYp alignCenter-1dQNNs noWrap-3jynv6 wrapper-r-6rrt" style={{ flex: '1 1 auto' }}><div className="image-1GzsFd marginBottom40-2vIwTv" style={{ flex: '0 1 auto', width: '421px', height: '218px', backgroundImage: 'url("/assets/b36de980b174d7b798c89f35c116e5c6.svg")' }} /><div className="flexChild-faoVW3" direction="vertical-V37hAW flex-1O1GKY directionColumn-35P_nr" style={{ flex: '0 1 auto' }}><div className="text-GwUZgS marginTop8-1DLZ1n">No one's around to play with Wumpus.</div></div></div></div></div></div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pictureInPicture-3VocJq" />
            </div>
          </div>
          <div />
          <div />
          <div className="layerContainer-yqaFcK" />
          <div className="layerContainer-yqaFcK" />
          <div className="container-2cKKek" />
          <div style={{ position: "fixed", opacity: 0, pointerEvents: "none" }} />
          <div />



        </div>

      </>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
