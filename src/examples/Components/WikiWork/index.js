import WorkWikiList from './WorkWikiList';
import Pagination from '../Board/Pagination';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import DateRangePicker from '../DateRangePicker';
import { Input, Button, Check, DatePicker } from '../Element';
import _ from 'lodash';
import axios from 'axios';
export default function WorkWiki({ }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dataList, setDataList] = useState([]);
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const [searchText, setSearchText] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [showPopup1, setShowPopup1] = useState(false);
  const [totalCount, setTotalCount] = useState(dataList?.length || 0);

  const getWorkWikiList = async () => {
    const response = await axios.get('/mockupServer/getWorkWikiList.json', {
      page: currentPage,
      searchText,
    });

    //sample code
    let data = response.data;
    if (searchText != null) {
      data = _.filter(response.data, (v) => v.title.indexOf(searchText) != -1);
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const responseData = data.slice(startIndex, endIndex);
    setDataList(responseData);
    setTotalCount(data.length);
  };
  useEffect(() => {
    getWorkWikiList();
  }, [currentPage, pageSize]);

  const changePageSize = (e, pageSize) => {
    e.preventDefault();
    setPageSize(pageSize);
    setShowPopup1(!showPopup1);
  };

  const search = () => {
    getWorkWikiList();
  };

  return (
    <>
      <div className='box_st4 sch_top_wrap sch_wiki'>
        <div className='form_wrap'>
          <div class='form_group wd_full'>
            <strong class='form_label auto'>위키명</strong>
            <Input
              name='frm1'
              id='frm1'
              title='검색어를 입력해주세요.'
              placeholder='검색어를 입력해주세요.'
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </div>
          <div className='form_group wd_full'>
            <strong class='form_label auto'>공동편집자</strong>
            <Input
              type='text'
              class='form_text size_xmd'
              name='frm0_1'
              id='frm0_1'
              title='검색어를 입력해주세요.'
              placeholder='검색어를 입력해주세요.'
            />
            <Button as='button' type='submit' color='1' text='검색' />
            <Check
              name='chk_1'
              data={[
                {
                  value: '1',
                  title: '내가 편집자인 자료',
                  displayTitle: true,
                  checked: true,
                },
              ]}
            />
          </div>
          <div className='form_group wrap wd_full'>
            <strong className='form_label auto'>최종수정일</strong>
            <div class='datepicker_wrap'>
              <DatePicker
                type={'date'}
                name='sdate'
                id='sdate'
                pattern={'yyyy.MM.dd'}
                title='시작날짜를 입력하세요. 입력방법 예시:2024.01.01'
                placeholder='YYYY.MM.DD'
                wihtoutWrapTag={true}
              />
              <span className='date_bar'>-</span>
              <DatePicker
                type={'date'}
                name='sdate'
                id='sdate'
                pattern={'yyyy.MM.dd'}
                title='종료날짜를 입력하세요. 입력방법 예시:2024.01.01'
                placeholder='YYYY.MM.DD'
                wihtoutWrapTag={true}
              />
            </div>
          </div>
          <div className='sch_btn_area'>
            <Button as='button' color='4' class='sch size_md' text='초기화' />
            <Button
              as='button'
              color='2'
              class='sch size_md'
              text='검색'
              onClick={search}
            />
          </div>
        </div>
      </div>

      <div className='board_info'>
        <p className='page not_line'>
          <span className='total'>
            검색결과 <b>{totalCount}</b>건
          </span>
          <span>
            <b>등록기관</b>
            <span class='tag1'>전체</span>
            <span class='tag1'>행정안전부</span>
            <span class='tag1'>고용노동부</span>
          </span>
        </p>

        <form name='' id='' method='post' action='' className='fr'>
          <fieldset>
            <legend className='blind'>게시판 정렬</legend>
            <div className='form'>
              <div className='item'>
                <span className='label'>목록 표시 개수</span>
                <div className={`select_list ${showPopup1 ? 'active' : ''}`}>
                  <a
                    href='javascript:void(0)'
                    onClick={() => {
                      setShowPopup1(!showPopup1);
                    }}
                  >
                    <span className='sr_only'>선택된 옵션</span>
                    {pageSize}개
                  </a>
                  <ul className='list'>
                    <li>
                      <a
                        href='javascript:void(0)'
                        className={`${pageSize == 5 ? 'on' : ''}`}
                        onClick={(e) => {
                          changePageSize(e, 5);
                        }}
                      >
                        5개
                      </a>
                    </li>
                    <li>
                      <a
                        href='javascript:void(0)'
                        className={`${pageSize == 10 ? 'on' : ''}`}
                        onClick={(e) => {
                          changePageSize(e, 10);
                        }}
                      >
                        10개
                      </a>
                    </li>
                    <li>
                      <a
                        href='javascript:void(0)'
                        className={`${pageSize == 15 ? 'on' : ''}`}
                        onClick={(e) => {
                          changePageSize(e, 15);
                        }}
                      >
                        15개
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <WorkWikiList dataList={dataList} />
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
    </>
  );
}
