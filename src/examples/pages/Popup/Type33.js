import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import _ from 'lodash';
import { useForm } from 'react-hook-form';
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
import ReactTable from '../../Components/ReactTable';
const columns = [
  {
    id: 'mykeyword',
    header: '나의 키워드',
    cellRender: (cell) => {
      let title = cell.mykeyword;
      if (!_.isEmpty(cell.mykeyword)) {
        return (
          <>
            <a href='javascript:void(0)' class='dot_txt1'>
              {title}
            </a>
          </>
        );
      } else {
        return null;
      }
    },
  },
  {
    id: 'fullkeyword',
    header: '전체 키워드',
    cellRender: (cell) => {
      let title = cell.fullkeyword;
      return (
        <>
          <a href='javascript:void(0)' class='dot_txt1'>
            {title}
          </a>
        </>
      );
    },
  },
];
const data = [
  { mykeyword: '음식', fullkeyword: '교육' },
  { mykeyword: '반려식물', fullkeyword: '관광' },
  { mykeyword: '', fullkeyword: '시설' },
  { mykeyword: '', fullkeyword: '서울시' },
  { mykeyword: '', fullkeyword: '건강' },
];
function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
    console.log(data);
  });
  return (
    <>
      <CommonPopup
        showPopup={showPopup}
        onClose={() => {
          setShowPopup(false);
        }}
        closeButtonTitle={''}
        closeButtonOnClick={(e) => {
          //reset();
          setShowPopup(false);
        }}
        title={'선택'}
      >
        {' '}
        <div class='pop_content'>
          <div class='board_list'>
            <ReactTable
              columns={columns}
              data={tableData}
              className='tstyle_view not_line'
            />
          </div>
        </div>{' '}
      </CommonPopup>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>page title</h2>
      </div>

      <div class='contents_area'>
        {' '}
        <Button
          text={'팝업열기'}
          onClick={() => {
            setShowPopup(!showPopup);
          }}
        />
      </div>

      {/* <!-- //컨텐츠 입력 영역 --> */}
    </>
  );
}

export default App;
