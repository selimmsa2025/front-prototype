import React, { useEffect, useState } from 'react';
import _ from 'lodash';

function App(params) {
  const { as = 'a', color = 1, size = 2, text = '버튼', children } = params;

  const onClick = (e) => {
    if (as == 'a') {
      e.preventDefault();
    }
    params.onClick?.(e);
  };
  if (as == 'a') {
    return (
      <a
        {..._.omit(params, ['as', 'color', 'size'])}
        href='javascript:void(0)'
        class={`btn${color} ${size == 1 ? 'type2' : size == 3 ? 'type1' : ''}${params.class ? params.class : ''
          }`}
        onClick={(e) => {
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
        {..._.omit(params, ['as', 'color', 'size'])}
        class={`btn${color} ${size == 2 ? 'size_md' : ''} ${params.class ? params.class : ''
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
