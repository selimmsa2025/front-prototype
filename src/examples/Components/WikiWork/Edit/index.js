import { Button, Textarea, Input, Radio } from '../../Element';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Editor from '../../Editor';
import { DEXT5Upload } from 'dext5upload-react';
export default function WorkWikiEdit() {
  const [value, setValue] = useState('');

  const changeValue = (value) => {
    setValue(value);
  };
  return (
    <>
      <h2 class='h-tit2'>타이틀이 들어갑니다</h2>
      <div class='board_list mt_25'>
        <table class='tstyle_write'>
          <caption>
            게시판 상세 - 조직별, 조회권자, 공동편집자, 최종수정자, 최종수정일로
            구성
          </caption>
          <colgroup>
            <col style={{ width: '15%' }} />
            <col style={{ width: '35%' }} />
            <col style={{ width: '15%' }} />
          </colgroup>
          <tbody>
            <tr>
              <th scope='row'>
                타이틀<span class='essential'>(필수)</span>
              </th>
              <td colspan='3'>
                <Input
                  name='frm1'
                  id='frm1'
                  title='항목을 입력해주세요.'
                  placeholder='항목을 입력해주세요.'
                />
              </td>
            </tr>
            <tr>
              <th scope='row'>
                타이틀<span class='essential'>(필수)</span>
              </th>
              <td>
                <div class='form_group'>
                  <Input
                    name='frm2'
                    id='frm2'
                    title='항목을 입력해주세요.'
                    placeholder='항목을 입력해주세요.'
                  />
                  <Button as='button' color='4' class='close' />
                </div>
              </td>
              <th scope='row'>
                타이틀<span class='essential'>(필수)</span>
              </th>
              <td>
                <Radio
                  name='rdo_1'
                  data={[
                    { value: '1', title: '선택1' },
                    { value: '2', title: '선택2' },
                    { value: '3', title: '선택3' },
                  ]}
                  onChange={(e) => {
                    console.log('test :: ', e.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <th scope='row'>
                타이틀<span class='essential'>(필수)</span>
              </th>
              <td>
                <div class='form_group'>
                  <Input
                    name='frm3'
                    id='frm3'
                    title='항목을 입력해주세요.'
                    placeholder='항목을 입력해주세요.'
                  />
                  <Button as='button' color='4' class='close' />
                </div>
              </td>
              <th scope='row'>
                타이틀<span class='essential'>(필수)</span>
              </th>
              <td>
                <div class='form_group'>
                  <Input
                    name='frm4'
                    id='frm4'
                    title='항목을 입력해주세요.'
                    placeholder='항목을 입력해주세요.'
                  />
                  <Button as='button' color='4' class='close' />
                </div>
              </td>
            </tr>
            <tr>
              <th scope='row'>타이틀</th>
              <td colspan='3'>
                <Input
                  name='frm5'
                  id='frm5'
                  title='항목을 입력해주세요.'
                  placeholder='항목을 입력해주세요.'
                />
              </td>
            </tr>
            <tr>
              <th scope='row'>타이틀</th>
              <td colspan='3'>
                {/* <!-- 에디터가 오는 자리입니다. --> */}
                <Editor value={value} onChange={changeValue} />
              </td>
            </tr>
            <tr>
              <th scope='row'>타이틀</th>
              <td colspan='3'>
                <DEXT5Upload
                  debug={true}
                  id="dext5upload1"

                  mode='edit'
                  runtimes='html5'
                  componentUrl="/dext5upload/js/dext5upload.js"
                  config={{ MaxTotalFileSize: '100MB', MaxOneFileSize: '10MB', DevelopLangage: 'NONE' }}
                />
                {/* <div class='file_upload mt_0'>
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
                  <label htmlFor='fileIn1' class='btn1'>
                    <i class='ri-upload-line'></i> 파일선택
                  </label>
                </div> */}
                {/* <div class='att_box'>
                  <h4 class='sr-only'>업로드된 파일</h4>
                  <div class='top clear'>
                    <strong class='tit'>
                      <em>1개</em> / 10개
                    </strong>
                    <Button
                      as='a'
                      color='0'
                      class='fr close'
                      text='전체 파일 삭제'
                    />
                  </div>
                  <ul class='upload_list'>
                    <li>
                      <div class='file'>
                        <p>
                          전입신고서 [주민등록법 시행령 : 별지서식 15,
                          15호의2호] [hwp, 17KB]
                        </p>
                        <Button
                          as='button'
                          color='0'
                          class='close'
                          text='삭제'
                        />
                      </div>
                    </li>
                  </ul>
                </div> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
