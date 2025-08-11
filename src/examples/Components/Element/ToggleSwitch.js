import _ from 'lodash';
import React, { useEffect, useState } from 'react';

function App({
  name = '',
  id = '',
  title = '',
  className = '',
  disabled = false,
  checked = false,
  value = '',
  displayTitle = true,
  label = '',
  displayLabel = false,
  onChange
}) {
  const [check, setCheck] = useState(checked)
  return (
    <>
      <div class={`toggle_switch ${className}`}>
        {
          displayTitle && (
            <span className="txt">{title}</span>
          )
        }
        {' '}
        <input
          type="checkbox"
          name={name}
          id={id}
          title={label}
          value={value}
          disabled={disabled}
          checked={check}
          onClick={(e) => {
            setCheck(!check)
            onChange?.({ checkd: !check });
          }}
        />
        <label for="chk1">
          {!displayLabel ? (
            <span className='sr-only'>{label}</span>
          ) : (
            `${label}`
          )}
        </label>
      </div>
    </>
  );
}

export default App;
