import { useEffect, useState } from 'react';
import Tree from './Element/Tree';
import { Input } from './Element';
import _ from 'lodash';

export default function App (params) {
  const { setSelectKey, className } = params;
  const [treeData, setTreeData] = useState([...params.treeData]);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    setTreeData([...params.treeData]);
  }, [params.treeData]);

  const [searchKeyword, setSearchKeyword] = useState('');

  const changeSearchKeyword = (e) => {
    setSearchKeyword(e.target.value);
  };

  const searchTree = () => {
    if (!_.isEmpty(searchKeyword)) {
      setTreeData([...filterTree(params.treeData, searchKeyword)]);
    } else {
      setTreeData([...params.treeData]);
    }
  };

  function filterTree (data, keyword) {
    return data
      .map((item) => {
        const newItem = { ...item };

        if (item.children) {
          newItem.children = filterTree(item.children, keyword);
        }

        if (
          newItem.title.toString().includes(keyword) ||
          (newItem.children && newItem.children.length > 0)
        ) {
          return newItem;
        }
        return null;
      })
      .filter((item) => item !== null);
  }

  const changeTab = (index) => {
    setTabIndex(index);
  };

  return (
    <>
      <div className={`left_tree ${className || ''}`}>
        <div className='tab_depth4'>
          <ul>
            <li className={`${tabIndex == 0 ? 'active' : ''}`}>
              <a href='javascript:;' onClick={() => changeTab(0)}>
                탭1
              </a>
            </li>
            <li className={`${tabIndex == 1 ? 'active' : ''}`}>
              <a href='javascript:;' onClick={() => changeTab(1)}>
                탭2
              </a>
            </li>
          </ul>
        </div>
        {tabIndex == 0 ? (
          <>
            <fieldset>
              <legend className='blind'>폴더파일 검색</legend>
              <Input
                name='folder_frm'
                id='folder_frm'
                title='folder_frm'
                placeholder='검색어를 입력해주세요.'
                value={searchKeyword}
                onChange={changeSearchKeyword}
                onKeyDown={(e) => {
                  if (e.key == 'Enter') {
                    searchTree();
                  }
                }}
              />
              <button
                type='button'
                className='btn2'
                onClick={() => {
                  searchTree();
                  console.log('test :: ', searchKeyword);
                }}
              >
                검색
              </button>
              <button type='button' className='btn4 ico_only arr'>
                <span className='sr-only'>위로</span>
                <i className='ri-arrow-up-s-line'></i>
              </button>
              <button type='button' className='btn4 ico_only arr'>
                <span className='sr-only'>아래로</span>
                <i className='ri-arrow-down-s-line'></i>
              </button>
            </fieldset>
            <article class='tree'>
              <Tree treeData={treeData} setSelectKey={setSelectKey} />
            </article>
          </>
        ) : tabIndex == 1 ? (
          <>
            <div></div>
          </>
        ) : null}
      </div>
    </>
  );
}
