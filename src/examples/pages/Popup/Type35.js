import React, { useEffect, useState, useRef } from 'react';
import Breadcrumb from '../../Components/Breadcrumb';
import CommonPopup from '../../Components/CommonPopup';
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
} from '../../Components/Element';
import { useForm } from 'react-hook-form';
import { keys, values } from 'lodash';

function App () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm();
  const [showPopup, setShowPopup] = useState(true);
  const onSubmit = (data) => {
    console.log('🚀 ~ onSubmit ~ data:', data);
  };

  const formRef = useRef(null);

  return (
    <>
      {/* <!-- 팝업 --> */}
      <CommonPopup
        showPopup={showPopup}
        size='large'
        onClose={() => {
          setShowPopup(false);
        }}
        saveButtonTitle={'저장'}
        deleteButtonTitle={'삭제'}
        closeButtonTitle={'닫기'}
        deleteButtonOnClick={(e) => {
          formRef.current.dispatchEvent(
            new Event('submit', { cancelable: true, bubbles: true }),
          );
          // setShowPopup(false);
        }}
        saveButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        closeButtonOnClick={(e) => {
          reset();
          setShowPopup(false);
        }}
        title={'커뮤니티 제목이 들어가는 자리입니다'}
        showSubTitle={true}
        subTitle='온나라 지식'
      >
        <form
          ref={formRef}
          id='form_1'
          action={null}
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* <!-- 팝업 보여질 경우 .active 추가 --> */}
          <div class='pop_content'>
            <div class='commu_pop'>
              <div class='left_menu wh_bx'>
                <ul>
                  <li class='active'>
                    <a href='javascript:void(0)'>기본정보 관리</a>
                  </li>
                  <li>
                    <a href='javascript:void(0)'>커뮤니티 멤버 관리</a>
                  </li>
                  <li>
                    <a href='javascript:void(0)'>메뉴구성 관리</a>
                  </li>
                  <li>
                    <a href='javascript:void(0)'>화면타입 관리</a>
                  </li>
                  <li>
                    <a href='javascript:void(0)'>휴지통 관리</a>
                  </li>
                </ul>
              </div>

              <div class='wh_bx'>
                <div class='left_profile'>
                  <span class='profile'>
                    <img src='../img/common/noimage.jpg' alt='' />
                  </span>
                  <div class='btn_area'>
                    <Button as='a' color='2' text='이미지 추가' />
                    <Button as='a' color='4' text='이미지 삭제' />
                  </div>
                  <ul class='dot_list2'>
                    <li>이미지는 180px(가로), 120px (세로)을 권장합니다.</li>
                    <li>이미지 리사이즈는 너비 180px 기준으로 줄어듭니다.</li>
                    <li>
                      “한달간 이용순위”에 표시되려면, 커뮤니티 타입을
                      “공개형”으로, 멤버범위를 “전체기관”으로 해야 합니다.
                    </li>
                  </ul>
                </div>

                <div class='con_pop'>
                  <div class='board_list'>
                    <table class='tstyle_write'>
                      <caption>
                        기본정보관리 - 커뮤니티 이름(한국어), 커뮤니티 소개,
                        리더, 커뮤니티 타입, 멤버 범위, 멤버 가입유형, 기본
                        가입레벨
                      </caption>
                      <colgroup>
                        <col style={{ width: '43%' }} />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope='row'>
                            커뮤니티 이름(한국어)
                            <span class='essential'>(필수)</span>
                          </th>
                          <td>
                            <div class='form_group'>
                              <Input
                                name='frm1'
                                id='frm1'
                                title='검색어를 입력해주세요.'
                                placeholder='검색어를 입력해주세요.'
                                type='text'
                                class='form_text'
                                register={register('userId', {
                                  required: '필수입력 항목입니다.',
                                  validate: (value) =>
                                    /^(?=.*[가-힣]).{3,15}$/.test(value)
                                      ? true
                                      : '이름을 확인해주세요',
                                })}
                              />
                            </div>
                            {errors.userId && (
                              <p class='color_txt type1'>
                                {errors.userId.message}
                              </p>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>커뮤니티 소개</th>
                          <td>
                            <Textarea name='' id='' class='textarea' />
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>
                            리더<span class='essential'>(필수)</span>
                          </th>
                          <td>
                            <div class='form_group'>
                              <Input
                                type='text'
                                class='form_text'
                                name='frm2'
                                id='frm2'
                                title='이름을 입력해주세요.'
                                placeholder='이름을 입력해주세요.'
                                readonly
                                register={register('leader', {
                                  required: '리더선택은 필수입력사항입니다.',
                                })}
                              />
                              <Button as='a' color='4' text='선택' />
                              <input
                                type='text'
                                class='form_text'
                                name='frm3'
                                id='frm3'
                                title='검색어를 입력해주세요.'
                                placeholder=''
                                register={register('search', {})}
                              />
                              <Button as='a' color='2' text='검색' />
                            </div>
                            {errors.leader && (
                              <p class='color_txt type1'>
                                {errors.leader.message}
                              </p>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>
                            커뮤니티 타입<span class='essential'>(필수)</span>
                          </th>
                          <td>
                            <Radio
                              name='rdo_1'
                              register={register('community', {
                                required: '필수 입력입니다',
                              })}
                              onClick={(e) => {
                                const value = e.target.value;
                                setValue(`community`, value);
                              }}
                              data={[
                                {
                                  value: '1',
                                  title: '공개형',
                                  displayTitle: true,
                                  checked: watch(`community`) == 1,
                                },
                                {
                                  value: '2',
                                  title: '비공개형',
                                  displayTitle: true,
                                  checked: watch(`community`) == 2,
                                },
                              ]}
                            />
                            {errors.community && (
                              <p class='color_txt type1'>
                                {errors.community.message}
                              </p>
                            )}
                            <p class='desc3'>
                              *공개형으로 선택하면, 모든 사람들이 쉽게 찾아갈 수
                              있도록 검색됩니다.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>멤버 범위</th>
                          <td>전체기관</td>
                        </tr>
                        <tr>
                          <th scope='row'>
                            멤버 가입유형<span class='essential'>(필수)</span>
                          </th>
                          <td>
                            <Radio
                              name='rdo_2'
                              register={register('member', {
                                required: '필수 입력입니다',
                              })}
                              onClick={(e) => {
                                const value = e.target.value;
                                setValue(`member`, value);
                              }}
                              data={[
                                {
                                  value: '1',
                                  title: '즉시가입',
                                  displayTitle: true,
                                  checked: watch(`member`) == 1,
                                },
                                {
                                  value: '2',
                                  title: '승인후 가입',
                                  displayTitle: true,
                                  checked: watch(`member`) == 2,
                                },
                              ]}
                            />
                            {errors.member && (
                              <p class='color_txt type1'>
                                {errors.member.message}
                              </p>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>
                            기본 가입레벨<span class='essential'>(필수)</span>
                          </th>
                          <td>
                            <Select
                              name='sel1'
                              id='sel1'
                              class='size_sm'
                              title='조건을 선택하세요.'
                              register={register('level', {
                                require: '기본 가입레벨은 필수입력사항입니다.',
                              })}
                              data={[
                                { id: 'all', name: '멤버' },
                                { id: '1', name: '조건1' },
                                { id: '2', name: '조건2' },
                              ]}
                            />
                            {errors.level && (
                              <p class='color_txt type1'>
                                {errors.level.message}
                              </p>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class='sm_btn_box fr'></div>
          </div>
        </form>
        {/* <a href='#' class='close_btn'>
          <span class='sr-only'>팝업 닫기</span>
        </a> */}
        {/*<!-- 팝업 닫을 경우 분모.popup의 .active 삭제 -->*/}
      </CommonPopup>
      {/* <!-- //팝업 --> */}

      <Breadcrumb />
      {/* <!-- 컨텐츠 타이틀 영역 --> */}
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>page title</h2>
      </div>
      {/* <!-- //컨텐츠 타이틀 영역 --> */}

      {/* <!-- 컨텐츠 입력 영역 --> */}
      <div class='contents_area'>
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
