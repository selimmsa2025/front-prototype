import { Button, Textarea, Input } from '../../Element';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Comment from './Comment';
export default function WorkWikiView () {
  const [commentList, setCommentList] = useState([]);

  const getCommentList = async () => {
    const response = await axios.get('/mockupServer/getCommentList.json');
    setCommentList(response.data);
  };

  useEffect(() => {
    getCommentList();
  }, []);

  return (
    <>
      <h2 class='h-tit2'>
        <span class='tag1'>배지1</span> 업무위키 작성 및 활용 방안
      </h2>
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
              <th scope='row'>조직별</th>
              <td colspan='3'>중앙행정기관 {'>'} 행정안전부</td>
            </tr>
            <tr>
              <th scope='row'>조회권자</th>
              <td>행정안전부</td>
              <th scope='row'>공동편집자</th>
              <td>김공동</td>
            </tr>
            <tr>
              <th scope='row'>최종수정자</th>
              <td>김작성</td>
              <th scope='row'>최종수정일</th>
              <td>2024.04.25</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class='tit_area'>
        <h3 class='h-tit4'>개요</h3>
      </div>
      <Textarea
        class='textarea'
        name=''
        id=''
        placeholder='업무위키 개요입니다.'
      />

      <div class='tit_area type2'>
        <h3 class='h-tit4'>내용</h3>
      </div>
      <Textarea
        class='textarea'
        name=''
        id=''
        placeholder='업무위키 내용입니다.'
      />
      <div class='tit_area type2'>
        <h3 class='h-tit4'>첨부파일</h3>
        <div class='right_items'>
          <Button
            as='a'
            color='4'
            download='download'
            title='다운로드'
            text='전체 다운로드'
          />
        </div>
      </div>
      <div class='file_list'>
        <ul>
          <li class='pdf'>
            <p class='text'>
              첨부파일의 제목인 파일명이 들어갑니다. [pdf, 328MB]
            </p>
            <div>
              <Button
                as='a'
                color='4'
                download='download'
                title='다운로드'
                text='다운로드'
              />
            </div>
          </li>
        </ul>
      </div>
      <Comment commentList={commentList} />
    </>
  );
}
