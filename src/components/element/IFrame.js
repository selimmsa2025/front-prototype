import React from 'react';

const IFrame = () => {
  return (
    <div>
      <iframe
        id="uploadIFrame1"
        name="uploadIFrame1"
        style={{ display: 'none', visibility: 'hidden' }}
        src="url"
      />
    </div>
  );
};

export default IFrame;
