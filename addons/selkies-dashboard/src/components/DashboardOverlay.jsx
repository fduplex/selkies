// src/components/DashboardOverlay.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import '../styles/Overlay.css';
import '../styles/fduplex-customizations.css';  // fduplex: Hide screen settings controls

function DashboardOverlay({ container }) {

  if (!container) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="dashboard-overlay-container">
      <Sidebar />
    </div>,
    container
  );
}

export default DashboardOverlay;
