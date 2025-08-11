import React, { useEffect, useState } from 'react';
import CommonPopup from '../../Components/CommonPopup';
import Breadcrumb from '../../Components/Breadcrumb';
import Table from '../../Components/Table';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Pagination from '../../Components/Board/Pagination';
import _ from 'lodash';
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
const columns = [
  { id: 'number', header: '번호' },
  { id: 'column', header: 'cloumn' },
];
const columns2 = [
  { id: 'number', header: '번호' },
  { id: 'column1', header: 'cloumn' },
  { id: 'column2', header: 'cloumn' },
  { id: 'column3', header: 'cloumn' },
  { id: 'column4', header: 'cloumn' },
  { id: 'column5', header: 'cloumn' },
];
const data = [
  { number: '1', column: '내용' },
  { number: '2', column: '내용' },
  { number: '3', column: '내용' },
];
const data2 = [
  {
    number: '1',
    column1: '내용',
    column2: '내용',
    column3: '내용',
    column4: '내용',
    column5: '내용',
  },
  {
    number: '2',
    column1: '내용',
    column2: '내용',
    column3: '내용',
    column4: '내용',
    column5: '내용',
  },
  {
    number: '3',
    column1: '내용',
    column2: '내용',
    column3: '내용',
    column4: '내용',
    column5: '내용',
  },
  {
    number: '4',
    column1: '내용',
    column2: '내용',
    column3: '내용',
    column4: '내용',
    column5: '내용',
  },
  {
    number: '5',
    column1: '내용',
    column2: '내용',
    column3: '내용',
    column4: '내용',
    column5: '내용',
  },
  {
    number: '6',
    column1: '내용',
    column2: '내용',
    column3: '내용',
    column4: '내용',
    column5: '내용',
  },
];
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm();
  const [tableData, setTableData] = useState([]);
  const [tableData2, setTableData2] = useState([]);
  const [showPopup, setShowPopup] = useState(true);
  const [pageSize, setPageSize] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const onSubmit = (data) => {
    console.log('🚀 ~ onSubmit ~ data:', data);
  };
  useEffect(() => {
    setTableData(data);
  });
  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const responseData = data2.slice(startIndex, endIndex);

    setTableData2(responseData);
    setTotalCount(data2.length);
    // setTableData2(data2);
  }, [currentPage]);

  const [tagKey, setTagKey] = useState(1);
  const [tagList, setTagList] = useState([{ key: 1, title: '태그1' }]);

  const addTag = () => {
    setTagList((prev) => {
      return [...prev, { key: tagKey + 1, title: `태그${tagKey + 1}` }];
    });
    setTagKey(tagKey + 1);
  };

  const removeTag = (key) => {
    setTagList((prev) => {
      return [..._.filter(prev, (v) => v.key != key)];
    });
  };

  return (
    <>
      {/* <!-- 팝업 --> */} {/*<!-- 팝업 보여질 경우 .active 추가 -->*/}
      <CommonPopup
        showPopup={showPopup}
        size='middle'
        onClose={() => {
          setShowPopup(false);
        }}
        closeButtonTitle={'닫기'}
        closeButtonOnClick={(e) => {
          reset();
          setShowPopup(false);
        }}
        title={'권한그룹 검색'}
      >
        <div class='pop_content'>
          <div class='box_st1 sch_top_wrap'>
            <div class='form_wrap'>
              <div class='form_group'>
                <Input
                  type='text'
                  class='form_text'
                  name='frm2'
                  id='frm2'
                  title='검색어를 입력해주세요.'
                  placeholder='검색어를 입력해주세요.'
                  register={register('search', {})}
                />
                <Button as='button' color='2' text='검색' />
              </div>
            </div>
          </div>
          <div class='board_list'>
            <Table
              colgroup={['20%']}
              columns={columns}
              data={tableData}
              className='tstyle_list'
            />
          </div>
          <div class='use_filter top_bd_not'>
            <strong class='tit'>선택한 권한</strong>
            <button
              type='button'
              class='btn_f_reset'
              title='필터 초기화'
              onClick={() => {
                addTag();
              }}
            >
              <span class='sr_only'>필터 초기화</span>
            </button>
            <div class='filter_col'>
              {tagList.map((tag) => {
                return (
                  <>
                    <button
                      type='button'
                      title='삭제'
                      onClick={() => {
                        removeTag(tag.key);
                      }}
                    >
                      {tag.title}
                      <i class='sr_only'>제거</i>
                    </button>
                  </>
                );
              })}
            </div>
          </div>

          <div class='box_st1 sch_top_wrap mt_30'>
            <div class='form_wrap'>
              <div class='form_group'>
                <Input
                  type='text'
                  class='form_text'
                  name='frm2'
                  id='frm2'
                  title='검색어를 입력해주세요.'
                  placeholder='검색어를 입력해주세요.'
                  register={register('search2', {})}
                />
                <Button as='button' color='2' text='검색' />
              </div>
            </div>
          </div>
          <div class='board_info'>
            <p class='page not_line'>
              <span class='total'>
                검색 결과 <b>{totalCount}</b>개
              </span>
            </p>
          </div>
          <div class='board_list'>
            <Table
              colgroup={['10%', '', '10%', '15%', '10%']} //px , %등 단위 표시필요.
              columns={columns2}
              data={tableData2}
              className='tstyle_list'
            />
          </div>
          <Pagination
            totalCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={(page) => {
              setCurrentPage(page);
            }}
          />
        </div>
        <div class='sm_btn_box fr'></div>
      </CommonPopup>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>page title</h2>
      </div>
      <div class='contents_area'>
        <Button
          text={'팝업열기'}
          onClick={() => {
            setShowPopup(!showPopup);
          }}
        />
      </div>
    </>
  );
}

export default App;
