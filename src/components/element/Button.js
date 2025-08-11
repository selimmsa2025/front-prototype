import React, { useEffect, useState } from 'react';
import _ from 'lodash';

function App(params) {
  const { as = 'a', color = 1, size = 2, text = '', children } = params;

  const onClick = (e) => {
    if (as == 'a') {
      e.preventDefault();
    }
    params.onClick?.(e);
  };
  if (as == 'a') {
    return (
      <a
        {..._.omit(params, ['as', 'color', 'size', 'text'])}
        href="/"
        style={{ cursor: 'pointer' }}
        className={`btn${color} ${size == 1 ? 'type2' : size == 3 ? '' : ''
          }${params.className ? params.className : params.class ? params.class : ''
          }`}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {text}
        {children}
      </a>
    );
  } else if (as == 'button') {
    return (
      <button
        {..._.omit(params, ['as', 'color', 'size', 'text'])}
        className={`btn${color} ${size == 2 ? 'size_md' : ''} ${params.className ? params.className : params.class ? params.class : ''
          }`}
        onClick={(e) => {
          onClick(e);
        }}
      >
        {text}
        {children}
      </button>
    );
  } else {
    return null;
  }
}

export default App;
