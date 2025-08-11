import _ from 'lodash';
import React, { useEffect, useState } from 'react';

function App (params) {
  return (
    <>
      <ul className={`chk_list ${params.className ? params.className : params.class || ''}`} style={params.style || {}}>
        {params.data.map((v, i) => {
          const displayTitle = v.displayTitle;
          return (
            <li className={`${v.liClass || ''}`}>
              <div
                className={`form_chk ${params.icoOnly != false ? '' : ''}`}
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
                <label htmlFor={`${params.name}-${i}`} className={v.className ? v.className : v.class || ''}>
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
