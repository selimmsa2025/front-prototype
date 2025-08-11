import Breadcrumb from '../../Components/Breadcrumb';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from '../../Components/CommentList';
import { useForm } from 'react-hook-form';
import {
  Input,
  Textarea,
  Button,
  Tab,
  Select,
  Check,
  Radio,
} from '../../Components/Element';
export default function AttendRegistView() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    unregister,
    getValues,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [tab, setTab] = useState(1);

  return (
    <>
      <Breadcrumb />
      <div class="page-title-wrap" data-type="responsive">
        <h2 class="h-tit">참석등록(교육청, 공공기관)</h2>
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
            모바일 타이틀<span class="sr-only">닫기</span>
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
      <div class="contents_area">
        <Tab
          type={1}
          data={[
            { index: 1, title: '참석등록' },
            { index: 2, title: '참석등록 확인/취소' },
          ]}
          currentIndex={tab}
          onChange={(index) => {
            setTab(index);
          }}
        />

        {tab == 1 ? (
          <>
            <div class="blue_box_edit">
              <div class="tit_box">
                <h3 class="title">참석등록(교육청,공공기관)</h3>
                <p class="desc2">
                  교육청,공공기관에서 행사 등 참석자를 사전 등록하는 화면입니다.
                </p>
              </div>

              <div class="inner_box">
                <div class="box_st4 sch_top_wrap">
                  <div class="form_wrap">
                    <div class="form_group">
                      <strong class="form_label">행사명</strong>
                      <Select
                        name="sel1"
                        id="sel1"
                        title="조건을 선택하세요"
                        data={[
                          {
                            id: 'all',
                            name: '2024년 온행정지원시스템 확산 교육',
                          },
                          {
                            id: '1',
                            name: '2024년 온행정지원시스템 확산 교육2',
                          },
                          { id: '2', name: '조건2' },
                        ]}
                      />
                    </div>
                  </div>
                </div>

                <div class="bx_info type_dot">
                  <ul>
                    <li>
                      <strong class="tit">행사명</strong>
                      <p class="desc2">2024년 온행정지원시스템 확산 교육</p>
                    </li>
                    <li>
                      <strong class="tit">행사장소</strong>
                      <p class="desc2">2024-08-03 10:00~15:20</p>
                    </li>
                    <li>
                      <strong class="tit">행사장소</strong>
                      <p class="desc2">2024-04-29 10:00~2024-04-30 10:00</p>
                    </li>
                    <li>
                      <strong class="tit">행사기관</strong>
                      <p class="desc2">행정안전부</p>
                    </li>
                  </ul>
                </div>

                <p class="color_txt type4">
                  아래의 정보로 [참석등록 확인/취소] 메뉴에서 자신이 등록한
                  참석자를 조회할 수 있습니다.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="board_list">
                    <table class="tstyle_write">
                      <caption>
                        참석등록 상세 - 성명, 핸드폰번호, 확인번호, 재확인들로
                        구성
                      </caption>
                      <colgroup>
                        <col style={{ width: '25%' }} />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="row">
                            성명<span class="essential">(필수)</span>
                          </th>
                          <td>
                            <Input
                              name="frm2_1"
                              id="frm2_1"
                              class={`${errors.name && 'error'}`}
                              title="항목을 입력해주세요."
                              placeholder="항목을 입력해주세요."
                              register={register('name', {
                                required: '필수입니다.',
                              })}
                            />
                            {errors.name && (
                              <p class="color_txt type1">
                                {errors.name.message}
                              </p>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            핸드폰번호<span class="essential">(필수)</span>
                          </th>
                          <td>
                            <Input
                              name="frm2_2"
                              id="frm2_2"
                              class={`${errors.phone && 'error'}`}
                              title="항목을 입력해주세요."
                              placeholder="예) 010-1234-1234"
                              register={register('phone', {
                                required: '필수입니다.',
                              })}
                            />
                            {errors.phone && (
                              <p class="color_txt type1">
                                {errors.phone.message}
                              </p>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            확인번호<span class="essential">(필수)</span>
                          </th>
                          <td>
                            <Input
                              name="frm2_3"
                              id="frm2_3"
                              class={`${errors.confirm && 'error'}`}
                              title="항목을 입력해주세요."
                              placeholder="확인번호를 입력해주세요. (숫자 6자리)"
                              register={register('confirm', {
                                required: '필수입니다.',
                              })}
                            />
                            {errors.confirm && (
                              <p class="color_txt type1">
                                {errors.confirm.message}
                              </p>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            재확인<span class="essential">(필수)</span>
                          </th>
                          <td>
                            <Input
                              name="frm2_4"
                              id="frm2_4"
                              class={`${errors.reConfirm && 'error'}`}
                              title="항목을 입력해주세요."
                              placeholder="확인번호를 한번 더 입력해주세요."
                              register={register('reConfirm', {
                                required: '필수입니다.',
                              })}
                            />
                            {errors.reConfirm && (
                              <p class="color_txt type1">
                                {errors.reConfirm.message}
                              </p>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="text_con">
                    <h4 class="tit">개인정보 수집 이용 동의 안내</h4>
                    <strong class="smtit">
                      개인정보 수집 이용 목적 및 항목
                    </strong>
                    <p class="desc2">
                      가) 수집이용목적 내용이 들어갑니다.수집이용목적 내용이
                      들어갑니다.가) 수집이용목적 내용이 들어갑니다.수집이용목적
                      내용이 들어갑니다.가) 수집이용목적 내용이
                      들어갑니다.수집이용목적 내용이 들어갑니다.가) 수집이용목적
                      내용이 들어갑니다.수집이용목적 내용이 들어갑니다.가)
                      수집이용목적 내용이 들어갑니다.수집이용목적 내용이
                      들어갑니다.가) 수집이용목적 내용이 들어갑니다.수집이용목적
                      내용이 들어갑니다.
                    </p>
                    <strong class="smtit">
                      개인정보 수집 이용 목적 및 항목
                    </strong>
                    <p class="desc2">
                      가) 수집이용목적 내용이 들어갑니다.수집이용목적 내용이
                      들어갑니다.가) 수집이용목적 내용이 들어갑니다.수집이용목적
                      내용이 들어갑니다.가) 수집이용목적 내용이
                      들어갑니다.수집이용목적 내용이 들어갑니다.가) 수집이용목적
                      내용이 들어갑니다.수집이용목적 내용이 들어갑니다.가)
                      수집이용목적 내용이 들어갑니다.수집이용목적 내용이
                      들어갑니다.가) 수집이용목적 내용이 들어갑니다.수집이용목적
                      내용이 들어갑니다.
                    </p>
                  </div>

                  <div class="bottom_chk_area txt_center">
                    <Radio
                      name="rdo_1"
                      data={[
                        {
                          title: '예',
                          value: 1,
                          checked: watch(`agree`) == 1,
                        },
                        {
                          title: '아니오',
                          value: 2,
                          checked: watch(`agree`) == 2,
                        },
                      ]}
                      register={register(`agree`, {
                        required: '필수 입력입니다.',
                        validate: (value) => {
                          if (value != 1) {
                            return '동의해주세요.';
                          }
                        },
                      })}
                    />
                    {errors.agree && (
                      <p class="color_txt type1">{errors.agree.message}</p>
                    )}
                  </div>

                  <button type="submit" class="btn_round">
                    확인
                  </button>
                </form>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
