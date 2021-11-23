import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import {useParams} from 'react-router-dom';
import { connect } from "react-redux";
import MainSidebar from "./MainSidebar";
import Channels from './Channels'
import ServerSidebar from './ServerSidebar'
import MembersSidebar from './MembersSidebar'
import UserPanel from './UserPanel'
import './messages.scss'
const axios = require('axios');
const MainContainer = (props) => {
  const {serverId, channelId} = useParams();
  const [server,setServer] = useState({});
  const [activeChannel,setChannel] = useState({});
  useEffect(() => {
    console.log(serverId)
    axios.get('/api/servers/'+serverId).then(({data}) => {
      console.log(data)

      setServer(data);
    })
  }, [serverId]);
  useEffect(() => {
    for(let channel in server.channels){
      if(server.channels[channel]._id == channelId){
        setChannel(server.channels[channel]);
      }
    }
    }, [channelId])
  return (
    <>
      <div id="app-mount" className="appMount-3lHmkl">
      <div>
  <svg viewBox="0 0 1 1" aria-hidden="true" style={{position: 'absolute', pointerEvents: 'none', top: '-1px', left: '-1px', width: '1px', height: '1px'}}><mask id="svg-mask-squircle" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><path fill="white" d="M0 0.464C0 0.301585 0 0.220377 0.0316081 0.158343C0.0594114 0.103776 0.103776 0.0594114 0.158343 0.0316081C0.220377 0 0.301585 0 0.464 0H0.536C0.698415 0 0.779623 0 0.841657 0.0316081C0.896224 0.0594114 0.940589 0.103776 0.968392 0.158343C1 0.220377 1 0.301585 1 0.464V0.536C1 0.698415 1 0.779623 0.968392 0.841657C0.940589 0.896224 0.896224 0.940589 0.841657 0.968392C0.779623 1 0.698415 1 0.536 1H0.464C0.301585 1 0.220377 1 0.158343 0.968392C0.103776 0.940589 0.0594114 0.896224 0.0316081 0.841657C0 0.779623 0 0.698415 0 0.536V0.464Z" /></mask><mask id="svg-mask-header-bar-badge" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><rect fill="white" x={0} y={0} width={1} height={1} /><circle fill="black" cx="0.75" cy="0.75" r="0.25" /></mask><mask id="svg-mask-voice-user-summary-item" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><rect fill="white" width={1} height={1} /><circle fill="black" cx="1.2083333333333333" cy="0.5" r="0.5416666666666666" /></mask><mask id="svg-mask-vertical-fade" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><linearGradient id="svg-mask-vertical-fade-gradient" gradientTransform="rotate(90)" x1={0} x2={1} y1={0} y2={0}><stop offset="0%" stopColor="white" /><stop offset="100%" stopColor="black" /></linearGradient><rect fill="url(#svg-mask-vertical-fade-gradient)" x={0} y={0} width={1} height={1} /></mask><mask id="svg-mask-panel-button" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><rect fill="white" x={0} y={0} width={1} height={1} /><circle fill="black" cx="0.75" cy="0.75" r="0.25" /></mask><mask id="svg-mask-channel-call-control-button" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.8214285714285714" cy="0.8214285714285714" r="0.25" /></mask><mask id="svg-mask-channel-call-control-button-badge-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.6428571428571429" y="-0.07142857142857142" width="0.42857142857142855" height="0.42857142857142855" rx="0.21428571428571427" ry="0.21428571428571427" /></mask><mask id="svg-mask-channel-call-control-button-badge-22" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.5357142857142857" y="-0.07142857142857142" width="0.5357142857142857" height="0.42857142857142855" rx="0.21428571428571427" ry="0.21428571428571427" /></mask><mask id="svg-mask-channel-call-control-button-badge-29" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.4107142857142857" y="-0.07142857142857142" width="0.6607142857142857" height="0.42857142857142855" rx="0.21428571428571427" ry="0.21428571428571427" /></mask><mask id="svg-mask-avatar-default" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /></mask><mask id="svg-mask-avatar-status-round-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.8125" cy="0.8125" r="0.3125" /></mask><mask id="svg-mask-avatar-status-mobile-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.5" y="0.3125" width="0.625" height="0.8125" rx="0.1625" ry="0.1625" /></mask><mask id="svg-mask-avatar-status-typing-16" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.21875" y="0.5" width="1.1875" height="0.625" rx="0.3125" ry="0.3125" /></mask><mask id="svg-mask-avatar-status-round-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.8333333333333334" cy="0.8333333333333334" r="0.2916666666666667" /></mask><mask id="svg-mask-avatar-status-mobile-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.5416666666666666" y="0.375" width="0.5833333333333334" height="0.75" rx="0.15" ry="0.15" /></mask><mask id="svg-mask-avatar-status-typing-24" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.2916666666666667" y="0.5416666666666666" width="1.0833333333333333" height="0.5833333333333334" rx="0.2916666666666667" ry="0.2916666666666667" /></mask><mask id="svg-mask-avatar-status-round-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.84375" cy="0.84375" r="0.25" /></mask><mask id="svg-mask-avatar-status-mobile-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.59375" y="0.4375" width="0.5" height="0.65625" rx="0.13125" ry="0.13125" /></mask><mask id="svg-mask-avatar-status-typing-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.359375" y="0.59375" width="0.96875" height="0.5" rx="0.25" ry="0.25" /></mask><mask id="svg-mask-avatar-status-round-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.85" cy="0.85" r="0.25" /></mask><mask id="svg-mask-avatar-status-mobile-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.6" y="0.45" width="0.5" height="0.65" rx="0.13" ry="0.13" /></mask><mask id="svg-mask-avatar-status-typing-40" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.375" y="0.6" width="0.95" height="0.5" rx="0.25" ry="0.25" /></mask><mask id="svg-mask-avatar-status-round-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.85" cy="0.85" r="0.175" /></mask><mask id="svg-mask-avatar-status-mobile-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.675" y="0.575" width="0.35" height="0.45" rx="0.09" ry="0.09" /></mask><mask id="svg-mask-avatar-status-typing-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.525" y="0.675" width="0.65" height="0.35" rx="0.175" ry="0.175" /></mask><mask id="svg-mask-avatar-status-round-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.8333333333333334" cy="0.8333333333333334" r="0.16666666666666666" /></mask><mask id="svg-mask-avatar-status-mobile-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.6666666666666666" y="0.5666666666666667" width="0.3333333333333333" height="0.43333333333333335" rx="0.08666666666666667" ry="0.08666666666666667" /></mask><mask id="svg-mask-avatar-status-typing-120" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.5166666666666667" y="0.6666666666666666" width="0.6333333333333333" height="0.3333333333333333" rx="0.16666666666666666" ry="0.16666666666666666" /></mask><mask id="svg-mask-status-online-mobile" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><rect fill="white" x={0} y={0} width={1} height={1} rx="0.1875" ry="0.125" /><rect fill="black" x="0.125" y="0.16666666666666666" width="0.75" height="0.5" /><ellipse fill="black" cx="0.5" cy="0.8333333333333334" rx="0.125" ry="0.08333333333333333" /></mask><mask id="svg-mask-status-online" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /></mask><mask id="svg-mask-status-idle" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.25" cy="0.25" r="0.375" /></mask><mask id="svg-mask-status-dnd" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><rect fill="black" x="0.125" y="0.375" width="0.75" height="0.25" rx="0.125" ry="0.125" /></mask><mask id="svg-mask-status-offline" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.5" cy="0.5" r="0.25" /></mask><mask id="svg-mask-status-streaming" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><polygon fill="black" points="0.35,0.25 0.78301275,0.5 0.35,0.75" /></mask><mask id="svg-mask-status-typing" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><rect fill="white" cx={0} cy={0} width={1} height={1} ry="0.5" rx="0.2" /></mask><mask id="svg-mask-avatar-voice-call-80" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" /><circle fill="black" cx="0.85" cy="0.85" r="0.2" /></mask><mask id="svg-mask-avatar-call-icon" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" opacity={1} /><circle fill="black" cx="0.85" cy="0.15" r="0.2" /></mask><mask id="svg-mask-avatar-call-icon-32" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><circle fill="white" cx="0.5" cy="0.5" r="0.5" opacity="0.5" /><circle fill="black" cx="0.8" cy="0.25" r="0.325" /></mask><mask id="svg-mask-sticker-rounded-rect" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><path d="M0 0.26087C0 0.137894 0 0.0764069 0.0382035 0.0382035C0.0764069 0 0.137894 0 0.26087 0H0.73913C0.862106 0 0.923593 0 0.961797 0.0382035C1 0.0764069 1 0.137894 1 0.26087V0.73913C1 0.862106 1 0.923593 0.961797 0.961797C0.923593 1 0.862106 1 0.73913 1H0.26087C0.137894 1 0.0764069 1 0.0382035 0.961797C0 0.923593 0 0.862106 0 0.73913V0.26087Z" fill="white" /></mask><mask id="svg-mask-chat-input-button-notification" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><rect width={1} height={1} fill="white" /><circle cx="0.85" cy="0.85" r="0.25" fill="black" /></mask><mask id="svg-mask-sticker-shop-notification" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><rect width={1} height={1} fill="white" /><circle cx="0.9" cy="0.9" r="0.5" fill="black" /></mask><mask id="svg-mask-autocomplete-emoji-upsell-emoji" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><rect fill="white" width={1} height={1} /><circle fill="black" cx="1.33" cy="0.5" r="0.5833333333333334" /></mask><mask id="svg-mask-event-ticket" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1"><path d="M0 0.12C0 0.0779961 0 0.0569941 0.00408726 0.0409507C0.00768251 0.0268386 0.0134193 0.015365 0.0204754 0.00817451C0.028497 0 0.038998 0 0.06 0H0.94C0.961002 0 0.971503 0 0.979525 0.00817451C0.986581 0.015365 0.992318 0.0268386 0.995913 0.0409507C1 0.0569941 1 0.0779961 1 0.12V0.45C0.986193 0.45 0.975 0.472386 0.975 0.5C0.975 0.527614 0.986193 0.55 1 0.55V0.88C1 0.922004 1 0.943006 0.995913 0.959049C0.992318 0.973161 0.986581 0.984635 0.979525 0.991826C0.971503 1 0.961002 1 0.94 1H0.0600001C0.0389981 1 0.028497 1 0.0204754 0.991826C0.0134193 0.984635 0.00768251 0.973161 0.00408726 0.959049C0 0.943006 0 0.922004 0 0.88V0.55C0.0138071 0.55 0.025 0.527614 0.025 0.5C0.025 0.472386 0.0138071 0.45 0 0.45V0.12Z" fill="white" /></mask></svg>
  <svg viewBox="0 0 1 1" aria-hidden="true" style={{position: 'absolute', pointerEvents: 'none', top: '-1px', left: '-1px', width: '1px', height: '1px'}}><linearGradient id="e4ba6c38-6a94-4f84-8552-f91b40bf01f1"><stop stopColor="hsl(228, calc(var(--saturation-factor, 1) * 86.7%), 70.6%)" /><stop offset={1} stopColor="hsl(244, calc(var(--saturation-factor, 1) * 100%), 84.1%)" /></linearGradient><linearGradient id="9e73fe9e-046c-4081-9dee-562d97c6485f"><stop stopColor="hsl(270, calc(var(--saturation-factor, 1) * 86.7%), 70.6%)" /><stop offset={1} stopColor="hsl(342, calc(var(--saturation-factor, 1) * 58%), 72.9%)" /></linearGradient><linearGradient id="68903383-89d1-4598-b112-6b1faa49a3b6"><stop stopColor="hsl(221, calc(var(--saturation-factor, 1) * 70%), 55.5%)" /><stop offset={1} stopColor="hsl(269, calc(var(--saturation-factor, 1) * 83.8%), 71%)" /></linearGradient><linearGradient id="8e4b7f77-6c04-4d5f-b783-019e83caaa8d"><stop stopColor="hsl(160, calc(var(--saturation-factor, 1) * 81.3%), 35.7%)" /><stop offset={1} stopColor="hsl(198, calc(var(--saturation-factor, 1) * 81.5%), 46.7%)" /></linearGradient></svg>
  <div style={{position: 'fixed', opacity: 0, pointerEvents: 'none'}} tabIndex={0} />
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
                      {server &&
                        <ServerSidebar 
                      server={server}
                      />
                      }
                        <UserPanel />
                      </div>
                      <div className="chat-3bRxxu">
                        <div className="uploadArea-1qnBZm uploadArea-3QgLtW">
                          <div className="uploadDropModal-2kTwbc">
                            <div className="bgScale-1otPtc" />
                            <div className="inner-3nWsbo">
                              <div className="icons-1w691d">
                                <div className="wrapOne-14G98n">
                                  <div className="icon-kyxXVr one-2crnLX" />
                                </div>
                                <div className="wrapThree-1CNQ42">
                                  <div className="icon-kyxXVr three-27ScFD" />
                                </div>
                                <div className="wrapTwo-mQGI3R">
                                  <div className="icon-kyxXVr two-3BBQI9" />
                                </div>
                              </div>
                              <div className="title-2Vtl4y">
                                Upload to <strong>#general</strong>
                              </div>
                              <div className="instructions-2Du9gG">
                                <pre>
                                  You can add comments before uploading.{"\n"}
                                  Hold shift to upload directly.
                                </pre>
                              </div>
                            </div>
                          </div>
                        </div>
                        <section
                          className="title-3qD0b- container-1r6BKw themed-ANHk51"
                          aria-label="Channel header"
                        >
                          <div className="children-19S4PO">
                            <div className="iconWrapper-2OrFZ1">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                className="icon-22AiRD"
                                x={0}
                                y={0}
                                aria-hidden="true"
                              >
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"
                                />
                              </svg>
                            </div>
                            <span className="hiddenVisually-3S9wil">
                              Text channel
                            </span>
                            <h3 className="title-29uC1r fontDisplay-1dagSA base-1x0h_U size16-1P40sf">
                              {activeChannel.name}
                            </h3>
                          </div>
                          <div className="toolbar-1t6TWx">
                            <div
                              className="icon-iDUzSK iconWrapper-2OrFZ1 clickable-3rdHwn"
                              role="button"
                              aria-label="Threads"
                              tabIndex={0}
                            >
                              <svg
                                x={0}
                                y={0}
                                className="icon-22AiRD"
                                aria-hidden="false"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  fill="currentColor"
                                  d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z"
                                />
                              </svg>
                            </div>
                            <div
                              className="iconWrapper-2OrFZ1 clickable-3rdHwn"
                              role="switch"
                              aria-label="Mute channel general"
                              aria-checked="false"
                              tabIndex={0}
                            >
                              <svg
                                x={0}
                                y={0}
                                className="icon-22AiRD"
                                aria-hidden="false"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M18 9V14C18 15.657 19.344 17 21 17V18H3V17C4.656 17 6 15.657 6 14V9C6 5.686 8.686 3 12 3C15.314 3 18 5.686 18 9ZM11.9999 21C10.5239 21 9.24793 20.19 8.55493 19H15.4449C14.7519 20.19 13.4759 21 11.9999 21Z"
                                />
                              </svg>
                            </div>
                            <div
                              className="iconWrapper-2OrFZ1 clickable-3rdHwn"
                              role="button"
                              aria-label="Pinned messages"
                              tabIndex={0}
                            >
                              <svg
                                x={0}
                                y={0}
                                className="icon-22AiRD"
                                aria-hidden="false"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  d="M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z"
                                />
                              </svg>
                            </div>
                            <div
                              className="iconWrapper-2OrFZ1 clickable-3rdHwn selected-1GqIat"
                              role="button"
                              aria-label="Hide Member List"
                              tabIndex={0}
                            >
                              <svg
                                x={0}
                                y={0}
                                className="icon-22AiRD"
                                aria-hidden="false"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                                />
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                                />
                              </svg>
                            </div>
                            <div className="search-36MZv-">
                              <div className="search-2oPWTC">
                                <div className="searchBar-3dMhjb">
                                  <div className="DraftEditor-root">
                                    <div className="public-DraftEditorPlaceholder-root">
                                      <div
                                        className="public-DraftEditorPlaceholder-inner"
                                        id="placeholder-did7e"
                                        style={{ whiteSpace: "pre-wrap" }}
                                      >
                                        Search
                                      </div>
                                    </div>
                                    <div className="DraftEditor-editorContainer">
                                      <div
                                        aria-describedby="placeholder-did7e"
                                        aria-expanded="false"
                                        className="notranslate public-DraftEditor-content"
                                        contentEditable="true"
                                        role="combobox"
                                        spellCheck="false"
                                        style={{
                                          outline: "none",
                                          userSelect: "text",
                                          whiteSpace: "pre-wrap",
                                          overflowWrap: "break-word",
                                        }}
                                        aria-haspopup="listbox"
                                      >
                                        <div data-contents="true">
                                          <div
                                            className
                                            data-block="true"
                                            data-editor="did7e"
                                            data-offset-key="4nped-0-0"
                                          >
                                            <div
                                              data-offset-key="4nped-0-0"
                                              className="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"
                                            >
                                              <span data-offset-key="4nped-0-0">
                                                <br data-text="true" />
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="icon-38sknP iconLayout-1WxHy4 small-1lPjda"
                                    tabIndex={-1}
                                    aria-hidden="true"
                                    aria-label="Clear search"
                                    role="button"
                                  >
                                    <div className="iconContainer-O4O2CN">
                                      <svg
                                        className="icon-3cZ1F_ visible-3V0mGj"
                                        aria-hidden="false"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z"
                                        />
                                      </svg>
                                      <svg
                                        className="icon-3cZ1F_"
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
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="iconWrapper-2OrFZ1 clickable-3rdHwn"
                              role="button"
                              aria-label="Inbox"
                              tabIndex={0}
                            >
                              <svg
                                x={0}
                                y={0}
                                className="icon-22AiRD"
                                aria-hidden="false"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>
                            <a
                              tabIndex={-1}
                              className="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB"
                              href="https://support.discord.com"
                              rel="noreferrer noopener"
                              target="_blank"
                            >
                              <div
                                className="iconWrapper-2OrFZ1 clickable-3rdHwn"
                                role="button"
                                aria-label="Help"
                                tabIndex={0}
                              >
                                <svg
                                  x={0}
                                  y={0}
                                  className="icon-22AiRD"
                                  aria-hidden="false"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </section>
                        <div className="content-yTz4x3">
                          <main
                            className="chatContent-a9vAAp"
                            aria-label="general (channel)"
                          >
                            {props.component}
                          </main>
                          <MembersSidebar server={server} />
                        </div>
                      </div>
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
       {/*  <div className="" role="dialog" aria-labelledby="uid_163" tabIndex={-1} aria-modal="true"><div className="root-1gCeng small-3iVZYw fullscreenOnMobile-1bD22y" style={{opacity: 1, transform: 'scale(1)'}}><div className="container-1CE3eW"><div style={{position: 'relative', overflow: 'hidden', width: '440px', height: '436px'}}><div style={{position: 'absolute', display: 'block', backfaceVisibility: 'hidden', width: '440px', transform: 'translate3d(0px, -50%, 0px) scale(1, 1)', top: '50%', left: 'auto', right: 'auto'}}><div><div className="flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6 header-1TKi98 header-1Xr5FO" id="uid_167" style={{flex: '0 0 auto'}}><h3 className="title-XLSR78 fontDisplay-1dagSA base-1x0h_U size24-RIRrxO">Join a server</h3><div className="colorHeaderSecondary-3Sp3Ft size14-e6ZScH">Enter an invite below to join an existing server</div><button aria-label="Close" type="button" className="closeButton-1RFOLl close-hZ94c6 button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN"><div className="contents-18-Yxp"><svg className="closeIcon-150W3V" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" /></svg></div></button></div><div className="content-1LAB8Z thin-1ybCId scrollerBase-289Jih" dir="ltr" style={{overflow: 'hidden scroll', paddingRight: '8px'}}><form className="inputForm-N3LGqy"><div><h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ formTitle-aeXUoN">Invite link<span className="required-7sPBq3">*</span></h5><div className="inputWrapper-31_8H8 input--jS-j2"><input className="inputDefault-_djjkz input-cIJ7To inputInner-2akrSS" placeholder="https://discord.gg/hTKzmak" name type="text" maxLength={999} defaultValue /></div></div></form><div className="examplesForm-1PzAn-"><h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ formTitle-aeXUoN">Invites should look like</h5><div className="sampleLink-2NLvZg" role="button" tabIndex={0}>hTKzmak</div><div className="sampleLink-2NLvZg" role="button" tabIndex={0}>https://discord.gg/hTKzmak</div><div className="sampleLink-2NLvZg" role="button" tabIndex={0}>https://discord.gg/cool-people</div></div><div className="rowContainer-3AFY0S" role="button" tabIndex={0}><img width={40} height={40} className="rowIcon-1SU_MO" alt="" src="/assets/d759f3acc6286c964cc8118d7f68b374.svg" /><div><h3 className="rowText-X45Our fontDisplay-1dagSA base-1x0h_U size16-1P40sf">Don't have an invite?</h3><div className="colorStandard-2KCXvj size12-3cLvbJ rowText-X45Our">Check out public communities in Server Discovery.</div></div><img className="rowArrow-368CBY" alt="" src="/assets/dea5252276408a8bfca6dda585ca5216.svg" /></div><div aria-hidden="true" style={{position: 'absolute', pointerEvents: 'none', minHeight: '0px', minWidth: '1px', flex: '0 0 auto', height: '0px'}} /></div><div className="flex-1xMQg5 flex-1O1GKY horizontalReverse-2eTKWD horizontalReverse-3tRjY7 flex-1O1GKY directionRowReverse-m8IjIq justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6 footer-2gL1pp footer-2ZvXOl" style={{flex: '0 0 auto'}}><button type="button" className="button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMedium-1AC_Sl grow-q77ONN"><div className="contents-18-Yxp">Join server</div></button><button type="button" className="button-38aScr lookLink-9FtZy- lowSaturationUnderline-3svVxy colorPrimary-3b3xI6 sizeMin-1mJd1x grow-q77ONN"><div className="contents-18-Yxp">Back</div></button></div></div></div></div></div></div></div>
<div className="" role="dialog" aria-labelledby="uid_163" tabIndex={-1} aria-modal="true"><div className="root-1gCeng small-3iVZYw fullscreenOnMobile-1bD22y" style={{opacity: 1, transform: 'scale(1)'}}><div className="container-1CE3eW"><div style={{position: 'relative', overflow: 'hidden', width: '440px', height: '404px'}}><div style={{position: 'absolute', display: 'block', backfaceVisibility: 'hidden', width: '440px', transform: 'translate3d(0px, -50%, 0px) scale(1, 1)', top: '50%', left: 'auto', right: 'auto'}}><div className="flex-1xMQg5 flex-1O1GKY vertical-V37hAW flex-1O1GKY directionColumn-35P_nr justifyStart-2NDFzi alignCenter-1dQNNs noWrap-3jynv6 header-1TKi98 header-287ONi" id="uid_173" style={{flex: '0 0 auto'}}><h3 className="title-Z_XiOC fontDisplay-1dagSA base-1x0h_U size24-RIRrxO">Customise your server</h3><div className="colorHeaderSecondary-3Sp3Ft size16-1P40sf subtitle-1KdHaN">Give your new server a personality with a name and an icon. You can always change it later.</div><button aria-label="Close" type="button" className="closeButton-26zew5 close-hZ94c6 button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN"><div className="contents-18-Yxp"><svg className="closeIcon-150W3V" aria-hidden="false" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z" /></svg></div></button></div><div className="content-1LAB8Z createGuild-23lWNm thin-1ybCId scrollerBase-289Jih" dir="ltr" style={{overflow: 'hidden scroll', paddingRight: '8px'}}><div className="uploadIcon-2IFzZU"><div className="iconContainer-2B0ixr desaturate-qhyunI"><svg width={80} height={80} viewBox="0 0 80 80" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M54.8694 2.85498C53.8065 2.4291 52.721 2.04752 51.6153 1.71253L51.3254 2.66957L51.0354 3.62661C51.9783 3.91227 52.9057 4.23362 53.8161 4.58911C54.1311 3.98753 54.4832 3.40847 54.8694 2.85498ZM75.4109 26.1839C76.0125 25.8689 76.5915 25.5168 77.145 25.1306C77.5709 26.1935 77.9525 27.279 78.2875 28.3847L77.3304 28.6746L76.3734 28.9646C76.0877 28.0217 75.7664 27.0943 75.4109 26.1839ZM78.8148 43.8253L79.8102 43.9222C79.9357 42.6318 80 41.3234 80 40C80 38.6766 79.9357 37.3682 79.8102 36.0778L78.8148 36.1747L77.8195 36.2715C77.9389 37.4977 78 38.7414 78 40C78 41.2586 77.9389 42.5023 77.8195 43.7285L78.8148 43.8253ZM43.8253 1.18515L43.9222 0.189853C42.6318 0.0642679 41.3234 0 40 0C38.6766 0 37.3682 0.064268 36.0778 0.189853L36.1747 1.18515L36.2715 2.18045C37.4977 2.06112 38.7414 2 40 2C41.2586 2 42.5023 2.06112 43.7285 2.18045L43.8253 1.18515ZM28.6746 2.66957L28.3847 1.71253C25.8549 2.47897 23.4312 3.48925 21.1408 4.71604L21.6129 5.59756L22.0851 6.47907C24.2606 5.3138 26.5624 4.35439 28.9646 3.62661L28.6746 2.66957ZM15.2587 9.85105L14.6239 9.0784C12.5996 10.7416 10.7416 12.5996 9.0784 14.6239L9.85105 15.2587L10.6237 15.8935C12.2042 13.9699 13.9699 12.2042 15.8935 10.6237L15.2587 9.85105ZM5.59756 21.6129L4.71604 21.1408C3.48925 23.4312 2.47897 25.8549 1.71253 28.3847L2.66957 28.6746L3.62661 28.9646C4.35439 26.5624 5.3138 24.2607 6.47907 22.0851L5.59756 21.6129ZM0 40C0 38.6766 0.0642679 37.3682 0.189853 36.0778L1.18515 36.1747L2.18045 36.2715C2.06112 37.4977 2 38.7414 2 40C2 41.2586 2.06112 42.5023 2.18045 43.7285L1.18515 43.8253L0.189853 43.9222C0.064268 42.6318 0 41.3234 0 40ZM2.66957 51.3254L1.71253 51.6153C2.47897 54.1451 3.48926 56.5688 4.71604 58.8592L5.59756 58.3871L6.47907 57.9149C5.3138 55.7394 4.35439 53.4376 3.62661 51.0354L2.66957 51.3254ZM9.85105 64.7413L9.0784 65.3761C10.7416 67.4004 12.5996 69.2584 14.6239 70.9216L15.2587 70.1489L15.8935 69.3763C13.9699 67.7958 12.2042 66.0301 10.6237 64.1065L9.85105 64.7413ZM21.6129 74.4024L21.1408 75.284C23.4312 76.5107 25.8549 77.521 28.3847 78.2875L28.6746 77.3304L28.9646 76.3734C26.5624 75.6456 24.2607 74.6862 22.0851 73.5209L21.6129 74.4024ZM36.1747 78.8148L36.0778 79.8102C37.3682 79.9357 38.6766 80 40 80C41.3234 80 42.6318 79.9357 43.9222 79.8102L43.8253 78.8148L43.7285 77.8195C42.5023 77.9389 41.2586 78 40 78C38.7414 78 37.4977 77.9389 36.2715 77.8195L36.1747 78.8148ZM51.3254 77.3304L51.6153 78.2875C54.1451 77.521 56.5688 76.5107 58.8592 75.284L58.3871 74.4024L57.9149 73.5209C55.7394 74.6862 53.4376 75.6456 51.0354 76.3734L51.3254 77.3304ZM64.7413 70.1489L65.3761 70.9216C67.4004 69.2584 69.2584 67.4004 70.9216 65.3761L70.1489 64.7413L69.3763 64.1065C67.7958 66.0301 66.0301 67.7958 64.1065 69.3763L64.7413 70.1489ZM74.4024 58.3871L75.284 58.8592C76.5107 56.5688 77.521 54.1451 78.2875 51.6153L77.3304 51.3254L76.3734 51.0354C75.6456 53.4375 74.6862 55.7393 73.5209 57.9149L74.4024 58.3871Z" fill="currentColor" /><circle cx={68} cy={12} r={12} fill="#5865f2" /><path d="M73.3332 11.4075H68.5924V6.66675H67.4072V11.4075H62.6665V12.5927H67.4072V17.3334H68.5924V12.5927H73.3332V11.4075Z" fill="white" /><path d="M40 29C37.794 29 36 30.794 36 33C36 35.207 37.794 37 40 37C42.206 37 44 35.207 44 33C44 30.795 42.206 29 40 29Z" fill="currentColor" /><path d="M48 26.001H46.07C45.402 26.001 44.777 25.667 44.406 25.111L43.594 23.891C43.223 23.335 42.598 23 41.93 23H38.07C37.402 23 36.777 23.335 36.406 23.89L35.594 25.11C35.223 25.667 34.598 26 33.93 26H32C30.895 26 30 26.896 30 28V39C30 40.104 30.895 41 32 41H48C49.104 41 50 40.104 50 39V28C50 26.897 49.104 26.001 48 26.001ZM40 39C36.691 39 34 36.309 34 33C34 29.692 36.691 27 40 27C43.309 27 46 29.692 46 33C46 36.31 43.309 39 40 39Z" fill="currentColor" /><path d="M24.6097 52.712V47.72H22.5457V52.736C22.5457 53.792 22.0777 54.404 21.1417 54.404C20.2177 54.404 19.7377 53.78 19.7377 52.712V47.72H17.6737V52.724C17.6737 55.04 19.0897 56.132 21.1177 56.132C23.1217 56.132 24.6097 55.016 24.6097 52.712ZM26.0314 56H28.0834V53.252H28.6114C30.6154 53.252 31.9474 52.292 31.9474 50.42C31.9474 48.62 30.7114 47.72 28.6954 47.72H26.0314V56ZM29.9554 50.456C29.9554 51.308 29.4514 51.704 28.5394 51.704H28.0594V49.268H28.5754C29.4874 49.268 29.9554 49.664 29.9554 50.456ZM37.8292 56L37.5532 54.224H35.0092V47.72H32.9572V56H37.8292ZM45.9558 51.848C45.9558 49.292 44.4078 47.564 42.0078 47.564C39.6078 47.564 38.0478 49.304 38.0478 51.872C38.0478 54.428 39.6078 56.156 41.9838 56.156C44.3958 56.156 45.9558 54.404 45.9558 51.848ZM43.8918 51.86C43.8918 53.504 43.1958 54.548 41.9958 54.548C40.8078 54.548 40.0998 53.504 40.0998 51.86C40.0998 50.216 40.8078 49.172 41.9958 49.172C43.1958 49.172 43.8918 50.216 43.8918 51.86ZM52.2916 56.084L54.3676 55.748L51.4876 47.684H49.2316L46.2556 56H48.2716L48.8236 54.284H51.6916L52.2916 56.084ZM50.2516 49.796L51.1756 52.676H49.3156L50.2516 49.796ZM62.5174 51.848C62.5174 49.388 61.0174 47.72 58.1374 47.72H55.2814V56H58.1854C60.9814 56 62.5174 54.308 62.5174 51.848ZM60.4534 51.86C60.4534 53.636 59.5414 54.404 58.0774 54.404H57.3334V49.316H58.0774C59.4814 49.316 60.4534 50.12 60.4534 51.86Z" fill="currentColor" /></svg><input className="file-input" type="file" tabIndex={0} accept=".jpg,.jpeg,.png,.gif" style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', opacity: 0, cursor: 'pointer', fontSize: '0px'}} /></div></div><form><div className="nameInput-2LpnKg"><h5 className="colorStandard-2KCXvj size14-e6ZScH h5-18_1nd title-3sZWYQ defaultMarginh5-2mL-bP">Server name</h5><div className="inputWrapper-31_8H8"><input className="inputDefault-_djjkz input-cIJ7To" type="text" maxLength={100} name placeholder defaultValue="Grits's server" /></div></div><div className="colorMuted-HdFt4q size12-3cLvbJ guidelines-1NSoht">By creating a server, you agree to Discord's <strong><a className="anchor-3Z-8Bb anchorUnderlineOnHover-2ESHQB" href="//discord.com/guidelines" rel="noreferrer noopener" target="_blank">Community Guidelines</a></strong>.</div></form><div aria-hidden="true" style={{position: 'absolute', pointerEvents: 'none', minHeight: '0px', minWidth: '1px', flex: '0 0 auto', height: '0px'}} /></div><div className="flex-1xMQg5 flex-1O1GKY horizontalReverse-2eTKWD horizontalReverse-3tRjY7 flex-1O1GKY directionRowReverse-m8IjIq justifyBetween-2tTqYu alignStretch-DpGPf3 noWrap-3jynv6 footer-2gL1pp" style={{flex: '0 0 auto'}}><button type="button" className="button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMedium-1AC_Sl grow-q77ONN"><div className="contents-18-Yxp">Create</div></button><button type="button" className="button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 sizeMin-1mJd1x grow-q77ONN"><div className="contents-18-Yxp">Back</div></button></div></div></div></div></div></div>
 */}



      </div>

      <p>MainContainer</p>
    </>
  );
};

MainContainer.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(MainContainer);
