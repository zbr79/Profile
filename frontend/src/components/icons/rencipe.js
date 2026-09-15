import React from 'react';

const RencipeIcon = () => (
  <svg
    viewBox="0 0 512 512"
    role="img"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="rencipe-nav-gradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#d4a017" />
        <stop offset="1" stopColor="#b8860b" />
      </linearGradient>
    </defs>
    <rect width="512" height="512" rx="96" fill="url(#rencipe-nav-gradient)" />
    <path
      fill="#fffdf7"
      fillRule="evenodd"
      d="M154 360V152h116c49 0 80 28 80 72 0 34-18 58-47 70l62 66h-57l-56-60h-47v60h-51Zm51-103h61c20 0 32-12 32-32 0-21-13-34-34-34h-59v66Z"
    />
  </svg>
);

export default RencipeIcon;
