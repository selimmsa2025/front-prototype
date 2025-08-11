import { useForm } from 'react-hook-form';
import { useState, useEffect, useCallback } from 'react';
import {
  Input,
  Button,
  Select,
  Textarea,
  DatePicker,
} from '../../Components/Element';
import Breadcrumb from '../../Components/Breadcrumb';
import dayjs from 'dayjs';
import { Popup } from '../../Components/Element';
export default function RegistUser ({}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
    getFieldState,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [infoOpen, setInfoOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipOpen2, setTooltipOpen2] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [tab, setTab] = useState(0);

  return (
    <>
      <Popup
        showPopup={showPopup}
        onClose={() => {
          setShowPopup(false);
        }}
        leftButtonTitle={'취소'}
        rightButtonTitle={'확인'}
        leftButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        rightButtonOnClick={(e) => {
          setShowPopup(false);
        }}
        title={'팝업 타이틀'}
        subTitle={'내용 타이틀'}
        contents={
          '대화 상자는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정이 필요하거나 여러 작업을 포함할 수 있습니다.'
        }
      />
      <Breadcrumb />
      <div class='page-title-wrap' data-type='responsive'>
        <h2 class='h-tit'>당직근무(작성)</h2>
      </div>
      <div class='contents_area'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class='box_st1 sch_top_wrap'>
            <div class='form_wrap width_half valign_middle'>
              <div class='form_group'>
                <strong class='form_label'>당직일</strong>
                <div class='datepicker_wrap'>
                  <DatePicker
                    type={'date'}
                    pattern={'yyyy.MM.dd'}
                    title='시작날짜를 입력하세요. 입력방법 예시:2024.01.01'
                    placeholder='YYYY.MM.DD'
                    onChange={(date) => {
                      setValue('dutyDate', dayjs(date).format('YYYY.MM.DD'));
                    }}
                  />
                </div>
              </div>
              <div class='form_group'>
                <strong class='form_label'>당직유형</strong>
                <ul class='chk_list'>
                  <li>
                    <div class='form_chk'>
                      <Input
                        type='radio'
                        name='rdo_1'
                        id='rdo_1-1'
                        value='1'
                        // checked={getValues().dutyType == '1'}
                        register={register('dutyType', {})}
                      />
                      <label for='rdo_1-1'>숙직</label>
                    </div>
                  </li>
                  <li>
                    <div class='form_chk'>
                      <Input
                        type='radio'
                        name='rdo_1'
                        id='rdo_1-2'
                        value='2'
                        // checked={getValues().dutyType == '2'}
                        register={register('dutyType', {})}
                      />
                      <label for='rdo_1-2'>일직</label>
                    </div>
                  </li>
                </ul>
              </div>
              <div class='form_group'>
                <strong class='form_label'>보안점검번호</strong>
                <p>20240509-82945</p>
              </div>
              <div class='bet_btn_area'>
                <div class='fl'>
                  <div class={`desc_bubble ${tooltipOpen2 ? 'active' : ''}`}>
                    <button
                      type='button'
                      class='open'
                      onClick={() => setTooltipOpen2(!tooltipOpen2)}
                    >
                      <span class='sr-only'>설명창열기</span>
                      <i class='ri-information-2-fill'></i>
                    </button>
                    {/* <!-- 클릭시 분모 .desc_bubble에 class="active" 추가 --> */}
                    <div class='speech'>
                      <strong class='sp_tit'>도움말 제목</strong>
                      <p>[행사등록전 테스트용] 메뉴를 이용해주시기 바랍니다.</p>
                      <button
                        type='button'
                        class='close'
                        onClick={() => setTooltipOpen2(!tooltipOpen2)}
                      >
                        <span class='sr-only'>설명창닫기</span>
                        <i class='ri-close-line'></i>
                      </button>
                      {/* <!-- 클릭시 분모 .desc_bubble에 class="active" 제거 --> */}
                    </div>
                  </div>

                  <Button as='a' color='4' text='목록' />
                </div>
                <div class='fr'>
                  <Button as='a' color='4' text='당직근무일지 QR' />
                  <Button as='a' color='3' text='완료' />
                  <Button as='a' color='1' text='저장' />
                </div>
              </div>
            </div>
          </div>

          <div class='duty_area'>
            <div class='tab_depth4'>
              <ul>
                <li class='active'>
                  <a href='javascript:void(0);' onClick={() => setTab(0)}>
                    당직근무일지
                  </a>
                </li>
                {/* <!-- 선택된 옵션일 경우 class="active" 추가 --> */}
                <li>
                  <a href='javascript:void(0);' onClick={() => setTab(1)}>
                    보안점검일지
                  </a>
                </li>
              </ul>
            </div>
            {tab == 0 ? (
              <>
                <div class='box_st2'>
                  <div class='form_wrap width_half'>
                    <div class='form_group topover'>
                      <strong class='form_label'>
                        당직자<span class='essential'>(필수)</span>
                      </strong>
                      <div class='search_input'>
                        <Input
                          name='frm1'
                          id='frm1'
                          defaultValue='당직사령'
                          title='당직사령 팝업열림'
                          placeholder=''
                          readOnly={true}
                          register={register('dutyOfficer')}
                          onClick={() => setShowPopup(!showPopup)}
                        />
                      </div>
                      <div class='search_input'>
                        <Input
                          name='frm1'
                          id='frm1'
                          defaultValue='당직보좌관'
                          title='당직보좌관 팝업열림'
                          placeholder=''
                          readOnly={true}
                          register={register('dutyOfficer')}
                          onClick={() => setShowPopup(!showPopup)}
                        />
                      </div>
                    </div>
                    <div class='form_group valign_top'>
                      <strong class='form_label'>
                        지시받은 사항<span class='essential'>(필수)</span>
                        <span class='count'>
                          <b>0</b>/500
                        </span>
                      </strong>
                      <Textarea
                        class='textarea'
                        maxlength='500'
                        placeholder='내용을 입력해주세요.'
                        register={register('recievedOrder')}
                      ></Textarea>
                    </div>
                    <div class='form_group valign_top'>
                      <strong class='form_label'>
                        조치사항
                        <span class='count'>
                          <b>0</b>/1000
                        </span>
                      </strong>
                      <Textarea
                        class='textarea'
                        maxlength='1000'
                        placeholder='내용을 입력해주세요.'
                        register={register('actionInfo')}
                      ></Textarea>
                    </div>
                    <div class='form_group valign_top'>
                      <div class='form_label'>
                        지시한 사항<span class='essential'>(필수)</span>
                        <div
                          class={`desc_bubble ${tooltipOpen ? 'active' : ''}`}
                        >
                          <button
                            type='button'
                            class='open'
                            onClick={() => setTooltipOpen(!tooltipOpen)}
                          >
                            <span class='sr-only'>설명창열기</span>
                            <i class='ri-information-2-fill'></i>
                          </button>
                          {/* <!-- 클릭시 분모 .desc_bubble에 class="active" 추가 --> */}
                          <div class='speech'>
                            <strong class='sp_tit'>도움말 제목</strong>
                            <p>
                              [행사등록전 테스트용] 메뉴를 이용해주시기
                              바랍니다.
                            </p>
                            <button
                              type='button'
                              class='close'
                              onClick={() => setTooltipOpen(!tooltipOpen)}
                            >
                              <span class='sr-only'>설명창닫기</span>
                              <i class='ri-close-line'></i>
                            </button>
                            {/* <!-- 클릭시 분모 .desc_bubble에 class="active" 제거 --> */}
                          </div>
                        </div>
                        <span class='count'>
                          <b>0</b>/500
                        </span>
                      </div>
                      <Textarea
                        class='textarea'
                        maxlength='500'
                        placeholder='내용을 입력해주세요.'
                        register={register('orderInfo')}
                      ></Textarea>
                    </div>
                    <div class='form_group valign_top'>
                      <strong class='form_label'>
                        조치결과 사항
                        <span class='count'>
                          <b>0</b>/1000
                        </span>
                      </strong>
                      <Textarea
                        class='textarea'
                        maxlength='1000'
                        placeholder='내용을 입력해주세요.'
                        register={register('actionResult')}
                      ></Textarea>
                    </div>
                    <div class='form_group valign_top'>
                      <strong class='form_label'>
                        보고사항
                        <span class='count'>
                          <b>0</b>/1000
                        </span>
                      </strong>
                      <Textarea
                        class='textarea'
                        maxlength='1000'
                        placeholder='내용을 입력해주세요.'
                        register={register('reportInfo')}
                      ></Textarea>
                    </div>
                    <div class='form_group valign_top'>
                      <strong class='form_label'>
                        인계사항
                        <span class='count'>
                          <b>0</b>/1000
                        </span>
                      </strong>
                      <Textarea
                        class='textarea'
                        maxlength='1000'
                        placeholder='내용을 입력해주세요.'
                        register={register('transferInfo')}
                      ></Textarea>
                    </div>
                  </div>

                  <p class='desc3'>
                    *당직보고 게시문 파일 업로드 영역에 마우스를 클릭하시거나
                    첨부하시고자 하는 파일을 끌어다가(Drag) 당직보고 게시문 파일
                    업로드 영역에 두시면(Drop) 됩니다.
                  </p>
                  <div class='file_upload'>
                    <p>
                      첨부할 파일을 여기에 끌어다 놓거나. 파일 선택 버튼을 직접
                      선택해주세요.
                    </p>
                    <input
                      type='file'
                      id='fileIn1'
                      name='fileIn1'
                      title='파일선택'
                    />
                    <label for='fileIn1' class='btn1'>
                      <i class='ri-upload-line'></i> 파일선택
                    </label>
                  </div>
                  <div class='att_box'>
                    <h4 class='sr-only'>업로드된 파일</h4>
                    <div class='top clear'>
                      <strong class='tit'>
                        <em>3개</em> / 10개
                      </strong>
                      <a href='#' class='fr close'>
                        전체 파일 삭제
                      </a>
                    </div>
                    <ul class='upload_list'>
                      <li>
                        <div class='file'>
                          <p>
                            전입신고서 [주민등록법 시행령 : 별지서식 15,
                            15호의2호] [hwp, 17KB]
                          </p>
                          <button type='button' class='close'>
                            삭제
                          </button>
                        </div>
                      </li>
                      <li>
                        <div class='file'>
                          <p>
                            위임장(주민등록법 시행령 별지 제15호의2호서식) [hwp,
                            17KB]
                          </p>
                          <span class='spin'>
                            <span class='sr-only'>진행중</span>
                          </span>
                          {/* <!-- 업로드 진행완료시 class="on" 추가 --> */}
                        </div>
                      </li>
                      <li class='error'>
                        {/* <!-- 파일 업로드 에러시 class="error" 추가 --> */}
                        <div class='file'>
                          <p>
                            위임장(주민등록법 시행령 별지 제15호의2호서식) [hwp,
                            17KB]
                          </p>
                          <button type='button' class='close'>
                            삭제
                          </button>
                        </div>
                        <p class='txt'>
                          등록 가능한 파일 용량을 초과하였습니다. 20MB 미만의
                          파일만 등록할 수 있습니다.{' '}
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div class='bet_btn_area'>
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
                </div>
              </>
            ) : (
              <>
                <div className='box_st2'></div>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
