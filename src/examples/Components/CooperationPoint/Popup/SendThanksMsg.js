import { useState } from 'react';
import { Button, Input, Textarea } from '../../Element';

export default function SendThanksMsg ({ close }) {
  const [receiver, setReceiver] = useState('');
  const [message, setMessage] = useState('');

  const sendPoint = () => {
    //send

    close();
  };
  return (
    <>
      <div className='popup active'>
        <article>
          <h2 className='txt_center'>감사 메세지 보내기</h2>
          <div className='pop_content'>
            <div className='box_st5 sch_top_wrap'>
              <div className='form_wrap'>
                <div className='form_group'>
                  <strong className='form_label'>성명</strong>
                  <Input
                    class='form_text'
                    name='frm2'
                    id='frm2'
                    title='검색어를 입력해주세요.'
                    placeholder='검색어를 입력해주세요.'
                    value={receiver}
                    onChange={(e) => setReceiver(e.target.value)}
                  />
                  <Button as='button' color='2' class='sch' text='사용자선택' />
                </div>
              </div>
            </div>

            <div className='clear mt_20'>
              <h3 className='tit1 fl'>
                마음을 담은 감사메세지를 보내시겠습니까?
              </h3>
              <span className='count fr'>
                <b>{message.length}</b>/100
              </span>
            </div>
            <Textarea
              name='text_content'
              id='fr_textarea'
              class='textarea'
              placeholder='감사메세지를 입력해주세요.'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></Textarea>

            <div className='center_btn_area mt_20'>
              <a
                href='javascript:void(0)'
                className='btn1 type3'
                onClick={sendPoint}
              >
                협업포인트 보내기
              </a>
            </div>
          </div>
          <a href='javascript:void(0)' className='close_btn' onClick={close}>
            <span className='sr-only'>팝업 닫기</span>
          </a>
        </article>
      </div>
    </>
  );
}
