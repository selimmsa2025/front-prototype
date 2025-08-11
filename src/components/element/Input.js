import React, { useEffect, useState } from 'react';
import _ from 'lodash';
function App (params) {
  return (
    <>
      <input
        {..._.omit(params, ['register', 'type'])}
        type={params.type ? params.type : 'text'}
        className={`form_text ${params.className ? params.className : params.class ? params.class : ''}`}
        {...params.register}
        {...params.style}
      />
    </>
  );
}

export default App;
