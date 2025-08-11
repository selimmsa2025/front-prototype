import React, { useEffect, useState, useRef } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import axios from 'axios';
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
  Tree,
  Tab,
} from '../../Components/Element';
import CommonPopup from '../../Components/CommonPopup';
import { keys, values } from 'lodash';
import { useForm } from 'react-hook-form';
function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [tab, setTab] = useState(1);
  return (
    <>
      {/* <!-- 팝업 --> */} {/* <!-- 팝업 보여질 경우 .active 추가 -->*/}
      <CommonPopup
        showPopup={showPopup}
        size="middle"
        onClose={() => {
          setShowPopup(false);
        }}
        saveButtonTitle={'저장'}
        closeButtonTitle={'닫기'}
        saveButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        closeButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        title={'사용자 선택'}
      >
        {/* <!-- 팝업 보여질 경우 .active 추가 --> */}
        <div class="pop_tabs_area">
          <Tab
            type={1}
            data={[
              { index: 1, title: '사용자' },
              { index: 2, title: '부서사용자' },
            ]}
            currentIndex={tab}
            onChange={(index) => {
              setTab(index);
            }}
          />
          <div class="sel_bx">
            <Select
              name="sel2"
              id="sel2"
              class="size_msm"
              title="조건을 선택하세요."
              data={[
                { id: 'all', name: '전체' },
                { id: '1', name: '조건1' },
                { id: '2', name: '조건2' },
              ]}
            />
            <Select
              name="sel1"
              id="sel1"
              class="size_sm"
              title="조건을 선택하세요."
              data={[
                { id: 'all', name: '전체' },
                { id: '1', name: '조건1' },
                { id: '2', name: '조건2' },
              ]}
            />
          </div>
        </div>

        <div class="twin_area">
          <div class="small">
            <div class="form_wrap">
              <div class="form_group wd_full">
                <input
                  type="text"
                  class="form_text"
                  name="frm1"
                  id="frm1"
                  title="검색어를 입력해주세요."
                  placeholder="검색어를 입력해주세요."
                />
                <a href="#" class="btn2">
                  검색
                </a>
              </div>
            </div>
            <article class="tree mt_15">
              <Tree />
            </article>
          </div>
          <div class="large">
            <div class="board_info">
              <p class="page not_line fr">
                <span class="total">
                  검색 결과 <b>30</b>개
                </span>
              </p>
            </div>
            <div class="board_list over_row">
              <table class="tstyle_list">
                <caption>목록 - 선택박스, 이름으로 구성</caption>
                <colgroup>
                  <col style={{ width: '10%' }} />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">
                      <span class="sr-only">선택</span>
                    </th>
                    <th scope="col">이름</th>
                  </tr>
                </thead>
                <tbody>
                  {Array(30)
                    .fill({ name: '내용' })
                    .map((v, i) => (
                      <tr>
                        <td aria-label="선택">
                          <div class="form_chk ico_only">
                            <input
                              type="checkbox"
                              name="chk_1"
                              id={`chk_1-${i}`}
                            />
                            <label for={`chk_1-${i}`}>
                              <span class="sr-only">선택 3</span>
                            </label>
                          </div>
                        </td>
                        <td aria-label="이름">{v.name}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="tit_area top_line">
          <h3 class="h-tit3">선택된 계정</h3>
          <div class="right_items">
            <Button as="button" color="4" class="" text="">
              선택삭제<i class="ri-close-line"></i>
            </Button>
          </div>
        </div>
        <div class="board_list">
          <table class="tstyle_list">
            <caption>
              목록 - 번호, Column, Column, Column, Column으로 구성
            </caption>
            <colgroup>
              <col style={{ width: '10%' }} />
              <col />
              <col style={{ width: '10%' }} />
              <col style={{ width: '15%' }} />
              <col style={{ width: '10%' }} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">번호</th>
                <th scope="col">Column</th>
                <th scope="col">Column</th>
                <th scope="col">Column</th>
                <th scope="col">Column</th>
                <th scope="col">Column</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td aria-label="번호">1</td>
                <td aria-label="Column">내용</td>
                <td aria-label="Column">내용</td>
                <td aria-label="Column">내용</td>
                <td aria-label="Column">내용</td>
                <td aria-label="Column">내용</td>
              </tr>
              <tr>
                <td aria-label="번호">2</td>
                <td aria-label="Column">내용</td>
                <td aria-label="Column">내용</td>
                <td aria-label="Column">내용</td>
                <td aria-label="Column">내용</td>
                <td aria-label="Column">내용</td>
              </tr>
              <tr>
                <td aria-label="번호">3</td>
                <td aria-label="Column">내용</td>
                <td aria-label="Column">내용</td>
                <td aria-label="Column">내용</td>
                <td aria-label="Column">내용</td>
                <td aria-label="Column">내용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CommonPopup>
      {/* <!-- //팝업 --> */}
      <Breadcrumb />
      {/* <!-- 컨텐츠 타이틀 영역 --> */}
      <div class="page-title-wrap" data-type="responsive">
        <h2 class="h-tit">page title</h2>
      </div>
      {/* <!-- //컨텐츠 타이틀 영역 --> */}
      {/* <!-- 컨텐츠 입력 영역 --> */}
      <div class="contents_area">
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
