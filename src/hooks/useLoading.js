import { useState, useCallback, useEffect } from 'react';

import { createPortal } from 'react-dom';
import useScrollBlock from './useScrollBlock';

export default function useLoading (initValue) {
  const hasWindow = typeof window !== 'undefined';

  const [blockScroll, allowScroll] = useScrollBlock();
  const [loading, setLoading] = useState(initValue);
  // const [loading, setLoading] = useLocalStorage("loading", initValue)

  useEffect(() => {
    if (loading) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [loading]);

  const LoadingElement =
    hasWindow && loading
      ? () =>
          createPortal(
            <div className='ajax-spinner-bars'>
              <div className='bar-1'></div>
              <div className='bar-2'></div>
              <div className='bar-3'></div>
              <div className='bar-4'></div>
              <div className='bar-5'></div>
              <div className='bar-6'></div>
              <div className='bar-7'></div>
              <div className='bar-8'></div>
            </div>,
            document.body,
          )
      : () => null;

  return {
    loading,
    setLoading,
    LoadingElement,
  };
}
