import _ from 'lodash';
import React, { useEffect, useState } from 'react';

function App (params) {
  return (
    <>
      <ul class={`chk_list ${params.class || ''}`} style={params.style || {}}>
        {params.data.map((v, i) => {
          const displayTitle = v.displayTitle;
          return (
            <li className={`${v.liClass || ''}`}>
              <div
                class={`form_chk ${params.icoOnly != false ? 'ico_only' : ''}`}
              >
                <input
                  {..._.omit(params, ['name', 'data', 'style', 'register'])}
                  type='checkbox'
                  name={params.name}
                  id={`${params.name}-${i}`}
                  value={v.value}
                  disabled={v.disabled == true ? true : false}
                  checked={v.checked == true ? true : false}
                  {...params.register}
                />
                <label for={`${params.name}-${i}`} className={v.class || ''}>
                  {displayTitle == false ? (
                    <span className='sr-only'>{v.title}</span>
                  ) : (
                    `${v.title}`
                  )}
                </label>
              </div>
              {v.liChild && v.liChild}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
