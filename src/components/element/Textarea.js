import React, { useEffect, useState } from 'react';
import _ from 'lodash';
function App(params) {
  return (
    <>
      <textarea
        {..._.omit(params, ['register'])}
        className={`${params.className ? params.className : params.class}`}
        {...params.register}
      ></textarea>
    </>
  );
}

export default App;
