import _ from 'lodash';
import React, { useEffect, useState } from 'react';

function App({
  contents,
  onShow,
  onClose,
}) {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className={`desc_bubble ${active ? 'active' : ''}`}>
        <button type="button" className="open" onClick={(e) => { e.preventDefault(); setActive(!active); onShow?.(); }}>
          <span className="sr-only">설명창열기</span><i className="ri-information-2-fill"></i>
        </button>
        <div className="speech">
          <p>{contents}</p>
          <button type="button" className="close" onClick={(e) => { e.preventDefault(); setActive(false); onClose?.(); }}>
            <span className="sr-only">설명창닫기</span><i className="ri-close-line"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
