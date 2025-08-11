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
        size='middle'
        onClose={() => {
          setShowPopup(false);
        }}
        saveButtonTitle='선택'
        closeButtonTitle={'닫기'}
        saveButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        closeButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        title={'기관 검색'}
      >
        <div class='pop_content'>
          <div className="twin_area">
            <div className="">
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
              <div className="toggle_switch">
                {/* <span className="txt">소속기관 검색</span>
                <input type="checkbox" name="chk" id="chk1" title="소속기관 검색" checked />
                <label for="chk1"><span className="sr-only">소속기관 검색 허용</span></label> */}
                <ToggleSwitch
                  title='소속기관 검색'
                  id='chk1'
                  name='chk'
                  value='1'
                  disabled={false}
                  checked={true}
                  displayTitle={true}
                  className={'type_right'}
                  label='소속기관 검색 허용'
                  displayLabel={false}
                  onChange={({ checkd }) => { console.log(`onChange value = ${checkd}`) }}
                />
              </div>
              <article class="tree">
                {treeData && (
                  <Tree treeData={treeData} setSelectKey={setSelectKey} />
                )}
              </article>
            </div>
            <div className="">
              <div className="tit_area">
                <h3 className="h-tit3">기관정보</h3>
              </div>
              <div className="board_list">
                <table className="tstyle_write h45">
                  <caption>기관정보 - 기관명, 기관유형로 구성</caption>
                  <colgroup>
                    <col style={{ width: '30%' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">기관명</th>
                      <td>{selectedOrganizationInfo?.기관명}</td>
                    </tr>
                    <tr>
                      <th scope="row">기관유형</th>
                      <td>{selectedOrganizationInfo?.기관유형}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
