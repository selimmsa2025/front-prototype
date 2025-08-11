import Pagination from '../../Board/Pagination';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import _ from 'lodash';
import Answer from './Answer';
import { Button } from '../../Element';
export default function Question ({}) {
  const [dataList, setDataList] = useState([]);

  const getAnswerList = async () => {
    const response = await axios.get('/mockupServer/getAnswerList.json');
    setDataList(response.data);
  };
  useEffect(() => {
    getAnswerList();
  }, []);

  return (
    <>
      <div class='tit_area'>
        <h3 class='h-tit3'>등록된 답변</h3>
        <div class='right_items'>
          <Button color='4' size='' text='삭제' as='button'>
            <i class='ri-close-line'></i>
          </Button>
          <Button color='4' size='' text='인쇄' as='button'>
            <i class='ri-printer-line'></i>
          </Button>
          <Button color='4' size='' text='북마크' as='button'>
            <i class='ri-book-open-line'></i>
          </Button>
        </div>
      </div>
      <div class='board_list'>
        <table class='tstyle_write'>
          <caption>
            답변 상세 - 질문명, 조회수, 질문자, 최종수정일, 질문상태 들로 구성
          </caption>
          <colgroup>
            <col style={{ width: '15%' }} />
            <col style={{ width: '35%' }} />
            <col style={{ width: '15%' }} />
            <col style={{ width: '35%' }} />
          </colgroup>
          <tbody>
            <tr>
              <th scope='row'>질문명</th>
              <td colspan='3'>질의응답 테스트 내용이 들어갑니다.</td>
            </tr>
            <tr>
              <th scope='row'>조회수</th>
              <td>10204</td>
              <th scope='row'>질문자</th>
              <td>홍길동1234</td>
            </tr>
            <tr>
              <th scope='row'>최종수정일</th>
              <td>2023-12-12</td>
              <th scope='row'>질문상태</th>
              <td>답변완료</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class='content_view'>
        <h3 class='sr-only'>질문내용</h3>
        질문에 대한 내용이 들어갑니다. 질문에 대한 내용이 들어갑니다. 질문에
        대한 내용이 들어갑니다. 질문에 대한 내용이 들어갑니다. 질문에 대한
        내용이 들어갑니다. 질문에 대한 내용이 들어갑니다. 질문에 대한 내용이
        들어갑니다. 질문에 대한 내용이 들어갑니다. 질문에 대한 내용이
        들어갑니다. 질문에 대한 내용이 들어갑니다. 질문에 대한 내용이
        들어갑니다. 질문에 대한 내용이 들어갑니다. 질문에 대한 내용이
        들어갑니다. 질문에 대한 내용이 들어갑니다. 질문에 대한 내용이
        들어갑니다. 질문에 대한 내용이 들어갑니다. 질문에 대한 내용이
        들어갑니다. 질문에 대한 내용이 들어갑니다. 질문에 대한 내용이
        들어갑니다. 질문에 대한 내용이 들어갑니다. 질문에 대한 내용이
        들어갑니다. 질문에 대한 내용이 들어갑니다. 질문에 대한 내용이
        들어갑니다. 질문에 대한 내용이 들어갑니다. 질문에 대한 내용이
        들어갑니다. 질문에 대한 내용이 들어갑니다. 질문에 대한 내용이
        들어갑니다. 질문에 대한 내용이 들어갑니다.
      </div>
      <div class='file_list not_line'>
        <ul>
          <li class='pdf'>
            <p class='text'>
              첨부파일의 제목인 파일명이 들어갑니다. [pdf, 328MB]
            </p>
            <div>
              <Button
                color='4'
                download='download'
                title='다운로드'
                text='다운로드'
                size=''
              ></Button>
              <Button
                color='4'
                target='_blank'
                title='새창열림'
                text='바로가기'
                size=''
              ></Button>
            </div>
          </li>
          <li class='pdf'>
            <p class='text'>
              첨부파일의 제목인 파일명이 들어갑니다. [pdf, 328MB]
            </p>
            <div>
              <Button
                color='4'
                download='download'
                title='다운로드'
                text='다운로드'
                size=''
              ></Button>
              <Button
                color='4'
                target='_blank'
                title='새창열림'
                text='바로가기'
                size=''
              ></Button>
            </div>
          </li>
        </ul>
      </div>
      <div class='box_st4 answer_box'>
        <article class='comment_bx'>
          <h3 class='title'>
            답변<span>(3)</span>
          </h3>

          <div class='form'>
            <form name='cmtForm' method='post' action=''>
              <fieldset>
                <legend class='blind'>등록</legend>
                <div class='has_text'>
                  <input
                    type='text'
                    class='form_text'
                    name='frm0_1'
                    id='frm0_1'
                    title='타이틀을 입력해주세요.'
                    placeholder='타이틀을 입력해주세요.'
                  />
                  <textarea
                    class='textarea'
                    name=''
                    rows='4'
                    cols='76'
                    placeholder='내용을 입력해 주세요.'
                  ></textarea>
                </div>
                <Button text='등록' as='button' color='1' size='' />
              </fieldset>
            </form>
          </div>
        </article>
      </div>
      {dataList?.map((answer) => {
        {
          return <Answer answerData={answer} />;
        }
      })}
    </>
  );
}
