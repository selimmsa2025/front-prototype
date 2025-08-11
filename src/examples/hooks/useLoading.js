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
            <div class='ajax-spinner-bars'>
              <div class='bar-1'></div>
              <div class='bar-2'></div>
              <div class='bar-3'></div>
              <div class='bar-4'></div>
              <div class='bar-5'></div>
              <div class='bar-6'></div>
              <div class='bar-7'></div>
              <div class='bar-8'></div>
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
