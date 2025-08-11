import { useForm } from 'react-hook-form';
import { useState, useEffect, useRef } from 'react';
import {
  Input,
  Button,
  Select,
  Check,
  Radio,
  DatePicker,
} from '../../Components/Element';
import TreeWithTab from '../../Components/TreeWithTab';
import Breadcrumb from '../../Components/Breadcrumb';
import axios from 'axios';
export default function KnowledgeRegist ({}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    unregister,
    getValues,
  } = useForm();
  const [treeData, setTreeData] = useState(undefined);

  const onSubmit = (data) => console.log(data);

  const formRef = useRef(null);

  const getTreeDataList = async () => {
    const response = await axios.get('/mockupServer/getTreeDataList.json');
    setTreeData(response.data);
  };
  useEffect(() => {
    getTreeDataList();
  }, []);

  const [leftOpen, setLeftOpen] = useState(true);

  return (
    <>
      <Breadcrumb />
      <div className='page-title-wrap' data-type='responsive'>
        <h2 className='h-tit'>지식등록</h2>
      </div>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <div className='contents_area'>
          <div className='in-between type_blog'>
            <div className={`blog_left ${leftOpen ? 'active' : ''}`}>
              <button
                type='button'
                className='bg_btn close'
                onClick={() => {
                  setLeftOpen(!leftOpen);
                }}
              >
                <span className='sr-only'>블로그메뉴 닫기</span>
              </button>
              {/* <!-- 클릭시 분모 .blog_left에 className="active" 제거 --> */}
              {treeData && <TreeWithTab treeData={treeData} />}
              <button
                type='button'
                className='bg_btn open'
                onClick={() => {
                  setLeftOpen(!leftOpen);
                }}
              >
                <span className='sr-only'>블로그메뉴 열기</span>
              </button>
              {/* <!-- 클릭시 분모 .blog_left에 className="active" 추가 --> */}
            </div>

            <div className='contents'>
              <div className='board_list mt_25'>
                <table className='tstyle_write'>
                  <caption>
                    게시판 상세 - 조직별, 조회권자, 공동편집자, 최종수정자,
                    최종수정일로 구성
                  </caption>
                  <colgroup>
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '35%' }} />
                    <col style={{ width: '15%' }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope='row'>타이틀</th>
                      <td colspan='3'>
                        <div className='form_group'>
                          <Input
                            name='frm1'
                            id='frm1'
                            title='항목을 입력해주세요.'
                            placeholder='항목을 입력해주세요.'
                          />
                          <Button as='button' color='2' text='유사지식 검색' />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>타이틀</th>
                      <td>
                        <Check
                          name='chk_1'
                          data={[
                            { value: 1, title: '선택 1' },
                            { value: 2, title: '선택 2' },
                            { value: 3, title: '선택 3' },
                          ]}
                        />
                      </td>
                      <th scope='row'>타이틀</th>
                      <td>
                        <div className='form_group'>
                          <Input
                            name='frm3'
                            id='frm3'
                            readonly
                            title='항목을 입력해주세요.'
                            placeholder='항목을 입력해주세요.'
                          />
                          <Button as='button' color='4' text='선택' />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>타이틀</th>
                      <td>
                        <div className='form_group'>
                          <Input
                            name='frm3'
                            id='frm3'
                            title='항목을 입력해주세요.'
                            placeholder='항목을 입력해주세요.'
                          />
                        </div>
                      </td>
                      <th scope='row'>타이틀</th>
                      <td>
                        <DatePicker
                          pattern={'yyyy.MM.dd'}
                          type={'date'}
                          title='시작날짜를 입력하세요.  입력방법 예시:2024.12.31'
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>타이틀</th>
                      <td>
                        <div className='form_group'>
                          <Input
                            name='frm3'
                            id='frm3'
                            readonly
                            title='항목을 입력해주세요.'
                            placeholder='항목을 입력해주세요.'
                          />
                          <Button as='button' color='4' text='선택' />
                        </div>
                      </td>
                      <th scope='row'>타이틀</th>
                      <td>
                        <div className='form_group'>
                          <Input
                            name='frm3'
                            id='frm3'
                            readonly
                            title='항목을 입력해주세요.'
                            placeholder='항목을 입력해주세요.'
                          />
                          <Button as='button' color='4' text='선택' />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>타이틀</th>
                      <td colspan='3'>
                        <Radio
                          name='rdo_1'
                          data={[
                            { value: 1, title: '선택 1' },
                            { value: 2, title: '선택 2' },
                          ]}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>타이틀</th>
                      <td colspan='3'>
                        <div className='file_upload mt_0'>
                          <p>
                            첨부할 파일을 여기에 끌어다 놓거나. 파일 선택 버튼을
                            직접 선택해주세요.
                          </p>
                          <input
                            type='file'
                            id='fileIn1'
                            name='fileIn1'
                            title='파일선택'
                          />
                          <label for='fileIn1' className='btn1'>
                            <i className='ri-upload-line'></i> 파일선택
                          </label>
                        </div>
                        <div className='att_box'>
                          <h4 className='sr-only'>업로드된 파일</h4>
                          <div className='top clear'>
                            <strong className='tit'>
                              <em>1개</em> / 10개
                            </strong>
                            <a href='#' className='fr close'>
                              전체 파일 삭제
                            </a>
                          </div>
                          <ul className='upload_list'>
                            <li>
                              <div className='file'>
                                <p>
                                  전입신고서 [주민등록법 시행령 : 별지서식 15,
                                  15호의2호] [hwp, 17KB]
                                </p>
                                <button type='button' className='close'>
                                  삭제
                                </button>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope='row'>타이틀</th>
                      <td colspan='3'>
                        <div className='form_group'>
                          <Input
                            name='frm10'
                            id='frm10'
                            title='파일추가'
                            placeholder=''
                          />
                          <Button as='button' color='4' text='파일추가' />
                        </div>
                        <Radio
                          class='mt_10'
                          name='rdo_2'
                          data={[
                            { value: 1, title: '선택 1' },
                            { value: 2, title: '선택 2' },
                          ]}
                        />

                        <div className='file_upload mb_0'>
                          <p>
                            첨부할 파일을 여기에 끌어다 놓거나. 파일 선택 버튼을
                            직접 선택해주세요.
                          </p>
                          <input
                            type='file'
                            id='fileIn2'
                            name='fileIn2'
                            title='파일선택'
                          />
                          <label for='fileIn2' className='btn1'>
                            <i className='ri-upload-line'></i> 파일선택
                          </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
