import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const MembersSidebar = (props) => {
  const { members } = props.server;
  console.log(props);
  return (
    <div className="container-2wlB3z">
      <aside
        style={{ height: "100%" }}
        className="membersWrap-2h-GB4 hiddenMembers-2dcs_q"
        aria-label="Members list for general (channel)"
      >
        <div
          className="members-1998pB thin-1ybCId scrollerBase-289Jih fade-2kXiP2"
          tabIndex={0}
          data-list-id="members-908536260015050773"
          aria-orientation="vertical"
          data-jump-section="global"
          style={{
            overflow: "hidden scroll",
            paddingRight: "0px",
          }}
        >
          <div
            role="list"
            aria-label="Members"
            className="content-3YMskv"
            style={{ height: "300px" }}
          >
            <div style={{ height: "0px" }} />
            <h2
              className="membersGroup-v9BXpm container-2ax-kl"
              aria-label="Online, 1 member"
            >
              <span aria-hidden="true">
                Members — {members && members.length}
              </span>
            </h2>
            {members &&
              members.map((member, index) => (
                <div
                  className="member-3-YXUe container-2Pjhx- clickable-1JJAn8"
                  aria-controls="popout_374"
                  aria-expanded="false"
                  tabIndex={-1}
                  index={0}
                  role="listitem"
                  data-list-item-id="members-908536260015050773___0"
                  data-user-id={member._id}
                >
                  <div className="layout-2DM8Md">
                    <div className="avatar-3uk_u9">
                      <div
                        className="wrapper-3t9DeA"
                        role="img"
                        aria-hidden="false"
                        style={{
                          width: "32px",
                          height: "32px",
                        }}
                        data-user-id={member._id}
                      >
                        <svg
                          width={40}
                          height={32}
                          viewBox="0 0 40 32"
                          className="mask-1l8v16 svg-2V3M55"
                          aria-hidden="true"
                        >
                          <foreignObject
                            x={0}
                            y={0}
                            width={32}
                            height={32}
                            mask="url(#svg-mask-avatar-status-round-32)"
                          >
                            <div className="avatarStack-2Dr8S9">
                              <img
                                src={member.profile_picture}
                                alt=" "
                                className="avatar-VxgULZ"
                                aria-hidden="true"
                              />
                            </div>
                          </foreignObject>
                          <rect
                            width={10}
                            height={10}
                            x={22}
                            y={22}
                            fill="hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)"
                            mask="url(#svg-mask-status-dnd)"
                            className="pointerEvents-2zdfdO"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="content-3QAtGj">
                      <div className="nameAndDecorators-5FJ2dg">
                        <div className="name-uJV0GL">
                          <span className="roleColor-rz2vM0 desaturateUserColors-1gar-1">
                            {member.name}
                          </span>
                        </div>
                      </div>
                      <div className="subText-1KtqkB">
                        <div className="activity-2Gy-9S">
                          <div className="activityText-yGKsKm">
                            
                          </div>
                          <div
                            className="textRuler-wO-qHe activityText-yGKsKm"
                            aria-hidden="true"
                          >
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </aside>{" "}
    </div>
  );
};

MembersSidebar.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(MembersSidebar);
