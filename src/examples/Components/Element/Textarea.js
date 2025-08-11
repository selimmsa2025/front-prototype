import React, { useEffect, useState } from 'react';
import _ from 'lodash';
function App (params) {
  return (
    <>
      <textarea
        {..._.omit(params, ['register'])}
        className={`${params.class ? params.class : ''}`}
        {...params.register}
      ></textarea>
    </>
  );
}

export default App;
