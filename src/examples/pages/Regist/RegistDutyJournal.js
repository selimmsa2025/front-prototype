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

  const [showPopup, setShowPopup] = useState(false);
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
        <h2 class='h-tit'>당직근무(행정안전부)</h2>
      </div>
      <div class='contents_area'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class={`box_st4 txt_notice ${infoOpen ? 'active' : ''}`}>
            <button
              type='button'
              class='title'
              onClick={() => setInfoOpen(!infoOpen)}
            >
              알림말의 타이틀을 입력해주세요.
            </button>
            {/* <!-- 클릭시 분모 .txt_notice에 class="active" toggle  --> */}
            <div class='hidden_bx'>
              <h3 class='tit'>행정안전부 당직실에서 말씀드립니다!</h3>
              <ul class='dot1'>
                <li>
                  동절기 피해예방을 위한 당직근무 강화 안내
                  <ul class='dot2'>
                    <li>창문개폐 확인, 취약시설 점검 등 시설물 관리 철저</li>
                    <li>사무실 전열기구 전원 차단 등 방화 점검 철저</li>
                    <li>피해발견 시 즉각 조치 및 상황보고</li>
                  </ul>
                  <p>
                    *각 기관 당직자는 청사 화재예방 및 순찰강화(정시·수시)를
                    하여 주시고, 특이사항이나 이상 징후 발생 시 즉각적인
                    상황보고가 될 수 있도록 안전을 기하여 주시기 바랍니다.
                  </p>
                </li>
                <li>
                  특이 사항, 이상 징후 발견 시 즉각 대응 및 상황 보고
                  <ul class='dot2'>
                    <li>
                      최근 당직실에 걸려온 민원전화 불친절하게 대응하여 민원.
                      정보공개 등의 사례가 발생하고 있사오니. 유의하여 주시기
                      바랍니다.
                    </li>
                  </ul>
                </li>
              </ul>
              <h3 class='tit'>기관별 당직자들께 부탁드립니다.</h3>
              <ul class='dot1'>
                <li>
                  소속기관의 보고버튼을 선택하여 당직책임자, 당직보고자,
                  당직근무인원을 입력해주세요.
                  <p>
                    *근무 중 이상이 있는 경우 유선으로 행안부 당직자에게 보고
                  </p>
                </li>
                <li>시도 및 소속기관별 당직보고는 1회 보고로 완료됩니다.</li>
              </ul>
            </div>
          </div>
          <div class='box_st1 sch_top_wrap'>
            <div class='form_wrap width_half valign_middle'>
              <div class='form_group'>
                <strong class='form_label lg'>당직일</strong>
                <div class='datepicker_wrap'>
                  {/* <Input type='hidden' register={register('dutyDate', {})} /> */}
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
                <strong class='form_label lg'>당직유형</strong>
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
            </div>
          </div>
          <div class='duty_area'>
            <div class='box_st2'>
              <div class='form_wrap width_half'>
                <div class='form_group'>
                  <strong class='form_label'>당직사령</strong>
                  <div class='search_input'>
                    <Input
                      name='frm1'
                      id='frm1'
                      defaultValue='당직사령'
                      title='당직사령 팝업열림'
                      placeholder=''
                      readonly
                      register={register('dutyOfficer')}
                      onClick={() => setShowPopup(!showPopup)}
                    />
                    {/* <!-- input 클릭시 팝업 열림 --> */}
                  </div>
                </div>
                <div class='form_group'>
                  <strong class='form_label'>당직보좌관</strong>
                  <div class='search_input'>
                    <Input
                      name='frm1'
                      id='frm1'
                      defaultValue='당직보좌관'
                      title='당직보좌관 팝업열림'
                      placeholder=''
                      readonly
                      register={register('dutyOfficer')}
                      onClick={() => setShowPopup(!showPopup)}
                    />
                    {/* <!-- input 클릭시 팝업 열림 --> */}
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
                    <div class={`desc_bubble ${tooltipOpen ? 'active' : ''}`}>
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
                          [행사등록전 테스트용] 메뉴를 이용해주시기 바랍니다.
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
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
