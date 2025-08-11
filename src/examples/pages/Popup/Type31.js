import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import React, { useEffect, useState, useMemo } from 'react';
import Tree from '../../Components/Element/Tree';
import ToggleSwitch from '../../Components/Element/ToggleSwitch';
import _ from 'lodash';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Link,
  useNavigate,
  useSearchParams,
  json,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Breadcrumb from '../../Components/Breadcrumb';
import {
  Input,
  Textarea,
  Select,
  DatePicker,
  Check,
  Radio,
  Button,
  Popup,
  Tooltip,
} from '../../Components/Element';
import CommonPopup from '../../Components/CommonPopup';
import UserBoard from '../../Components/BoardList/UserBoard';
import Pagination from './Components/Pagination';
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
    getFieldState,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(true);
  const [treeData, setTreeData] = useState(undefined);
  const [organizationData, setOrganizationData] = useState(undefined);
  const [selectKey, setSelectKey] = useState('');
  const [selectedOrganizationInfo, setSelectedOrganizationInfo] = useState(undefined);
  const [dataList, setDataList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const searchText = searchParams.get('search');
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedUserList, setSelectedUserList] = useState([]);

  const addUser = (id) => {
    const targetUser = _.find(dataList, { 직원번호: id });
    const user = _.find(selectedUserList, { 직원번호: id });
    if (!user) {
      setSelectedUserList([...selectedUserList, targetUser])
    }
  }
  const deleteUser = (id) => {
    const tempSelectedUserList = _.remove(selectedUserList, (v) => {
      return v.직원번호 !== id;
    });
    setSelectedUserList(tempSelectedUserList)
  }

  const getUserList = async () => {
    const response = await axios.get('/mockupServer/getUserList.json', {
      page: currentPage,
      searchText,
    });

    //sample code
    let data = response.data;
    if (searchText != null) {
      data = _.filter(response.data, (v) => v.이름.indexOf(searchText) != -1);
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const responseData = data.slice(startIndex, endIndex);
    console.log("🚀 ~ getUserList ~ responseData:", responseData)
    setDataList(responseData);
    setTotalCount(data.length);
  };

  useEffect(() => {
    getUserList();
  }, [currentPage, pageSize, searchText]);
  const changePageSize = (e, pageSize) => {
    e.preventDefault();
    setPageSize(pageSize);
  };


  const changeSelectKey = (key) => {
    setSelectKey(selectKey == key ? '' : key);
  };

  const getTreeDataList = async () => {
    const response = await axios.get('/mockupServer/getTreeDataList.json');
    setTreeData(response.data);
  };
  const getOrganizationDataList = async () => {
    const response = await axios.get('/mockupServer/getOrganizationList.json');
    let data = response.data;
    if (selectKey != null) {
      data = _.find(data, (v) => {
        return v.기관아이디 == selectKey
      })
      console.log("🚀 ~ getOrganizationDataList ~ data:", data)
    }
    setSelectedOrganizationInfo(data);
  };
  useEffect(() => {
    getTreeDataList();
  }, []);

  useEffect(() => {
    getOrganizationDataList();
  }, [selectKey,]);

  return (
    <>
      <CommonPopup
        showPopup={showPopup}
        size='large'
        onClose={() => {
          setShowPopup(false);
        }}
        saveButtonTitle='저장'
        closeButtonTitle={'닫기'}
        saveButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        closeButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        title={'이용자 검색'}
      >
        <div class='pop_content'>
          <div className="twin_area">
            <div className="small">
              <div className="form_wrap">
                <div className="form_group wd_full">
                  <Input
                    name='frm7'
                    id='frm7'
                    title='검색어를 입력해주세요.'
                    placeholder='검색어를 입력해주세요.'
                  />
                  <Button as={'a'} href={''} text={'검색'} color={2} />
                </div>
              </div>
              <article className="tree mt_15">
                {treeData && (
                  <Tree treeData={treeData} setSelectKey={setSelectKey} />
                )}
              </article>
            </div>
            <div className="large">
              <div className="box_st1 sch_top_wrap">
                <div className="form_wrap">
                  <div className="form_group">
                    <Input
                      name='frm2'
                      id='frm2'
                      title='검색어를 입력해주세요.'
                      placeholder='검색어를 입력해주세요.'
                    />
                    <Button as={'button'} text={'검색'} color={2} onClick={() => { console.log('onClick') }} />
                  </div>
                </div>
              </div>
              <div className="board_info">
                <p className="page not_line">
                  <span className="total">검색 결과 <b>{totalCount}</b>개</span>
                </p>
              </div>
              <UserBoard dataList={dataList} handleAddUser={addUser} />
              <Pagination
                totalCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={(page) => {
                  const newParams = new URLSearchParams(searchParams);
                  newParams.set('page', page);
                  setSearchParams(newParams);
                }}
              />
            </div>
          </div>
          <div className="board_list mt_25">
            <table className="tstyle_box">
              <caption>선택한 이용자</caption>
              <colgroup>
                <col style={{ width: '15%' }} />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row"><i className="ri-user-3-line"></i> 선택한 이용자</th>
                  <td>
                    <ul className="list_del">
                      {selectedUserList?.map((v, i) => {
                        return (
                          <>
                            <li key={`user-${i}`}>
                              <a href="javascript:void(0)" onClick={() => { deleteUser(v.직원번호) }}>
                                <span>{v.이름}</span>
                                <span>{v.부서} {v.과}</span>
                                <span className="sr-only" >선택삭제</span>
                              </a>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </CommonPopup>

      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>page title</h2>
      </div>
      <div class='contents_area'>
        <Button
          text={'팝업 열기'}
          onClick={() => {
            setShowPopup(!showPopup);
          }}
        />
      </div>
    </>
  );
}

export default App;
