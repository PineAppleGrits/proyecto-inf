import React, { useEffect } from "react";
import MyAccount from "../tabs/MyAccount";
import SettingsTools from "./SettingsTools";
const SettingsContainer = (props) => {
  console.log(props);
  return (
    <>
      <div className="contentRegion-3nDuYy">
        <div className="contentTransitionWrap-3hqOEW">
          <div
            className="contentRegionScroller-26nc1e contentRegionShownSidebar-2VepaU auto-Ge5KZx scrollerBase-289Jih"
            dir="ltr"
            style={{ overflow: "hidden scroll", paddingRight: "0px" }}
          >
            {props.activeTab}
            <SettingsTools />

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
        </div>
      </div>
    </>
  );
};

export default SettingsContainer;
