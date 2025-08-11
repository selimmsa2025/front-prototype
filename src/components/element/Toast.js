import { useState, useEffect } from 'react';

export default function Toast ({ title, show }) {
  return (
    <>
      <div className={`toast ${show ? 'active' : ''}`}>{title}</div>
    </>
  );
}
