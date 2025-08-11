import React, { useState, useEffect, useRef } from 'react';

const RangeInput = ({
  initialValue = 20,
  max = 100,
  min = 0,
  step = 1,
  onChange = (value) => {},
}) => {
  const [value, setValue] = useState(initialValue);
  const rangeRef = useRef(null);

  useEffect(() => {
    updateGradient();
  }, []);

  const updateGradient = () => {
    const gradientValue = 100 / rangeRef.current.max;
    const gradientStyle = `linear-gradient(to right, #9E48FF 0%, #3174E1 ${
      gradientValue * value
    }%, #edf1f5 ${gradientValue * value}%, #edf1f5 100%)`;
    rangeRef.current.style.background = gradientStyle;
  };

  const handleRangeChange = (event) => {
    setValue(event.target.value);
    updateGradient();
    onChange?.(event.target.value);
  };

  return (
    <input
      type='range'
      name='range1'
      id='range1'
      className='rangeInput'
      max={max}
      min={min}
      step={step}
      value={value}
      onChange={handleRangeChange}
      ref={rangeRef}
      style={{ width: '100%' }}
    />
  );
};

export default RangeInput;
