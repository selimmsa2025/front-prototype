import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  Input,
  Button,
  Check,
  DatePicker,
  Radio,
  Textarea,
  Select,
} from '../../Components/Element';
import { useForm } from 'react-hook-form';
export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const [menu, setMenu] = useState(1);
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <div class="commu_left_menu">
        <ul>
          {/* <!-- 
                    선택시 li에 class="active" 추가.
                --> */}
          <li
            class={`${menu == 1 && 'active'}`}
            onClick={() => {
              setMenu(1);
            }}
          >
            <a href="javascript:void(0)">기본정보 관리</a>
            <ul class="submenu">
              <li>
                <a href="javascript:void(0)">멤버 목록</a>
              </li>
              <li>
                <a href="javascript:void(0)">멤버 신청 현황</a>
              </li>
            </ul>
          </li>
          <li
            class={`${menu == 2 && 'active'}`}
            onClick={() => {
              setMenu(2);
            }}
          >
            <a href="javascript:void(0)">커뮤니티 멤버 관리</a>
            <ul class="submenu">
              <li>
                <a href="javascript:void(0)">멤버 목록</a>
              </li>
              <li>
                <a href="javascript:void(0)">멤버 신청 현황</a>
              </li>
            </ul>
          </li>
          <li
            class={`${menu == 3 && 'active'}`}
            onClick={() => {
              setMenu(3);
            }}
          >
            <a href="javascript:void(0)">메뉴구성 관리</a>
            <ul class="submenu">
              <li>
                <a href="javascript:void(0)">멤버 목록</a>
              </li>
              <li>
                <a href="javascript:void(0)">멤버 신청 현황</a>
              </li>
            </ul>
          </li>
          <li
            class={`${menu == 4 && 'active'}`}
            onClick={() => {
              setMenu(4);
            }}
          >
            <a href="javascript:void(0)">화면타입 관리</a>
            <ul class="submenu">
              <li>
                <a href="javascript:void(0)">멤버 목록</a>
              </li>
              <li>
                <a href="javascript:void(0)">멤버 신청 현황</a>
              </li>
            </ul>
          </li>
          <li
            class={`${menu == 5 && 'active'}`}
            onClick={() => {
              setMenu(5);
            }}
          >
            <a href="javascript:void(0)">휴지통 관리</a>
            <ul class="submenu">
              <li>
                <a href="javascript:void(0)">멤버 목록</a>
              </li>
              <li>
                <a href="javascript:void(0)">멤버 신청 현황</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="new_page">
        <div class="page_con">
          <div class="page-title-wrap" data-type="responsive">
            <div class="title-drop-wrap h-tit-drop">
              {/* <!--
                      .h-drop-btn 클릭시 class="active" toggle.
                      sr-only의 텍스트도 열기/닫기로 변경 됨
                        --> */}
              <button
                type="button"
                class={`h-tit h-drop-btn ${mobileMenu && 'active'}`}
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                }}
              >
                커뮤니티 멤버 관리<span class="sr-only">닫기</span>
              </button>
              <div class="drop-menu">
                <div class="drop-in">
                  <ul class="drop-list">
                    <li>
                      <a href="javascript:void(0)" class="item-link">
                        서브메뉴1
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="item-link">
                        서브메뉴2
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="item-link">
                        서브메뉴3
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3>커뮤니티 제목이 들어가는 자리입니다.</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="commu_pop not_bg">
              <div class="wh_bx">
                <div class="left_profile">
                  <span class="profile">
                    <img src="../img/common/noimage.jpg" alt="" />
                  </span>
                  <div class="btn_area">
                    <Button as="a" color="2" class="type2" text="이미지 추가" />
                    <Button as="a" color="4" class="type2" text="이미지 삭제" />
                  </div>
                  <ul class="dot_list2">
                    <li>이미지는 180px(가로), 120px (세로)을 권장합니다.</li>
                    <li>이미지 리사이즈는 너비 180px 기준으로 줄어듭니다.</li>
                    <li>
                      “한달간 이용순위”에 표시되려면, 커뮤니티 타입을
                      “공개형”으로, 멤버범위를 “전체기관”으로 해야 합니다.
                    </li>
                  </ul>
                </div>

                <div class="con_pop">
                  <div class="board_list">
                    <table class="tstyle_write">
                      <caption>
                        기본정보관리 - 커뮤니티 이름(한국어), 커뮤니티 소개,
                        리더, 커뮤니티 타입, 멤버 범위, 멤버 가입유형, 기본
                        가입레벨
                      </caption>
                      <colgroup>
                        <col style={{ width: '25%' }} />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            커뮤니티 이름(한국어)
                            <span class="essential">(필수)</span>
                          </th>
                          <td>
                            <div class="form_group">
                              <Input
                                name="frm1"
                                id="frm1"
                                title="검색어를 입력해주세요."
                                placeholder="검색어를 입력해주세요."
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">커뮤니티 소개</th>
                          <td>
                            <Textarea name="" id="" class="textarea"></Textarea>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            리더<span class="essential">(필수)</span>
                          </th>
                          <td>
                            <div class="form_group">
                              <Input
                                name="frm2"
                                id="frm2"
                                title="이름을 입력해주세요."
                                placeholder="이름을 입력해주세요."
                                value="홍길동"
                                readonly
                              />
                              <a href="javascript:void(0)" class="btn4">
                                선택
                              </a>
                              <Input
                                type="text"
                                class="form_text"
                                name="frm3"
                                id="frm3"
                                title="검색어를 입력해주세요."
                                placeholder=""
                              />
                              <a href="javascript:void(0)" class="btn2">
                                검색
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            커뮤니티 타입<span class="essential">(필수)</span>
                          </th>
                          <td>
                            <Radio
                              name="rdo_1"
                              data={[
                                { title: '공개형', value: 1 },
                                { title: '비공개형', value: 2 },
                              ]}
                            />
                            <p class="desc3">
                              *공개형으로 선택하면, 모든 사람들이 쉽게 찾아갈 수
                              있도록 검색됩니다.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">멤버 범위</th>
                          <td>전체기관</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            멤버 가입유형<span class="essential">(필수)</span>
                          </th>
                          <td>
                            <Radio
                              name="rdo_2"
                              data={[
                                { title: '즉시가입', value: 1 },
                                { title: '승인후 가입', value: 2 },
                              ]}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            기본 가입레벨<span class="essential">(필수)</span>
                          </th>
                          <td>
                            <Select
                              name="sel2"
                              id="sel2"
                              class="size_sm"
                              title="조건을 선택하세요."
                              data={[
                                { id: 'all', name: '멤버' },
                                { id: '1', name: '조건1' },
                                { id: '2', name: '조건2' },
                              ]}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="bet_btn_area">
              <div class="bottom_left_area">
                <Button as="a" color="4" class="type1" text="삭제" />
              </div>
              <div class="bottom_right_area">
                <Button as="a" color="3" class="type1" text="Secondary BTN" />
                <Button
                  as="a"
                  type="submit"
                  color="1"
                  class="type1"
                  text="저장"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
