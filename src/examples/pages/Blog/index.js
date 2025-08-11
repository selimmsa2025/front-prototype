import Breadcrumb from '../../Components/Breadcrumb';
import { Input, Button, Tree, Textarea } from '../../Components/Element';

import { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
export default function App () {
  const [openMenu, setOpenMenu] = useState(true);
  const [description, setDescription] = useState('');
  const [blogTitle, setBlogTitle] = useState('');
  const [checkedCategory, setCheckedCategory] = useState([]);
  const [treeData, setTreeData] = useState([]);
  const [filteredTree, setFilteredTree] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  const changeSearchKeyword = (e) => {
    setSearchKeyword(e.target.value);
    searchTree(e.target.value);
  };
  const getTreeDataList = async () => {
    const response = await axios.get('/mockupServer/getTreeDataList.json');
    setTreeData(response.data);
    setFilteredTree(response.data);
  };
  useEffect(() => {
    getTreeDataList();
  }, []);

  const deleteTreeData = () => {
    setTreeData((prev) => {
      return [...deleteNodes(prev, checkedCategory)];
    });
    setCheckedCategory([]);
  };

  const deleteNodes = (treeData, keysToDelete) => {
    const traverseAndDelete = (nodes) => {
      if (!nodes) return [];

      return nodes.reduce((acc, node) => {
        if (keysToDelete.includes(node.key)) {
          return acc; // Skip this node
        }

        if (node.children) {
          node.children = traverseAndDelete(node.children);
        }

        acc.push(node);
        return acc;
      }, []);
    };

    return traverseAndDelete(treeData);
  };

  const searchTree = (keyword) => {
    if (!_.isEmpty(keyword)) {
      setFilteredTree([...filterTree(treeData, keyword)]);
    } else {
      setFilteredTree([...treeData]);
    }
  };

  const filterTree = (data, keyword) => {
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
  };

  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>내 블로그 관리</h2>
      </div>
      <div class='contents_area'>
        <div class='in-between type_blog'>
          <div class={`blog_left ${openMenu ? 'active' : ''}`}>
            <Button
              as='button'
              color='0'
              class='bg_btn close'
              text=''
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <span class='sr-only'></span>
            </Button>
            {/* <!-- 클릭시 분모 .blog_left에 class="active" 제거 --> */}
            <div class='blog'>
              <div class='bg_head'>
                <span class='profile'>
                  <img src='/img/common/noimage.jpg' alt='' />
                </span>
                <p class='txt'>울트라기관 울트라부서</p>
                <strong class='name'>홍길동 수석연구원</strong>
                <p class='desc'>
                  <i class='ri-user-smile-line'></i> 가난한 모든이들에게 나눔을
                </p>
              </div>
              <div class='bg_body'>
                <ul class='acco-list lnb-list'>
                  <li class='plus'>
                    <a href='#'>카테고리</a>
                    <ul>
                      <li class='active'>
                        <a href='#'>낙서장</a>
                      </li>
                      <li>
                        <a href='#'>부동산 경매정보</a>
                      </li>
                      <li>
                        <a href='#'>산업 동향</a>
                      </li>
                      <li>
                        <a href='#'>경제 동향</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <Button
              as='button'
              color='0'
              class='bg_btn open'
              text=''
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <span class='sr-only'></span>
            </Button>
          </div>

          <div class='contents'>
            <div class='tit_area'>
              <h3 class='h-tit2'>블로그 정보</h3>
            </div>

            <div class='board_list'>
              <table class='tstyle_write'>
                <caption>
                  블로그 정보 - 프로필 이미지, 블로그명, 블로그 설명으로 구성
                </caption>
                <colgroup>
                  <col style={{ width: '14%' }} />
                  <col style={{ width: '22%' }} />
                  <col style={{ width: '14%' }} />
                  <col style={{ width: '31%' }} />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope='row' rowspan='2'>
                      프로필 이미지
                    </th>
                    <td rowspan='2' class='top'>
                      <div class='profile_img type2'>
                        <img src='/img/common/noimage.jpg' alt='' />
                      </div>
                      <input
                        type='file'
                        name='profile_image'
                        title='profile_image'
                        id='profile'
                        class='sr-only'
                      />
                      <div class='txt_right'>
                        <label for='profile' class='btn2 type2'>
                          <span class='sr-only'>프로필 이미지</span>등록
                        </label>
                        <a href='#' class='btn4 type2'>
                          삭제
                        </a>
                      </div>
                    </td>
                    <th scope='row'>블로그명</th>
                    <td>
                      <Input
                        name='blogname'
                        title='blogname'
                        class='form_text'
                        value={blogTitle}
                        onChange={(e) => {
                          setBlogTitle(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>블로그 설명</th>
                    <td>
                      <Textarea
                        class='textarea h150'
                        name=''
                        id=''
                        placeholder='블로그 설명을 입력하세요.'
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                      <p class='count txt_right'>
                        <b>{description.length}</b>/100
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class='tit_area'>
              <h3 class='h-tit3'>카테고리 관리</h3>
            </div>
            <Tree
              treeData={filteredTree}
              onCheck={(checkedKeys, info) => {
                console.log('check test :: ', checkedKeys);
                setCheckedCategory((prev) => {
                  return [...prev, ...checkedKeys];
                });
              }}
            />

            <div class='box_st1 type_category'>
              <div class='form_wrap'>
                <div class='form_group'>
                  <Button as='a' color='2' text='추가' />
                  <Button
                    as='a'
                    color='4'
                    text='삭제'
                    onClick={deleteTreeData}
                  />
                  <strong class='form_label'>카테고리 명</strong>
                  <Input
                    class='form_text'
                    name='frm1'
                    id='frm1'
                    title='카테고리 명'
                    placeholder='카테고리 명'
                    value={searchKeyword}
                    onChange={changeSearchKeyword}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
