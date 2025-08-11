import _ from 'lodash';
import React, { useEffect, useState, forwardRef } from 'react';
import axios from 'axios';
import Tree, { TreeNode } from 'rc-tree';

function App(params) {
  const {
    treeData = [
      {
        key: '0-0',
        title: 'parent 1',
        children: [
          {
            key: '0-0-0',
            title: 'parent 1-1',
            children: [{ key: '0-0-0-0', title: 'parent 1-1-0' }],
          },
          {
            key: '0-0-1',
            title: 'parent 1-2',
            children: [
              { key: '0-0-1-0', title: 'parent 1-2-0', disableCheckbox: true },
              { key: '0-0-1-1', title: 'parent 1-2-1' },
              { key: '0-0-1-2', title: 'parent 1-2-2' },
              { key: '0-0-1-3', title: 'parent 1-2-3' },
              { key: '0-0-1-4', title: 'parent 1-2-4' },
              { key: '0-0-1-5', title: 'parent 1-2-5' },
              { key: '0-0-1-6', title: 'parent 1-2-6' },
              { key: '0-0-1-7', title: 'parent 1-2-7' },
              { key: '0-0-1-8', title: 'parent 1-2-8' },
              { key: '0-0-1-9', title: 'parent 1-2-9' },
              { key: 1128, title: 1128 },
            ],
          },
        ],
      },
    ],
    setSelectKey,
  } = params;

  const onExpand = (expandedKeys) => {
    console.log('onExpand', expandedKeys);
  };

  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    setSelectKey?.(info.node.key);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
    params.onCheck?.(checkedKeys, info);
  };

  const onEdit = () => { };

  const onDel = (e) => {
    if (!window.confirm('sure to delete?')) {
      return;
    }
    e.stopPropagation();
  };
  const flattenNestedTree = (array, result = []) => {
    array.forEach(function (el) {
      result.push(el);
      if (el.children) {
        flattenNestedTree(el.children, result);
      } else {
      }
    });
    return result;
  };
  return (
    <>
      <Tree
        className=''
        showLine
        checkable
        selectable={true}
        defaultExpandAll
        onExpand={onExpand}
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
      />
    </>
  );
}

export default App;
