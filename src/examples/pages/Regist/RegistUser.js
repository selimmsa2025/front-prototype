import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { Input, Button, Select, Check, Radio } from '../../Components/Element';
import Breadcrumb from '../../Components/Breadcrumb';
import _ from 'lodash';
export default function RegistUser({ }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [tooltipOpen, setTooltipOpen] = useState(false);
  return (
    <>
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>page title</h2>
      </div>
      <div class='contents_area'>
        <div class='tit_area'>
          <h3 class='h-tit3'>사용자 추가</h3>
        </div>
      </div>

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class='board_list'>
          <table class='tstyle_write'>
            <caption>
              사용자 추가 - 기관명, 프로필이미지, 아이디, 비밀번호, 비밀번호
              확인, 이름(한국어), 기타메일, 사무실 전화번호, 부서(직책), 직위,
              상태, 보안등급들로 구성
            </caption>
            <colgroup>
              <col style={{ width: '15%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>기관명</th>
                <td>행정안정부</td>
              </tr>
              <tr>
                <th scope='row'>프로필 이미지</th>
                <td>
                  <div class='profile_img'>
                    <img src='/img/common/noimage.jpg' alt='' />
                  </div>
                  <input
                    type='file'
                    name='profile_image'
                    title='profile_image'
                    id='profile'
                    class='sr-only'
                  />
                  <label for='profile' class='btn2'>
                    <span class='sr-only'>프로필 이미지</span>추가
                  </label>
                  <a href='#' class='btn4'>
                    삭제
                  </a>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  아이디<span class='essential'>(필수)</span>
                </th>
                <td>
                  <div class='form_group'>
                    <Input
                      class={`size_xmd ${errors.userId ? 'error' : ''}`}
                      id='frm1'
                      title='아이디를 입력해주세요'
                      placeholder='아이디를 입력해주세요'
                      register={register('userId', {
                        required: '필수입력 항목입니다.',
                      })}
                    />
                    <a href='#' class='btn4'>
                      중복확인
                    </a>
                    {errors.userId && (
                      <p class='color_txt type1'>{errors.userId.message}</p>
                    )}
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  비밀번호<span class='essential'>(필수)</span>
                </th>
                <td>
                  <div class='pw_group size_xmd on'>
                    <Input
                      type='password'
                      class={`${errors.password ? 'error' : ''}`}
                      name='frm2'
                      id='frm2'
                      title='비밀번호를 입력해주세요'
                      placeholder='비밀번호를 입력해주세요'
                      register={register('password', {
                        required: '비밀번호는 필수입력사항입니다.',
                        validate: (value) =>
                          /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/.test(value)
                            ? true
                            : '비밀번호를 확인해주세요',
                      })}
                    />
                    <a href='#' class='view'>
                      <span class='sr-only'>비밀번호 보기</span>
                    </a>
                    {errors.password && (
                      <p class='color_txt type1'>{errors.password.message}</p>
                    )}

                    {/* <!-- 비밀번호가 보여질 경우 분모 .pw_group에 class="on" 추가 / 비밀번호 감춰질 경우 .pw_group에 class="on" 제거 --> */}
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  비밀번호 확인<span class='essential'>(필수)</span>
                </th>
                <td>
                  <div class={`pw_group size_xmd ${tooltipOpen ? 'on' : ''}`}>
                    <Input
                      type='password'
                      name='frm3'
                      id='frm3'
                      class={`${errors.passwordCheck ? 'error' : ''}`}
                      title='비밀번호를 입력해주세요'
                      placeholder='비밀번호를 입력해주세요'
                      register={register('passwordCheck', {
                        required: '필수입력 항목입니다.',
                        validate: (value) =>
                          value == watch('password')
                            ? true
                            : '비밀번호를 확인해주세요',
                      })}
                    />
                    <a href='#' class='view'>
                      <span class='sr-only'>비밀번호 보기</span>
                    </a>
                    {/* <!-- 비밀번호가 보여질 경우 분모 .pw_group에 class="on" 추가 / 비밀번호 감춰질 경우 .pw_group에 class="on" 제거 --> */}

                    {errors.passwordCheck && (
                      <p class='color_txt type1'>
                        {errors.passwordCheck.message}
                      </p>
                    )}
                  </div>
                  <p
                    class='txt_help type2'
                    onClick={() => {
                      setTooltipOpen(!tooltipOpen);
                    }}
                  >
                    힌트 메시지
                  </p>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  이름(한국어)<span class='essential'>(필수)</span>
                </th>
                <td>
                  <Input
                    class={`size_sm ${errors.passwordCheck ? 'error' : ''}`}
                    name='frm4'
                    id='frm4'
                    title='이름을 입력해주세요.'
                    placeholder='이름을 입력해주세요'
                    register={register('userName', {
                      required: '필수입력 항목입니다.',
                    })}
                  />

                  {errors.userName && (
                    <p class='color_txt type1'>{errors.userName.message}</p>
                  )}
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  기타 메일<span class='essential'>(필수)</span>
                </th>
                <td>
                  <div class='form_group mail size_md'>
                    <Input
                      type='text'
                      name='frm5'
                      id='frm5'
                      class={`${errors.emailFirst ? 'error' : ''}`}
                      title='메일을 입력해주세요'
                      placeholder='메일을 입력해주세요'
                      register={register('emailFirst', {
                        required: '필수입력 항목입니다.',
                      })}
                    />
                    <span>@</span>
                    <Input
                      name='frm6'
                      id='frm6'
                      class={`${errors.emailSecond ? 'error' : ''}`}
                      title='메일을 입력해주세요'
                      placeholder='메일을 입력해주세요'
                      register={register('emailSecond', {
                        validate: (value) => {
                          let result = true;
                          if (_.isEmpty(value)) {
                            result = '이메일형식을 확인해주세요';
                          }
                          return result;
                        },
                      })}
                    />
                    <Select
                      name='sel3'
                      id='sel3'
                      class='size_sm'
                      title='조건을 선택하세요.'
                      data={[
                        { id: 'all', name: '전체' },
                        { id: '1', name: '조건1' },
                        { id: '2', name: '조건2' },
                      ]}
                      onChange={(e) => {
                        let value = e.target.value;
                        setValue('emailSecond', value);
                      }}
                    />

                    {errors.emailFirst && errors.emailSecond && (
                      <p class='color_txt type1'>
                        {errors.emailFirst?.message ||
                          errors.emailSecond?.message}
                      </p>
                    )}
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>사무실 전화번호</th>
                <td>
                  <input
                    type='text'
                    class='form_text size_xmd'
                    name='frm7'
                    id='frm7'
                    title='전화번호를 입력해주세요.'
                    placeholder='전화번호를 입력해주세요'
                    register={register('officePhone', {})}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>부서(직책)</th>
                <td>
                  <div class='form_group'>
                    <Input
                      class=' size_xmd'
                      name='frm8'
                      id='frm8'
                      title='부서를 입력해주세요'
                      placeholder='부서를 입력해주세요'
                      register={register('depart', {})}
                    />
                    <Button as='a' color='2' text='검색'></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>직위</th>
                <td>
                  <div class='form_group'>
                    <Input
                      class='size_xmd'
                      name='frm9'
                      id='frm9'
                      title='직위를 입력해주세요'
                      placeholder='직위를 입력해주세요'
                      register={register('position', {})}
                    />
                    <Button as='a' color='2' text='검색'></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>상태</th>
                <td>
                  <Select
                    name='sel1'
                    id='sel1'
                    class='size_sm'
                    title='조건을 선택하세요.'
                    register={register('userStatus', {})}
                    data={[
                      { id: 'all', name: '전체' },
                      { id: '1', name: '조건1' },
                      { id: '2', name: '조건2' },
                    ]}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>보안등급</th>
                <td>
                  <Select
                    name='sel2'
                    id='sel2'
                    class=' size_sm'
                    title='조건을 선택하세요.'
                    register={register('secGrade', {})}
                    data={[
                      { id: 'all', name: '전체' },
                      { id: '1', name: '조건1' },
                      { id: '2', name: '조건2' },
                    ]}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class='tit_area'>
          <h3 class='h-tit3'>사용자 정보 항목</h3>
        </div>
        <div class='board_list'>
          <table class='tstyle_write'>
            <caption>공지사항 상세 - 항목들로 구성</caption>
            <colgroup>
              <col style={{ width: '15%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope='row'>비정규직여부</th>
                <td>
                  <Select
                    id='sel3'
                    class=' size_sm'
                    title='조건을 선택하세요.'
                    register={register('isTempPosition', {})}
                    data={[
                      { id: 'all', name: '전체' },
                      { id: '1', name: '조건1' },
                      { id: '2', name: '조건2' },
                    ]}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>승인서비스항목</th>
                <td>
                  <div class='form_group'>
                    <Input
                      type='text'
                      class='size_xmd'
                      name='frm10'
                      id='frm10'
                      title='부서를 입력해주세요'
                      placeholder='부서를 입력해주세요'
                      register={register('allowService', {})}
                    />
                    <Button as='a' color='2' text='검색'></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>직급</th>
                <td>
                  <Input
                    type='text'
                    class=' size_xmd'
                    id='frm11'
                    title='직급을 입력해주세요'
                    placeholder='직급을 입력해주세요'
                    register={register('officeRank', {})}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>디지털식별코드</th>
                <td>
                  <Input
                    type='text'
                    class=' size_xmd'
                    id='frm12'
                    title='디지털식별코드를 입력해주세요'
                    placeholder='디지털식별코드를 입력해주세요'
                    register={register('identification', {})}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>체크박스 예제</th>
                <td>
                  <Check
                    name='rdo_1'
                    register={register(`checkBox`, {
                      required: '필수 입력입니다.',
                    })}
                    onClick={(e) => {
                      const value = e.target.value;
                      setValue(`checkBox`, value);
                    }}
                    data={[
                      {
                        value: 1,
                        title: 'test1',
                        displayTitle: true,
                        checked: watch(`checkBox`) == 1,
                      },
                      {
                        value: 2,
                        title: 'test2',
                        displayTitle: true,
                        checked: watch(`checkBox`) == 2,
                      },
                    ]}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>라디오 예제</th>
                <td>
                  <Radio
                    name='rdo_2'
                    register={register(`radio`, {
                      required: '필수 입력입니다.',
                    })}
                    onClick={(e) => {
                      const value = e.target.value;
                      setValue(`radio`, value);
                    }}
                    data={[
                      {
                        value: 1,
                        title: 'test1',
                        displayTitle: true,
                        checked: watch(`radio`) == 1,
                      },
                      {
                        value: 2,
                        title: 'test2',
                        displayTitle: true,
                        checked: watch(`radio`) == 2,
                      },
                    ]}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class='bet_btn_area'>
          <div class='bottom_left_area'>
            <Button as='a' color='3' class=' type1' text='목록'></Button>
          </div>
          <div class='bottom_right_area'>
            <Button
              as='button'
              color='1'
              class=' type1'
              type='submit'
              text='저장'
            ></Button>
          </div>
        </div>

        {/* <Button as='button' type='submit' /> */}
      </form>
    </>
  );
}
