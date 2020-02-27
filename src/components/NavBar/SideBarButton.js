import React from 'react';

import './SideBarButton.css'

const SideBarButton = props => (
    <button className="toggle-button" onClick={props.changeSideBarState}>
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
      <div className="toggle-button__line" />
    </button>
);

export default SideBarButton;