import React, { useReducer, useEffect, useState, useRef } from 'react';
import { Pagination, Button, Input } from 'components/element';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const initialState = {
  gdsPvsnMthSeCd: '',
  gdsTypeCd: '',
  gdsNm: '',
  gdsApiVerSn: '',
  progressStatus: '',
  status: '',
  searchText: '',
  sortColumn: '',
  sortOrder: '',
  currentPage: 1,
  pageSize: 10,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_MULTIPLE':
      return { ...state, ...action.payload };
    case 'RESET':
      return {
        ...initialState,
        currentPage: action.keep.currentPage,
        pageSize: action.keep.pageSize,
      };
    default:
      return state;
  }
}

export default function GmGdsList() {
  const location = useLocation();
  const navigate = useNavigate();
  const isFirstLoad = useRef(true);

  const passedState = location.state?.state;
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...passedState,
    currentPage: passedState?.currentPage || 1,
    pageSize: passedState?.pageSize || 10,
  });

  // 실제 API 호출 조건 상태
  const [searchParams, setSearchParams] = useState({
    ...initialState,
    ...passedState,
    currentPage: passedState?.currentPage || 1,
    pageSize: passedState?.pageSize || 10,
  });

  const [dataList, setDataList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [checkedList, setCheckedList] = useState([]);
  const [checkAll, setCheckAll] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);

  //목록호출
  const getBoardList = async (params) => {
    
    try {
      const response = await axios.post(
        'http://localhost:8000/saas-be-catalog/v1/gdsmng/list-gds',
        params
      );
      const list = response.data?.resultData?.resultList || [];
      const total = response.data?.resultData?.resultCnt || 0;

      setDataList(list);
      setTotalCount(total);
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
      setDataList([]);
      setTotalCount(0);
    }
  };

  useEffect(() => {
    if (isFirstLoad.current) {
      getBoardList(searchParams);
      isFirstLoad.current = false;
    }
  }, []);

  useEffect(() => {
    setCheckedList([]);
    setCheckAll(false);
  }, [dataList]);

  const handleInputChange = (e) => {
    dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value });
  };

  const handleSearch = () => {
    const newParams = {
      ...state,
      currentPage: 1,
    };
    setSearchParams(newParams);
    
    getBoardList(newParams);
    dispatch({ type: 'SET_FIELD', field: 'currentPage', value: 1 });
  };

  const handleClear = () => {
    dispatch({
      type: 'RESET',
      keep: { currentPage: state.currentPage, pageSize: state.pageSize },
    });
    navigate('/gmgds/list');
  };

  const handlePageChange = (page) => {
    const newParams = {
      ...searchParams,
      currentPage: page,
    };
    setSearchParams(newParams);
    getBoardList(newParams);
    dispatch({ type: 'SET_FIELD', field: 'currentPage', value: page });
  };

  const changePageSize = (e, size) => {
    e.preventDefault();
    const newParams = {
      ...searchParams,
      pageSize: size,
      currentPage: 1,
    };
    setSearchParams(newParams);
    getBoardList(newParams);
    dispatch({
      type: 'SET_MULTIPLE',
      payload: { pageSize: size, currentPage: 1 },
    });
  };

  // 정렬
  const changeSort = (column) => {
    const newOrder = state.sortColumn === column && state.sortOrder === 'ASC' ? 'DESC' : 'ASC';
    const newParams = {
      ...searchParams,
      sortColumn: column,
      sortOrder: newOrder,
      currentPage: 1,
    };
    setSearchParams(newParams);
    getBoardList(newParams);
    dispatch({
      type: 'SET_MULTIPLE',
      payload: { sortColumn: column, sortOrder: newOrder, currentPage: 1 },
    });
  };

  const renderSortIcon = (column) => {
    if (state.sortColumn === column) {
      return state.sortOrder === 'ASC' ? ' ▲' : ' ▼';
    }
    //임시
    return ' ▲▼';
  };
  useEffect(() => {
  renderSortIcon({ column: state.sortColumn, order: state.sortOrder });
  }, [state.sortColumn, state.sortOrder]);

  //TO-BE 검색조건 공통코드 정비하기
  return (
    <>
      <div className='tit_area'>
        <h3 className='h-tit3'>API 인증키 목록</h3>
      </div>

      <div className='board_info'>
        <div className='box_st1 sch_top_wrap'>
          <div className='form_wrap width_half'>
            <div className='form_group'>
              <strong className='form_label auto'>상 품 ID</strong>
              <Input
                className='form_text'
                name='gdsNm'
                value={state.gdsNm}
                onChange={handleInputChange}
                placeholder='상품ID를 입력해주세요.'
              />
            </div>
            <div className='form_group'>
              <strong className='form_label auto'> 상 품 명 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
              <Input
                className='form_text'
                name='gdsNm'
                value={state.gdsNm}
                onChange={handleInputChange}
                placeholder='상품명을 입력해주세요.'
              />
            </div>
            <div className='form_group'>
              <strong className='form_label auto'>서버구분</strong>
              <select
                name='gdsApiVerSn'
                value={state.gdsApiVerSn}
                onChange={handleInputChange}
                className='form_sel sch_type'
              >
                <option value=''>전체</option>
                <option value='dev'>개발환경</option>
                <option value='ops'>운영환경</option>
              </select>
            </div>
            <div className='form_group'>
              <strong className='form_label auto'>키 발급 여부</strong>
              <select
                name='gdsApiVerSn'
                value={state.gdsApiVerSn}
                onChange={handleInputChange}
                className='form_sel sch_type'
              >
                <option value=''>전체</option>
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>
            </div>
            <div className='sch_btn_area'>
              <Button as='button' className='sch' text='초기화' color={2} onClick={handleClear} />
              <Button as='button' className='sch' text='검색' color={1} onClick={handleSearch} />
            </div>
          </div>
        </div>
        <p className='page'>
          <span className='total'>
            총 <b>{totalCount}</b>개의 검색 결과가 있습니다.
          </span>
        </p>
        <form>
          <fieldset>
            <legend className='blind'>게시판 정렬</legend>
            <div className='form'>
              <div className='item'>
                <span className='label'>목록 표시 개수</span>
                <div className={`select_list ${showPopup1 ? 'active' : ''}`}>
                  <a
                    href='#!'
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPopup1(!showPopup1);
                    }}
                  >
                    <span className='sr_only'>선택된 옵션</span>
                    {state.pageSize}개
                  </a>
                  <ul className='list'>
                    {[20, 15, 10].map((size) => (
                      <li key={size}>
                        <a
                          href='#!'
                          className={state.pageSize === size ? 'on' : ''}
                          onClick={(e) => changePageSize(e, size)}
                        >
                          {size}개
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </div>

      <div className='board_list'>
        <table className='tstyle_list'>
          <caption>상품 목록</caption>
          <thead>
            <tr>
              <th>
                상품 ID
              </th>
              <th>
                상품명
              </th>
              <th>
                구분
              </th>
              <th>
                키 발급 여부
              </th>
              <th>키 발급일자</th>
            </tr>
          </thead>
          <tbody>
            {dataList.length > 0 ? (
              dataList.map((v, i) => (
                <tr
                  key={i}
                  onClick={() =>
                    navigate('/apikeydetail', {
                      state: {
                        gdsId: v.gdsId,
                        searchData: { ...state, currentPage: state.currentPage, pageSize: state.pageSize },
                      },
                    })
                  }
                  style={{ cursor: 'pointer' }}
                >
                  <td>{'SAAS0'+i}</td>
                  <td>{v.gdsNm}</td>
                  <td>{v.gdsTypeNm}</td>
                  <td>{v.gdsApiVerSn}</td>
                  <td>{v.frstCrtDt}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='6'>데이터가 없습니다.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className='bet_btn_area'>
        <div className='bottom_right_area'>
          <Button
            as='a'
            color='1'
            className='type1'
            text='등록'
            onClick={() => navigate('/gmgds/insert')}
          />
        </div>
      </div>

      <Pagination
        totalCount={totalCount}
        pageSize={state.pageSize}
        currentPage={state.currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}
