import React, { useEffect, useState } from 'react';
import _ from 'lodash';
function App (params) {
  return (
    <>
      <input
        {..._.omit(params, ['register', 'type'])}
        type={params.type ? params.type : 'text'}
        class={`form_text ${params.class ? params.class : ''}`}
        {...params.register}
      />
    </>
  );
}

export default App;
