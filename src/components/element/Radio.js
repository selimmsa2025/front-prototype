import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { Tooltip } from '.';

function App (params) {
  return (
    <>
      <ul className={`chk_list ${params.className ? params.className : params.class || ''}`}>
        {params.data.map((v, i) => {
          return (
            <li>
              <div className='form_chk'>
                <input
                  {..._.omit(params, ['name', 'data', 'register'])}
                  type='radio'
                  name={params.name}
                  id={`${params.name}-${i}`}
                  value={v.value}
                  checked={v.checked == true ? true : false}
                  disabled={v.disabled == true ? true : false}
                  {...params.register}
                />
                <label htmlFor={`${params.name}-${i}`}>{v.title}</label>{' '}
                {params.useTooltip ? (
                  <>
                    <Tooltip
                      contents={
                        '도움말 제목' +
                        '[행사등록전 테스트용] 메뉴를 이용해주시기 바랍니다.'
                      }
                      onShow={() => {
                        console.log('onShow');
                      }}
                      onClose={() => {
                        console.log('onClose');
                      }}
                    />
                  </>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
