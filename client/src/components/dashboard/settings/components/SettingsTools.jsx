import React from "react";
const SettingsTools = (props) => {
  return(
    <div className="toolsContainer-1edPuj">
    <div className="tools-3-3s-N">
      <div className="container-1sFeqf">
        <div
          className="closeButton-1tv5uR"
          aria-label="Close"
          role="button"
          tabIndex={0}
        >
          <svg aria-hidden="true" width={18} height={18} viewBox="0 0 24 24">
            <path
              fill="hsl(210, calc(var(--saturation-factor, 1) * 2.9%), 86.7%)"
              d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
            />
          </svg>
        </div>
        <div
          onClick={props.closeModal}
          className="keybind-KpFkfr"
          aria-hidden="true"
        >
          ESC
        </div>
      </div>
    </div>
  </div>
  )
};

export default SettingsTools;