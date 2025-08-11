import React, { useEffect, useState } from 'react';
import TreeWithTab from '../Components/TreeWithTab';
import axios from 'axios';

function App () {
  const [treeData, setTreeData] = useState(undefined);
  const [selectKey, setSelectKey] = useState('');
  const getTreeDataList = async () => {
    const response = await axios.get('/mockupServer/getTreeDataList.json', {});
    setTreeData(response.data);
  };
  useEffect(() => {
    getTreeDataList();
  }, []);

  const changeSelectKey = (key) => {
    setSelectKey(selectKey == key ? '' : key);
  };
  return (
    <>
      {treeData && (
        <TreeWithTab
          treeData={treeData}
          setSelectKey={changeSelectKey}
          className='left'
        />
      )}
    </>
  );
}

export default App;
