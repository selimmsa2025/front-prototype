import _ from 'lodash';
import React, { useEffect, useState } from 'react';

function App (params) {
  return (
    <>
      <select
        {..._.omit(params, ['data', 'register'])}
        class={`form_sel ${params.class}`}
        title={params.title ? params.title : '조건을 선택하세요.'}
        {...params.register}
      >
        {params.data.map((v) => {
          return <option value={v.id}>{v.name}</option>;
        })}
      </select>
    </>
  );
}

export default App;
