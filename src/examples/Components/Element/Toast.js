import { useState, useEffect } from 'react';

export default function Toast ({ title, show }) {
  return (
    <>
      <div class={`toast ${show ? 'active' : ''}`}>{title}</div>
    </>
  );
}
